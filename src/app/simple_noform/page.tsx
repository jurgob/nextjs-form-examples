'use client';
import { useEffect, useState } from 'react';
import {User} from '@/dataService';
import { createUser,getUsers } from './actions';
import {Button} from "../../components/button"
import { UserList } from '@/components/userslist';




export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    }, [])
    
    const addUser = async () => {
        const users = await createUser();
        setUsers(users);
    }

    return (
        <div>
            <h2>Simple Form </h2>
            <div>
                <Button 
                    onClick={addUser} 
                    type='submit' 
                >Add User with random name</Button>
                <UserList users={users} />
            </div>
        </div>
    )
}