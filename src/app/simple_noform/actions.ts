"use server";

import { dataService} from '@/dataService';  
export  async function createUser() {
    console.log("createUser");
    await dataService.addUser({name: "User " + Math.random()});
    return  await dataService.getUsers({});
   
}
export async function getUsers() {
    return  await dataService.getUsers({});
}