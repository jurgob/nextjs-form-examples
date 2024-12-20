import { PGlite } from '@electric-sql/pglite';
import { drizzle as drizzlePgLite } from 'drizzle-orm/pglite';
import { migrate as pbLiteMitrate } from "drizzle-orm/pglite/migrator"


import { drizzle } from "drizzle-orm/node-postgres";
import pkg from 'pg';
const {Pool} = pkg;
import { migrate  as pgNodMigrate} from "drizzle-orm/node-postgres/migrator"
const migrationsFolder = path.resolve("./src/drizzle")
const MIGRATE_CONFIG =  {
    migrationsFolder
}
console.log(`MIGRATE_CONFIG migrationsFolder`, migrationsFolder);

// connectionString
import {env} from "../env";
import path from 'path';

export function createDb() {
    console.log(`createDb --env.DATABASE_URL `, env.DATABASE_URL);
    if(env.DATABASE_URL === ":inmemory:") {
        const client = new PGlite();
        const db = drizzlePgLite(client);
        const migrate = async () => {
            return await pbLiteMitrate(db,MIGRATE_CONFIG);
        }
        return {
            db,
            migrate
        };
    }else {
        const pool = new Pool({
            connectionString: env.DATABASE_URL
        });
        const db = drizzle(pool);
        const migrate = async () => {
            return await pgNodMigrate(db,MIGRATE_CONFIG);
        }
        return { 
            db,
            migrate
        };
    }
    
}


