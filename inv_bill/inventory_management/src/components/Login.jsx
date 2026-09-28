import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hardcoded credentials as requested
        if (username === 'admin' && password === 'Veladmin') {
            onLogin();
        } else {
            setError('Invalid Username or Password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">VI</div>
                    <h2 className="login-title">Velmess Inventory</h2>
                    <p className="login-subtitle">Sign in to your account</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{ color: '#64748b' }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#64748b' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    {error && <div className="login-error">{error}</div>}
                    <button className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '10px' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
