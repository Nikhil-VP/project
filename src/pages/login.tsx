import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define an interface for the component's props
interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Replace this with your actual login logic
        const isAuthenticated = await fakeLogin(username, password);
        if (isAuthenticated) {
            navigate('/adminpage');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    const fakeLogin = async (username: string, password: string) => {
        // Simulate an API call
        return username === 'admin' && password === '123';
    };

    return (
        <div style={{ 
            maxWidth: '400px', 
            marginTop: '5rem',
            left: '50%', 
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '2rem', 
            borderRadius: '15px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#ffffff'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'rgb(124, 58, 237)' }}>Login</h1>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgb(124, 58, 237)' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ 
                            width: '100%', 
                            padding: '0.75rem', 
                            borderRadius: '15px', 
                            border: '1px solid rgb(124, 58, 237)',
                            boxSizing: 'border-box' 
                        }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgb(124, 58, 237)' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ 
                            width: '100%', 
                            padding: '0.75rem', 
                            borderRadius: '15px', 
                            border: '1px solid rgb(124, 58, 237)',
                            boxSizing: 'border-box' 
                        }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        borderRadius: '15px', 
                        border: 'none', 
                        backgroundColor: 'rgb(124, 58, 237)',
                        color: '#fff', 
                        fontSize: '1rem', 
                        cursor: 'pointer' 
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
