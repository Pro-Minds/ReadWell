import React, { useEffect , useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetchUsers(); // implement this
            setUsers(response);
        };
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h3>Users</h3>
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>{user.username || user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;