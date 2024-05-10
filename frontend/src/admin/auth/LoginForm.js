import React, { useState } from "react";
import api from '../../api';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/admins/login', {email, password});
            //     handle successful login
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;