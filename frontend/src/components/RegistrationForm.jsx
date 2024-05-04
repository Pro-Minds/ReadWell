import React, { useState } from "react";

const RegistrationForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password ) return; //TODO: handle this later

        const response = await registerUser({ username, email, password });
        if (response.ok) {
            setUsername('');
            setEmail('');
            setPassword('');
            onSubmit?.();
        } else {
            // TODO: handle this later
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Registration</h3>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;