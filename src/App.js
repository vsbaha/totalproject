import React, { useState, useEffect } from 'react';
import UserForm from "./pages/User/UserForm";
import UserList from "./pages/User/UserList";


function App() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:8000/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Ошибка при получении данных о пользователях:', error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const addUser = async (user) => {
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            setUsers([...users, data]);
        } catch (error) {
            console.error('Ошибка при добавлении пользователя:', error);
        }
    };
    const deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
            });
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error);
        }
    };


    return (
        <div className="app">
            <UserForm onSubmit={addUser} />
            <UserList users={users} onDelete={(id) => deleteUser(id)} />
        </div>
    );
}

export default App;
