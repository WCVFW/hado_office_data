import React, { useEffect, useState } from 'react';
import {
    Package, ShoppingBag, Box, AlertTriangle, Users, MoreVertical,
    TrendingUp, Activity, DollarSign, Target, Calendar, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const Overview = () => {
    const { theme } = useTheme();
    const [stats, setStats] = useState({ revenue: 0, orders: 0, activeUsers: 0 });
    const [lowStock, setLowStock] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get User for Welcome Message
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const username = user.username || 'Guest';

    // Dynamic Chart Colors based on Theme
    const isDark = theme === 'dark';
    const chartTextColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? '#334155' : '#e2e8f0';
    const barColor = isDark ? '#f8fafc' : '#F27421';

    // State for dynamic data
    const [overviewData, setOverviewData] = useState({
        totalProducts: 0,
        totalStock: 0,
        topStores: [],
        profitVsExpense: []
    });
    const [categorySales, setCategorySales] = useState([]);
    const [version, setVersion] = useState('1.0.0');

    useEffect(() => {
        const loadData = async () => {
            if (window.electronAPI) {
                try {
                    const isAdmin = user.role === 'admin';
                    // Parallel data fetching
                    const promises = [
                        window.electronAPI.getDashboardStats(),
                        window.electronAPI.getOverviewData(),
                        window.electronAPI.getSalesAnalytics()
                    ];

                    if (isAdmin) {
                        promises.push(window.electronAPI.getLowStock());
                    }

                    const results = await Promise.all(promises);
                    const [dashboardStats, overview, analytics, alerts] = results;

                    if (dashboardStats && !dashboardStats.error) setStats(dashboardStats);
                    if (overview && !overview.error) setOverviewData(overview);

                    if (window.electronAPI.getAppVersion) {
                        const ver = await window.electronAPI.getAppVersion();
                        setVersion(ver);
                    }
                    if (analytics && analytics.categorySales) {
                        setCategorySales(analytics.categorySales);
                    }
                    if (isAdmin && alerts && !alerts.error) {
                        setLowStock(alerts);
                    } else {
                        setLowStock([]); // Clear if not admin
                    }

                } catch (e) {
                    console.error("Failed to load dashboard data", e);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        loadData();
        // Set up interval for real-time updates (every 30s)
        const interval = setInterval(loadData, 30000);
        return () => clearInterval(interval);
    }, []);

    // Process Pie Data - Use Brand Colors
    const COLORS = ['#F27421', '#FB923C', '#FDBA74', '#94A3B8', '#CBD5E1'];
    const pieData = categorySales.length > 0
        ? categorySales.map((c, i) => ({
            name: c.name,
            value: Number(c.value),
            color: COLORS[i % COLORS.length]
        }))
        : [{ name: 'No Sales', value: 1, color: '#e2e8f0' }];

    // Formatting Helpers
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumSignificantDigits: 3
        }).format(amount).replace('₹', '₹ ');
    };

    const cards = [
        {
            label: "Total Pay Revenue",
            value: formatCurrency(stats.revenue || 0),
            icon: DollarSign,
            bg: "rgba(16, 185, 129, 0.1)",
            iconColor: "#10b981",
            trend: stats.revenueTrend || "0%",
            trendUp: (stats.revenueTrend && !stats.revenueTrend.includes('-'))
        },
        {
            label: "Total Orders",
            value: stats.orders || 0,
            icon: ShoppingBag,
            bg: "rgba(37, 82, 103, 0.1)",
            iconColor: "var(--color-primary)",
            trend: "Today",
            trendUp: true
        },
        {
            label: "Active Products",
            value: stats.totalProducts || overviewData.totalProducts,
            icon: Package,
            bg: "rgba(85, 123, 144, 0.1)",
            iconColor: "var(--color-secondary)",
            trend: "Catalog",
            trendUp: true
        },
        {
            label: "Active Outlets",
            value: stats.activeUsers || 0,
            icon: Users,
            bg: "rgba(245, 158, 11, 0.1)",
            iconColor: "#f59e0b",
            trend: "Stable",
            trendUp: true
        }
    ];

    if (user.role === 'admin') {
        // Keep the 4 grid but maybe visually alert elsewhere
    }

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            {/* Top Bar - Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)' }}>Dashboard</h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Welcome back, {username}</p>
                </div>
                <div style={{
                    display: 'flex', gap: '12px', background: 'var(--bg-surface)', padding: '6px 14px', borderRadius: '10px',
                    boxShadow: 'var(--shadow-soft)', border: '1px solid var(--border-color)', alignItems: 'center'
                }}>
                    <Calendar size={16} color="var(--text-secondary)" />
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-main)' }}>
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid-4" style={{ marginBottom: '24px' }}>
                {cards.map((card, idx) => (
                    <div key={idx} style={{
                        background: 'var(--bg-surface)',
                        padding: '20px',
                        borderRadius: '16px',
                        boxShadow: 'var(--shadow-card)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        transition: 'transform 0.2s',
                        cursor: 'default'
                    }}
                        className="hover:scale-[1.02]"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                                {card.label}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: 1 }}>
                                    {card.value}
                                </span>
                                {card.trend && (
                                    <span style={{
                                        fontSize: '0.75rem', fontWeight: '700',
                                        color: card.trendUp ? '#10b981' : '#dc2626',
                                        display: 'flex', alignItems: 'center'
                                    }}>
                                        {card.trendUp ? '↑' : '↓'} {card.trend}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div style={{
                            width: '40px', height: '40px',
                            borderRadius: '12px',
                            background: card.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <card.icon size={20} color={card.iconColor} strokeWidth={2.5} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid-2-1" style={{ marginBottom: '24px' }}>

                {/* Revenue Analytics */}
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div>
                            <h5 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', margin: 0 }}>Analytics Overview</h5>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Revenue vs Expenses</span>
                        </div>
                        <div style={{ padding: '4px 10px', background: 'var(--bg-app)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                            Last 6 Months
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '280px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={overviewData.profitVsExpense.length > 0 ? overviewData.profitVsExpense : []}>
                                <defs>
                                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: chartTextColor, fontSize: 11, fontWeight: 500 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: chartTextColor, fontSize: 11, fontWeight: 500 }} />
                                <CartesianGrid vertical={false} stroke={gridColor} strokeDasharray="3 3" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontWeight: 600, fontSize: '12px' }}
                                    cursor={{ stroke: 'var(--text-secondary)', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                <Area type="monotone" dataKey="profit" name="Profit" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                                <Area type="monotone" dataKey="expense" name="Expenses" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorExpense)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sales by Category (Vertical) */}
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                    <h5 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>Sales Distribution</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>By Product Category</p>

                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ResponsiveContainer width="100%" height={180}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={50}
                                    outerRadius={70}
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={6}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ position: 'absolute', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{Math.floor(pieData.reduce((a, b) => a + (b.value || 0), 0) / 1000)}k</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Sales</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                        {pieData.slice(0, 4).map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: d.color }}></div>
                                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Grid: Top Stores, Stock Alerts, System Health */}
            <div className="grid-3" style={{ marginBottom: '20px' }}>

                {/* Top Performing Shops */}
                <div style={{ background: 'var(--bg-surface)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h5 style={{ fontWeight: '700', color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>Top Outlets</h5>
                        <Target size={16} color="var(--color-primary)" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {overviewData.topStores.length > 0 ? overviewData.topStores.slice(0, 4).map((store, idx) => (
                            <div key={idx}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)' }}>{store.name}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{formatCurrency(store.sales)}</span>
                                </div>
                                <div style={{ height: '4px', width: '100%', background: 'var(--bg-app)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${Math.min((store.sales / 100000) * 100, 100)}%`, background: 'var(--gradient-primary)', borderRadius: '2px' }}></div>
                                </div>
                            </div>
                        )) : (
                            <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>No sales data</div>
                        )}
                    </div>
                </div>

                {/* Stock Watchlist */}
                <div style={{ background: 'var(--bg-surface)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h5 style={{ fontWeight: '700', color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>Stock Alerts</h5>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#dc2626', background: 'rgba(239, 68, 68, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                            {lowStock.length} Critical
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '180px', overflowY: 'auto' }}>
                        {lowStock.length === 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                                <CheckCircle size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Stock levels optimal</span>
                            </div>
                        ) : lowStock.map((alert, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '10px', background: 'var(--bg-app)' }}>
                                <div style={{ background: '#fef2f2', padding: '6px', borderRadius: '6px' }}>
                                    <AlertTriangle size={14} color="#dc2626" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{alert.product_name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{alert.shop_name} • <span style={{ color: '#dc2626', fontWeight: '700' }}>{alert.quantity} left</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Activity / Health */}
                <div style={{ background: 'var(--bg-surface)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h5 style={{ fontWeight: '700', color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>System Status</h5>
                        <Activity size={16} color="#10b981" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Database</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></span> Online
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Kitchen Sync</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></span> Active
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Server Connection</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-main)' }}>Active</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Version</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)' }}>v{version}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Simple internal icon for check circle to avoid import issues if not available
const CheckCircle = ({ size, style, color }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export default Overview;
