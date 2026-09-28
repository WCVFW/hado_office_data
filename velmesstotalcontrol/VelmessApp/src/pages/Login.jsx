import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { showLoader, hideLoader } = useLoading();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        showLoader();

        if (window.electronAPI && window.electronAPI.login) {
            try {
                const result = await window.electronAPI.login(username, password);
                if (result.success) {
                    localStorage.setItem('user', JSON.stringify(result.user));
                    setTimeout(() => {
                        hideLoader();
                        if (result.user.role === 'admin') {
                            navigate('/admin');
                        } else {
                            navigate('/shop');
                        }
                    }, 1000);
                    return;
                } else {
                    setError(result.message || 'Login failed');
                }
            } catch (err) {
                setError('System Error: Could not connect to database.');
                console.error(err);
            }
        } else {
            setError('Electron API not available');
        }

        hideLoader();
    };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            {/* Left Side - Brand / Image Panel */}
            <div style={{
                flex: '1.2',
                background: 'linear-gradient(135deg, #F27421 0%, #FF8A65 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }} className="hidden md:flex">
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(80px)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(60px)' }}></div>

                <div style={{ zIndex: 2, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            width: '120px', height: '120px',
                            borderRadius: '30px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 2.5rem',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}
                    >
                        <ChefHat size={60} color="#fff" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Velmess <span style={{ color: 'rgba(255,255,255,0.9)' }}>Smart Control</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '450px', lineHeight: '1.6', margin: '0 auto' }}
                    >
                        The ultimate operating system for modern food enterprises. Effortless scaling, masterfully controlled.
                    </motion.p>
                </div>

                <div style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px' }}>
                    POWERED BY HADO GLOBAL SERVICES PVT LTD • 2026
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div style={{
                flex: '1',
                background: 'var(--bg-app)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ width: '100%', maxWidth: '420px' }}
                >
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.75rem', letterSpacing: '-1px' }}>Portal Login</h2>
                        <div style={{ width: '40px', height: '4px', background: 'var(--color-primary)', borderRadius: '2px', marginBottom: '1.5rem' }}></div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Enter your credentials to access the command center.</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Username</label>
                            <div style={{ position: 'relative' }}>
                                <User size={20} color="#64748b" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                                <input
                                    type="text"
                                    placeholder="your_username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '16px 16px 16px 54px',
                                        borderRadius: '16px',
                                        border: '2px solid var(--border-color)',
                                        background: 'var(--input-bg)',
                                        color: 'var(--text-main)',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={20} color="#64748b" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '16px 16px 16px 54px',
                                        borderRadius: '16px',
                                        border: '2px solid var(--border-color)',
                                        background: 'var(--input-bg)',
                                        color: 'var(--text-main)',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    padding: '16px', borderRadius: '12px', background: '#fee2e2',
                                    color: '#b91c1c', fontSize: '0.95rem', marginBottom: '2rem',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    border: '1px solid #fecaca'
                                }}
                            >
                                <ShieldCheck size={20} /> {error}
                            </motion.div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '18px',
                                borderRadius: '16px',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                                boxShadow: '0 10px 25px rgba(242, 116, 33, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Sign In <ArrowRight size={22} />
                        </motion.button>
                    </form>

                    <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <span style={{ opacity: 0.7 }}>System access restricted.</span> <span style={{ color: 'var(--color-primary)', fontWeight: '700', cursor: 'pointer' }}>Contact Administrator</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
