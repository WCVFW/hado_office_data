import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Overview from './dashboard/Overview';
import Shops from './dashboard/Shops';
import Inventory from './dashboard/Inventory';
import Analytics from './dashboard/Analytics';
import Settings from './dashboard/Settings';
import Menu from './dashboard/Menu';
import Orders from './dashboard/Orders';

import Billing from './dashboard/Billing';
import Requests from './dashboard/Requests';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = user.role === 'admin';

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)', gap: '16px', padding: '16px' }}>
            {/* Sidebar with mobile toggle class */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ zIndex: 50 }}>
                <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="md:hidden"
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }}
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-app)', marginLeft: '0', transition: 'margin 0.3s', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <Header toggleSidebar={toggleSidebar} />
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/" element={isAdmin ? <Overview /> : <Billing />} />
                        <Route path="billing" element={<Billing />} />
                        <Route path="requests" element={<Requests />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="shops" element={<Shops />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="analytics" element={<Analytics />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
