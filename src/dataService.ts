import {createDb} from "./db/db";
import { userTable, DBUserInsert} from "./db/schema";
import {env} from "./env";

export type User = {
    id: string;
    name: string;
}

export type InsertUserParams = Omit<User, "id">;

export async function createDataService() {
    const {db, migrate} = await createDb()  ;
    console.log("creating data service");
    console.log(`env.DATABASE_URL `, env.DATABASE_URL);
    await migrate();
    
    const addUser = async (params: InsertUserParams) => {
        const dbParams: DBUserInsert = {
            ...params 
        }
        return (await db.insert(userTable).values(dbParams).returning().execute())[0];   
    }
    const getUsers = async ({page=1, pageSize=10}) => {
        const offset = (page - 1) * pageSize;
        const todos:User[] = (await db.select().from(userTable).limit(pageSize).offset(offset)).map(el => {
            return {
                ...el,
                id: el.id.toString(),
                
            }
        });
        return todos;
    }

    return {
        addUser,
        getUsers
    }
}

export const dataService = await createDataService();
