import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/adminpage');
            } else {
                setError(data.error || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('Error connecting to server. Please try again.');
        }
    };

    return (
        <div style={{ 
            maxWidth: '400px', 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '2rem', 
            borderRadius: '15px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#ffffff'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'rgb(124, 58, 237)' }}>Login</h1>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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