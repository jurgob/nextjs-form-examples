"use server";

import { db} from '../db';  
export  async function createUser() {
    console.log("createUser");
    await db.addUser({name: "User " + Math.random()});
    return  await db.getUsers();
   
}
export async function getUsers() {
    return  await db.getUsers();
}