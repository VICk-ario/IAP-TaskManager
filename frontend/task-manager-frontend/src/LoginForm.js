import React, { useState } from 'react';
import { loginUser } from './auth';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(credentials);
            setMessage(`Login successful: ${response.data.token}`);
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={credentials.username}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={credentials.password}
                />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default LoginForm;
