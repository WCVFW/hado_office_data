import React, { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab, onRefresh }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'inventory', label: 'Inventory Items', icon: '📦' },
        { id: 'stock-in', label: 'Stock In (Purchase)', icon: '📥' },
        { id: 'stock-out', label: 'Stock Out (Issue)', icon: '📤' },
        { id: 'reports', label: 'Reports', icon: '📈' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>InvenTrack</h1>
            </div>
            <div className="nav-links">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <span style={{ marginRight: '12px' }}>{item.icon}</span>
                        {item.label}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 'auto', padding: '20px', borderTop: '1px solid #334155' }}>
                <div
                    className="nav-item"
                    onClick={onRefresh}
                    style={{ marginBottom: '10px', color: '#6366f1', justifyContent: 'center', border: '1px solid #6366f1', background: 'rgba(99, 102, 241, 0.1)' }}
                >
                    <span style={{ marginRight: '8px' }}>🔄</span> Refresh Data
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                    v1.0.0
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
