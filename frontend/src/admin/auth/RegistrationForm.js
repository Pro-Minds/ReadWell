import React, { useState } from "react";
import api from '../../api';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/admins/register', {email, password});
            setSuccess(true);
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {success && <div>Registration successful!</div>}
            {error && <div className="error">{error}</div>}
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;