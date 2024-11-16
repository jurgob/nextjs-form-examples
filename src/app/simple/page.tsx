'use client';
import { useEffect, useState } from 'react';
import {User} from '../db';
import { createUser,getUsers } from './actions';
import {Button} from "../components/button"
export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    }, [])
    
    return (
        <div>
            <h2>Simple Form </h2>
            <div>
                <Button 
                    onClick={async () => {
                        const users = await createUser();
                        setUsers(users);
                    }} 
                    type='submit' 
                >Add User with random name</Button>
                <h2>Users</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}