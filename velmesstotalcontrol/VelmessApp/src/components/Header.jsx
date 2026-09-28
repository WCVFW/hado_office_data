import React, { useState, useEffect, useRef } from 'react';
import { Search, Settings, Bell, User, Sun, Moon, Menu, AlertTriangle, Package, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleSidebar }) => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [alerts, setAlerts] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);

    // Breadcrumbs matching the path
    const path = location.pathname.split('/').filter(x => x).map(x => x.charAt(0).toUpperCase() + x.slice(1));
    const pageName = path[path.length - 1] || 'Dashboard';

    const [requests, setRequests] = useState([]);
    const [notifiedItems, setNotifiedItems] = useState(new Set());
    const userStored = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = userStored.role === 'admin';

    const fetchAllNotifications = async () => {
        if (!window.electronAPI) return;

        try {
            // 1. Fetch Low Stock Alerts (Admin only)
            if (isAdmin && window.electronAPI.getLowStock) {
                const lowStockData = await window.electronAPI.getLowStock();
                if (lowStockData && !lowStockData.error) {
                    setAlerts(lowStockData);

                    // Native Notification for new Low Stock
                    lowStockData.forEach(item => {
                        const key = `stock-${item.shop_name}-${item.product_name}-${item.quantity}`;
                        if (!notifiedItems.has(key)) {
                            triggerNativeNotification("Low Stock Alert", `${item.product_name} is low at ${item.shop_name}`);
                            setNotifiedItems(prev => new Set(prev).add(key));
                        }
                    });
                }
            } else if (!isAdmin) {
                setAlerts([]); // Clear for shop owners
            }

            // 2. Fetch Stock Requests (Admin only)
            if (isAdmin && window.electronAPI.getOpenRequests) {
                const requestData = await window.electronAPI.getOpenRequests();
                if (requestData && !requestData.error) {
                    setRequests(requestData);

                    // Native Notification for new Requests
                    requestData.forEach(req => {
                        const key = `request-${req.id}`;
                        if (!notifiedItems.has(key)) {
                            triggerNativeNotification("New Stock Request", `${req.shop_name} requested ${req.quantity} units of ${req.product_name}`);
                            setNotifiedItems(prev => new Set(prev).add(key));
                        }
                    });
                }
            }
        } catch (err) {
            console.error("Notification Fetch Error:", err);
        }
    };

    const playNotificationSound = async () => {
        try {
            const settings = JSON.parse(localStorage.getItem('notifSettings') || '{"soundEnabled": true}');
            if (!settings.soundEnabled) return;

            // Priority 1: System Beep (Windows Native Alert)
            if (window.electronAPI && window.electronAPI.beep) {
                window.electronAPI.beep();
            }

            // Priority 2: AudioContext Beep (Browser)
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') {
                await audioCtx.resume();
            }

            const playNote = (freq, start, duration, vol = 0.4) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, audioCtx.currentTime + start);
                gain.gain.setValueAtTime(0, audioCtx.currentTime + start);
                gain.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + start + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + start + duration);
                osc.start(audioCtx.currentTime + start);
                osc.stop(audioCtx.currentTime + start + duration);
            };

            // Distinctive beep
            playNote(880, 0, 0.2);
            playNote(1100, 0.25, 0.3);

        } catch (e) {
            console.error("Audio system error:", e);
        }
    };

    const triggerNativeNotification = (title, body) => {
        const settings = JSON.parse(localStorage.getItem('notifSettings') || '{"desktopAlerts": true}');

        if (settings.desktopAlerts && "Notification" in window && Notification.permission === "granted") {
            new Notification(title, { body, icon: '/favicon.ico' });
        }

        playNotificationSound();
    };

    useEffect(() => {
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        fetchAllNotifications();
        const interval = setInterval(fetchAllNotifications, 30000); // Check every 30s
        return () => clearInterval(interval);
    }, [notifiedItems]);

    // Close notification dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header style={{
            height: '74px',
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            {/* Left: Page Title / Dashboard Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                    className="mobile-nav-toggle"
                    onClick={toggleSidebar}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                >
                    <Menu size={24} />
                </button>

                <h6 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--text-main)',
                    margin: 0
                }}>
                    {pageName === 'Dashboard' ? 'Dashboard' : pageName}
                </h6>
            </div>

            {/* Right: Global Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                {/* Theme Toggle Pell */}
                <div
                    onClick={toggleTheme}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '30px',
                        padding: '4px',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-soft)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <div style={{
                        width: '32px', height: '32px',
                        borderRadius: '50%',
                        background: theme === 'light' ? 'var(--bg-app)' : 'transparent',
                        color: theme === 'light' ? '#fbbf24' : 'var(--text-muted)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Sun size={18} fill={theme === 'light' ? '#fbbf24' : 'none'} />
                    </div>
                    <div style={{
                        width: '32px', height: '32px',
                        borderRadius: '50%',
                        background: theme === 'dark' ? 'var(--bg-app)' : 'transparent',
                        color: theme === 'dark' ? '#38bdf8' : 'var(--text-muted)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Moon size={18} fill={theme === 'dark' ? '#38bdf8' : 'none'} />
                    </div>
                </div>

                {/* Notifications Bell */}
                <div style={{ position: 'relative' }} ref={notificationRef}>
                    <div
                        onClick={() => setShowNotifications(!showNotifications)}
                        style={{
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            width: '40px', height: '40px',
                            borderRadius: '50%',
                            boxShadow: 'var(--shadow-soft)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}
                    >
                        <Bell size={18} />
                        {(alerts.length > 0 || requests.length > 0) && (
                            <span style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                width: '10px',
                                height: '10px',
                                background: '#ef4444',
                                borderRadius: '50%',
                                border: '2px solid var(--bg-surface)',
                                animation: 'pulse 2s infinite'
                            }}></span>
                        )}
                    </div>

                    {/* Notification Dropdown */}
                    <AnimatePresence>
                        {showNotifications && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '0',
                                    width: '320px',
                                    background: 'var(--bg-surface)',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    paddingBottom: '10px'
                                }}
                            >
                                <div style={{
                                    padding: '16px',
                                    borderBottom: '1px solid var(--border-color)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'var(--bg-app)'
                                }}>
                                    <h6 style={{ margin: 0, fontWeight: '700', fontSize: '1rem' }}>Notifications</h6>
                                    <span style={{ fontSize: '0.75rem', background: '#fee2e2', color: '#b91c1c', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>
                                        {alerts.length + requests.length} Total
                                    </span>
                                </div>

                                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    {/* Stock Requests Section (Admin) */}
                                    {requests.length > 0 && (
                                        <div>
                                            <div style={{ padding: '8px 16px', fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-secondary)', background: 'var(--bg-surface)', textTransform: 'uppercase' }}>
                                                Stock Requests
                                            </div>
                                            {requests.map((req, idx) => (
                                                <div key={`req-${idx}`} style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid var(--border-color)',
                                                    display: 'flex', gap: '12px', background: 'var(--bg-surface)'
                                                }}>
                                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        <Package size={18} color="#0284c7" />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)' }}>{req.shop_name}</div>
                                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Requested {req.quantity} units of {req.product_name}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Low Stock Alerts Section */}
                                    {alerts.length > 0 && (
                                        <div>
                                            <div style={{ padding: '8px 16px', fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-secondary)', background: 'var(--bg-surface)', textTransform: 'uppercase', borderTop: requests.length > 0 ? '1px solid var(--border-color)' : 'none' }}>
                                                Critical Alerts
                                            </div>
                                            {alerts.map((alert, idx) => (
                                                <div key={`alert-${idx}`} style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid var(--border-color)',
                                                    display: 'flex', gap: '12px', background: 'var(--bg-surface)'
                                                }}>
                                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        <AlertTriangle size={18} color="#ef4444" />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)' }}>{alert.shop_name}</div>
                                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{alert.product_name} is critically low.</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {alerts.length === 0 && requests.length === 0 && (
                                        <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                            <Bell size={32} style={{ marginBottom: '12px', opacity: 0.2 }} />
                                            <p style={{ margin: 0, fontSize: '0.9rem' }}>No new notifications</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;
