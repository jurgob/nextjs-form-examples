import Redis from 'ioredis';

import { RedisMemoryServer } from 'redis-memory-server';

export type User = {
    id: string;
    name: string;
}

export type InsertUserParams = Omit<User, "id">;

export async function createClient() {
    console.log("createClient");
    const redisServer = new RedisMemoryServer();
    const host = await redisServer.getHost();
    const port = await redisServer.getPort();
    const redis = new Redis({
        host,
        port,
    });
    // return redis;

    function exit() {
        redis.disconnect();
        redisServer.stop();
    }

    async function addUser(params: InsertUserParams) {
        const {name}   = params;
        const id = crypto.randomUUID();
        return await redis.hset("user", id, JSON.stringify({  name }));
    }

    async function getUsers():Promise<User[]> {
        const userList = await redis.hgetall("user");
        return Object.entries(userList).map(([id, data]) => {
            return { id, ...JSON.parse(data) };
        });
    }

    return {
        addUser,
        getUsers,
        exit
    }

}

export const db = await createClient();

