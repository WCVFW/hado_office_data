import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Store, Package,
    BarChart3, Settings, LogOut,
    ChefHat, Box, Users, ShoppingBag, Truck
} from 'lucide-react';

const Sidebar = ({ closeSidebar }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = user.role || 'guest';
    const isAdmin = role === 'admin';
    const basePath = isAdmin ? '/admin' : '/shop';

    const menuItems = isAdmin ? [
        { type: 'link', to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
        { type: 'link', to: "/admin/requests", icon: Truck, label: "Distribution & Requests" },
        { type: 'link', to: "/admin/orders", icon: ChefHat, label: "Orders (KDS)" },
        { type: 'link', to: "/admin/menu", icon: Box, label: "Menu Management" },
        { type: 'link', to: "/admin/shops", icon: Store, label: "Outlets & Shops" },
        { type: 'link', to: "/admin/inventory", icon: Package, label: "Inventory" },
        { type: 'link', to: "/admin/analytics", icon: BarChart3, label: "Sales & Billing" },
        // { type: 'link', to: "/admin/users", icon: Users, label: "User Management" }, // Removed
        { type: 'header', label: "ACCOUNT SETTINGS" },
        { type: 'link', to: "/admin/settings", icon: Settings, label: "Settings" },
    ] : [
        { type: 'link', to: "/shop", icon: ShoppingBag, label: "New Order / Billing" }, // Default for Shop
        { type: 'link', to: "/shop/orders", icon: ChefHat, label: "Kitchen Orders" },
        { type: 'link', to: "/shop/inventory", icon: Package, label: "My Inventory" },
        { type: 'header', label: "ACCOUNT SETTINGS" },
        { type: 'link', to: "/shop/settings", icon: Settings, label: "Settings" },
    ];

    const NavItem = ({ to, icon: Icon, label }) => (
        <NavLink
            to={to}
            end={to === basePath || to === '/admin' || to === '/shop'} // Exact match for root
            onClick={closeSidebar}
            style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: isActive ? 'auto' : 'auto',
                padding: '12px 16px',
                margin: '4px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                background: isActive ? 'var(--color-primary-fade)' : 'transparent',
                color: isActive ? 'var(--color-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.9rem',
            })}
        >
            {({ isActive }) => (
                <>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{label}</span>
                </>
            )}
        </NavLink>
    );

    return (
        <div style={{
            width: '280px',
            height: '100%',
            padding: '24px 0',
            background: 'var(--bg-sidebar)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 100,
            overflowX: 'hidden',
            borderRadius: '24px',
            borderRight: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)'
        }}>
            {/* Logo Section */}
            <div style={{ padding: '0 24px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                    width: '36px', height: '36px',
                    background: 'var(--color-primary-fade)',
                    color: 'var(--color-primary)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '800', fontSize: '1.2rem'
                }}>v</div>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '-0.5px' }}>Vel Mess</span>
            </div>

            {/* Profile Section */}
            <div style={{ padding: '0 24px', marginBottom: '32px' }}>
                <div style={{
                    padding: '12px',
                    background: 'var(--bg-app)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{
                        width: '32px', height: '32px',
                        borderRadius: '50%',
                        background: 'var(--color-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 'bold', fontSize: '0.8rem'
                    }}>
                        {user.username?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            {user.username || 'User Profile'}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                            {user.role}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                {menuItems.map((item, index) => {
                    if (item.type === 'header') {
                        return (
                            <div key={index} style={{
                                padding: '16px 24px 8px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: 'var(--text-muted)',
                                letterSpacing: '0.5px'
                            }}>
                                {item.label}
                            </div>
                        );
                    }
                    return <NavItem key={index} to={item.to} icon={item.icon} label={item.label} />;
                })}
            </div>

            <div style={{ padding: '0 24px', marginTop: 'auto' }}>
                <button
                    onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/login');
                    }}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
                        padding: '12px 16px', borderRadius: '8px',
                        background: 'transparent', border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600',
                        transition: 'all 0.2s',
                        justifyContent: 'flex-start'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'var(--color-primary-fade)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                    <LogOut size={20} />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
