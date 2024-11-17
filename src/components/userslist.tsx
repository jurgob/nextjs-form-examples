import { User } from "@/app/db"

export const UserList = ({users}: {users: User[]}) => {
    return (
        <div>
        <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}