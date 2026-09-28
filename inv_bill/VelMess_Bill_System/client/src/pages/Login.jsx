import { useState } from 'react';
import { Lock, User } from 'phosphor-react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple authentication logic
        // You can enhance this by checking against Google Sheets if you want
        if (username === 'admin' && password === 'admin') {
            onLogin({ name: 'Admin', role: 'owner' });
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)', // Teal Gradient
            fontFamily: "'Roboto', sans-serif"
        }}>
            <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: '#e6fffa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#0d9488'
                }}>
                    <Lock size={32} weight="fill" />
                </div>

                <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>Welcome Back</h2>
                <p style={{ color: '#666', marginBottom: '32px' }}>Sign in to continue to VelMess POS</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ textAlign: 'left', marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500', color: '#444' }}>Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={20} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ textAlign: 'left', marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500', color: '#444' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={20} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>
                    </div>

                    {error && (
                        <div style={{
                            background: '#fee2e2',
                            color: '#ef4444',
                            padding: '10px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            fontSize: '0.9rem'
                        }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: '#0d9488',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = '#0f766e'}
                        onMouseOut={(e) => e.target.style.background = '#0d9488'}
                    >
                        Sign In
                    </button>
                </form>

                <p style={{ marginTop: '24px', fontSize: '0.85rem', color: '#888' }}>
                    Standard Login: admin / admin
                </p>
            </div>
        </div>
    );
};

export default Login;
