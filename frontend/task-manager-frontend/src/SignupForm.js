import React, { useState } from 'react';
import { signupUser } from './auth';

const SignupForm = () => {
    const [data, setData] = useState({ username: '', password: '', email: '' });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To handle loading state

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await signupUser(data);
            setMessage('Signup successful');
            // Optionally, handle redirect here after signup
            // e.g., window.location.href = '/login'; // Redirect to login
        } catch (error) {
            setMessage('Signup failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2 className='logintxt'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={data.username}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={data.email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={data.password}
                />
                <button className='loginbtn' type="submit" disabled={isLoading}>
                    {isLoading ? 'Signing up...' : 'Sign up'}
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default SignupForm;
