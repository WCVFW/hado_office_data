import React, { useState, useEffect } from 'react';
import { User, Bell, Lock, Globe, Save, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const { theme, toggleTheme } = useTheme();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = storedUser.role === 'admin';

    // Tab specific states
    const [profileData, setProfileData] = useState({
        username: storedUser.username || '',
        email: 'admin@velmess.control', // Mock email as it's not in schema but good for UI
    });

    const [securityData, setSecurityData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [showPass, setShowPass] = useState(false);

    const [notifSettings, setNotifSettings] = useState(() => {
        const saved = localStorage.getItem('notifSettings');
        return saved ? JSON.parse(saved) : {
            desktopAlerts: true,
            soundEnabled: true,
            stockWarnings: true,
        };
    });

    useEffect(() => {
        localStorage.setItem('notifSettings', JSON.stringify(notifSettings));
    }, [notifSettings]);

    const tabs = [
        { id: 'profile', label: 'Profile Settings', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Lock },
        isAdmin ? { id: 'business', label: 'Business Rules', icon: Globe } : null,
        { id: 'system', label: 'System', icon: Globe },
    ].filter(Boolean);

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (window.electronAPI && window.electronAPI.updateUser) {
            try {
                const success = await window.electronAPI.updateUser(
                    storedUser.id,
                    profileData.username,
                    '', // No password update here
                    storedUser.role,
                    storedUser.shopId
                );
                if (success) {
                    const newUser = { ...storedUser, username: profileData.username };
                    localStorage.setItem('user', JSON.stringify(newUser));
                    showMessage('success', 'Profile updated successfully!');
                } else {
                    showMessage('error', 'Update failed.');
                }
            } catch (err) {
                showMessage('error', 'System Error.');
            }
        }
        setLoading(false);
    };

    const handleSecurityUpdate = async (e) => {
        e.preventDefault();
        if (securityData.newPassword !== securityData.confirmPassword) {
            showMessage('error', 'Passwords do not match!');
            return;
        }
        setLoading(true);
        if (window.electronAPI && window.electronAPI.updateUser) {
            try {
                const success = await window.electronAPI.updateUser(
                    storedUser.id,
                    storedUser.username,
                    securityData.newPassword,
                    storedUser.role,
                    storedUser.shopId
                );
                if (success) {
                    showMessage('success', 'Password updated successfully!');
                    setSecurityData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                } else {
                    showMessage('error', 'Update failed.');
                }
            } catch (err) {
                showMessage('error', 'System Error.');
            }
        }
        setLoading(false);
    };

    const [businessData, setBusinessData] = useState(() => {
        const saved = localStorage.getItem('businessSettings');
        return saved ? JSON.parse(saved) : {
            taxPercentage: 5,
            defaultDiscount: 0,
            invoicePrefix: 'VEL-',
            currency: '₹'
        };
    });

    useEffect(() => {
        localStorage.setItem('businessSettings', JSON.stringify(businessData));
    }, [businessData]);

    const renderContent = () => {
        switch (activeTab) {
            case 'business':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ padding: '24px', background: 'var(--bg-app)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 16px', color: 'var(--text-main)' }}>Pricing & Tax Rules</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>GST / Tax (%)</label>
                                    <input type="number" value={businessData.taxPercentage} onChange={e => setBusinessData({ ...businessData, taxPercentage: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-main)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Max Global Discount (%)</label>
                                    <input type="number" value={businessData.defaultDiscount} onChange={e => setBusinessData({ ...businessData, defaultDiscount: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-main)' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '24px', background: 'var(--bg-app)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 16px', color: 'var(--text-main)' }}>Invoice Customization</h4>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Bill Number Prefix</label>
                                <input type="text" value={businessData.invoicePrefix} onChange={e => setBusinessData({ ...businessData, invoicePrefix: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-main)' }} />
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Example: {businessData.invoicePrefix}0001</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={() => showMessage('success', 'Business rules saved!')} className="bg-gradient-primary" style={{ color: 'white', padding: '12px 24px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                                <CheckCircle size={18} /> Save Business Rules
                            </button>
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <form onSubmit={handleProfileUpdate}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                            <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <User size={40} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: 'var(--text-main)' }}>{storedUser.username}</h4>
                                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{storedUser.role.replace('_', ' ')}</p>
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Username</label>
                                <input
                                    type="text"
                                    value={profileData.username}
                                    onChange={e => setProfileData({ ...profileData, username: e.target.value })}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Email Address</label>
                                <input
                                    type="email"
                                    value={profileData.email}
                                    onChange={e => setProfileData({ ...profileData, email: e.target.value })}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Role (Permanent)</label>
                                <input type="text" value={storedUser.role} disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-app)', color: 'var(--text-secondary)', textTransform: 'uppercase' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" disabled={loading} className="bg-gradient-primary" style={{ color: 'white', padding: '12px 24px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
                                <Save size={18} /> {loading ? 'Saving...' : 'Save Settings'}
                            </button>
                        </div>
                    </form>
                );
            case 'security':
                return (
                    <form onSubmit={handleSecurityUpdate}>
                        <div style={{ maxWidth: '400px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Current Password</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showPass ? "text" : "password"}
                                        required
                                        value={securityData.currentPassword}
                                        onChange={e => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)', outline: 'none' }}
                                    />
                                    <div
                                        onClick={() => setShowPass(!showPass)}
                                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-secondary)' }}
                                    >
                                        {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>New Password</label>
                                <input
                                    type="password"
                                    required
                                    value={securityData.newPassword}
                                    onChange={e => setSecurityData({ ...securityData, newPassword: e.target.value })}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Confirm New Password</label>
                                <input
                                    type="password"
                                    required
                                    value={securityData.confirmPassword}
                                    onChange={e => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)', outline: 'none' }}
                                />
                            </div>
                            <button type="submit" disabled={loading} className="bg-gradient-primary" style={{ width: '100%', color: 'white', padding: '12px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
                                <Lock size={18} /> {loading ? 'Updating...' : 'Update Password'}
                            </button>
                        </div>
                    </form>
                );
            case 'notifications':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {Object.keys(notifSettings).map(key => (
                            <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-app)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-main)', textTransform: 'capitalize' }}>
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Receive alerts for critical system events</div>
                                </div>
                                <div
                                    onClick={() => setNotifSettings(prev => ({ ...prev, [key]: !prev[key] }))}
                                    style={{
                                        width: '50px', height: '26px', borderRadius: '13px',
                                        background: notifSettings[key] ? 'var(--color-primary)' : '#cbd5e1',
                                        position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
                                    }}
                                >
                                    <div style={{
                                        width: '20px', height: '20px', background: 'white', borderRadius: '50%',
                                        position: 'absolute', top: '3px', left: notifSettings[key] ? '27px' : '3px',
                                        transition: 'all 0.3s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'system':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ padding: '24px', background: 'var(--bg-app)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 16px', color: 'var(--text-main)' }}>Appearance</h4>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>System Theme</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Switch between light and dark mode</div>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    style={{ padding: '8px 20px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-main)', cursor: 'pointer', fontWeight: '600' }}
                                >
                                    Set to {theme === 'light' ? 'Dark' : 'Light'}
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: '24px', background: 'var(--bg-app)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 16px', color: 'var(--text-main)' }}>About System</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Application Name</span>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Velmess Smart Control</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Version</span>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>v2.0.4-premium</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Build ID</span>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>HMS-2026-X1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="animate-fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-main)', margin: '0 0 8px' }}>Settings</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Personalize your Velmess dashboard experience</p>
            </div>

            {message.text && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 20px', borderRadius: '12px', marginBottom: '24px',
                    background: message.type === 'success' ? '#dcfce7' : '#fee2e2',
                    color: message.type === 'success' ? '#166534' : '#991b1b',
                    border: `1px solid ${message.type === 'success' ? '#86efac' : '#fecaca'}`,
                    animation: 'fadeIn 0.3s ease'
                }}>
                    {message.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{message.text}</span>
                </div>
            )}

            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                {/* Sidebar Settings Tabs */}
                <div className="card" style={{ width: '280px', padding: '16px', position: 'sticky', top: '30px' }}>
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '14px', borderRadius: '12px',
                                    marginBottom: '8px',
                                    background: isActive ? 'var(--color-primary)' : 'transparent',
                                    color: isActive ? 'white' : 'var(--text-secondary)',
                                    fontWeight: isActive ? '600' : '500',
                                    textAlign: 'left',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: isActive ? '0 4px 12px rgba(37, 82, 103, 0.3)' : 'none'
                                }}
                            >
                                <Icon size={18} /> {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="card" style={{ flex: 1, padding: '32px', minHeight: '500px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                        {tabs.find(t => t.id === activeTab).label}
                    </h2>

                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Settings;
