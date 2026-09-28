import React, { useState, useEffect } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Cell
} from 'recharts';
import {
    Calendar, Download, FileText, TrendingUp, CreditCard,
    ArrowUpRight, ArrowDownRight, Search, Filter,
    UtensilsCrossed, Store, Package
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
    const navigate = useNavigate();
    const [revenueData, setRevenueData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            if (window.electronAPI) {
                try {
                    const [analyticsData, ordersData] = await Promise.all([
                        window.electronAPI.getSalesAnalytics(),
                        window.electronAPI.getRecentOrders()
                    ]);

                    if (analyticsData && !analyticsData.error) {
                        setRevenueData(analyticsData.dailyRevenue || []);
                        setCategoryData(analyticsData.categorySales || []);
                    }

                    if (ordersData && Array.isArray(ordersData)) {
                        setTransactions(ordersData.map(order => ({
                            id: `#INV-${String(order.id).padStart(5, '0')}`,
                            date: new Date(order.created_at).toLocaleDateString() + ' ' + new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            shop: order.shop_name,
                            amount: order.total_amount,
                            status: order.status.charAt(0).toUpperCase() + order.status.slice(1),
                            method: 'Cash' // Default as payment method is not in DB yet
                        })));
                    } else {
                        setTransactions([]);
                    }
                } catch (err) {
                    console.error("Failed to fetch analytics", err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, []);

    const totalWeeklySales = revenueData.reduce((acc, curr) => acc + (parseFloat(curr.revenue) || 0), 0);
    const totalOrders = revenueData.reduce((acc, c) => acc + c.orders, 0);

    const handleExport = () => {
        if (revenueData.length === 0) return;
        const csvRows = [
            ["Day", "Revenue (INR)", "Orders"].join(','),
            ...revenueData.map(row => `${row.name},${row.revenue},${row.orders}`)
        ].join('\n');
        const blob = new Blob([csvRows], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sales_report_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(val);

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2px' }}>Sales & Billing</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '500' }}>Track revenue, analyze trends, and view billing logs.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative' }}>
                        <Calendar size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <select style={{
                            padding: '10px 16px 10px 36px', borderRadius: '10px', border: '1px solid var(--border-color)',
                            background: 'var(--bg-surface)', fontWeight: '600', color: 'var(--text-main)', outline: 'none', cursor: 'pointer', fontSize: '0.9rem'
                        }}>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <button
                        onClick={handleExport}
                        className="bg-gradient-primary"
                        style={{
                            color: 'white',
                            padding: '10px 20px', borderRadius: '10px',
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontWeight: '600', border: 'none',
                            boxShadow: '0 4px 12px rgba(67, 56, 202, 0.2)', cursor: 'pointer', fontSize: '0.9rem'
                        }}
                    >
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            {/* Quick Shortcuts - Compact Grid */}
            <div className="grid-3" style={{ marginBottom: '24px' }}>
                {[
                    { label: 'Menu Master', path: '/admin/menu', icon: UtensilsCrossed, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', desc: 'Manage dishes' },
                    { label: 'Outlets', path: '/admin/shops', icon: Store, color: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)', desc: 'Shop performance' },
                    { label: 'Inventory', path: '/admin/inventory', icon: Package, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', desc: 'Track stock' }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => navigate(item.path)}
                        style={{
                            background: 'var(--bg-surface)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)',
                            boxShadow: 'var(--shadow-card)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '16px'
                        }}
                        className="hover:scale-[1.01]"
                    >
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '10px', background: item.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <item.icon size={20} color={item.color} strokeWidth={2.5} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', margin: 0 }}>{item.label}</h3>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '500', margin: 0 }}>{item.desc}</p>
                        </div>
                        <ArrowUpRight size={16} color="var(--text-secondary)" />
                    </div>
                ))}
            </div>

            {/* Key Stats Row - Compact Horizontal */}
            <div className="grid-4" style={{ marginBottom: '24px' }}>
                {[
                    { label: 'Total Revenue', value: formatCurrency(totalWeeklySales), icon: CreditCard, color: '#6366f1', trend: '+12%', bg: 'rgba(99, 102, 241, 0.1)' },
                    { label: 'Total Orders', value: totalOrders, icon: FileText, color: '#10b981', trend: '+5%', bg: 'rgba(16, 185, 129, 0.1)' },
                    { label: 'Avg. Order', value: '₹ ' + (totalOrders ? Math.round(totalWeeklySales / totalOrders) : 0), icon: TrendingUp, color: '#f59e0b', trend: '-2%', bg: 'rgba(245, 158, 11, 0.1)' },
                    { label: 'Net Profit', value: formatCurrency(totalWeeklySales * 0.35), icon: ArrowUpRight, color: '#ec4899', trend: '+8%', bg: 'rgba(236, 72, 153, 0.1)' }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        background: 'var(--bg-surface)',
                        padding: '16px',
                        borderRadius: '16px',
                        boxShadow: 'var(--shadow-card)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        transition: 'transform 0.2s',
                        cursor: 'default'
                    }}
                        className="hover:scale-[1.02]"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                                {stat.label}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>
                                    {stat.value}
                                </span>
                                <span style={{
                                    fontSize: '0.65rem', fontWeight: '700',
                                    color: stat.trend.startsWith('+') ? '#10b981' : '#dc2626',
                                    display: 'flex', alignItems: 'center'
                                }}>
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                        <div style={{
                            width: '36px', height: '36px',
                            borderRadius: '10px',
                            background: stat.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <stat.icon size={18} color={stat.color} strokeWidth={2.5} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid-2-1" style={{ marginBottom: '24px' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>Revenue Analytics</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Daily income over the last 7 days</p>
                    </div>
                    <div style={{ height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorRevs" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontWeight: 500 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontWeight: 500 }} dx={-10} />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-surface)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontWeight: 600, fontSize: '12px' }}
                                    cursor={{ stroke: 'var(--text-secondary)', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevs)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>Category Sales</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Top performing categories</p>
                    </div>
                    <div style={{ height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData} layout="vertical" barSize={16}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--border-color)" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontWeight: 600 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ background: 'var(--bg-surface)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }} />
                                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={['#4338ca', '#6366f1', '#818cf8', '#a5b4fc'][index % 4]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div style={{ background: 'var(--bg-surface)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', padding: '0', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>Recent Transactions</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Latest billing history.</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Search size={14} color="var(--text-secondary)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text" placeholder="Search Invoice ID..."
                            style={{
                                padding: '8px 12px 8px 32px', borderRadius: '8px', border: '1px solid var(--border-color)',
                                background: 'var(--bg-app)', fontSize: '0.8rem', width: '180px', outline: 'none', color: 'var(--text-main)'
                            }}
                        />
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', fontSize: '0.7rem', background: 'var(--bg-app)', borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Invoice ID</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Date</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Outlet / Shop</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Payment</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Amount</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textTransform: 'uppercase' }}>Status</th>
                                <th style={{ padding: '10px 16px', fontWeight: '700', textAlign: 'right', textTransform: 'uppercase' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-secondary)' }}>Loading transactions...</td></tr>
                            ) : transactions.length === 0 ? (
                                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-secondary)' }}>No recent transactions found.</td></tr>
                            ) : (
                                transactions.map((tx, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }} className="hover:bg-[var(--hover-item)]">
                                        <td style={{ padding: '12px 16px', fontWeight: '700', color: 'var(--text-main)', fontSize: '0.8rem' }}>{tx.id}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{tx.date}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-main)', fontWeight: '600', fontSize: '0.8rem' }}>{tx.shop}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{tx.method}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-main)', fontWeight: '700' }}>₹ {tx.amount.toLocaleString()}</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <span style={{
                                                background: tx.status === 'Paid' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                                color: tx.status === 'Paid' ? '#10b981' : '#f59e0b',
                                                padding: '3px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700'
                                            }}>
                                                {tx.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                                            <button style={{ background: 'transparent', border: 'none', color: 'var(--color-primary)', fontWeight: '600', cursor: 'pointer', fontSize: '0.75rem' }}>View</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
