// import {User} from '../db';
import {Button} from "@/components//ui/button"
import {Input} from "@/components/ui/input"
import {Heading, Heading2} from "@/components/ui/heading"
import { revalidatePath } from 'next/cache'

// import {UserList} from "@/components/userslist"
import { db} from '../db';  
import { UserList } from "@/components/userslist";

async function addUser (formData: FormData) {
    "use server";
    const userName = formData.get('user_name') as string;
    if (!userName) {
        return;
    }
    await db.addUser({name: userName});
    revalidatePath('/server_side_only');
};

export default  async function ServerSideOnly() {
    const users = await db.getUsers();
    return (
        <div className=" p-2 " >
            <Heading>Simple Form </Heading>
            <form  className="flex flex-col gap-2" action={ addUser}>
                <Heading2>Add User</Heading2>
                <label>User Name</label>
                <Input type='text' name="user_name" />
                <Button type='submit' >Add User</Button>
            </form>
            <UserList users={users} />
        </div>
    )
}