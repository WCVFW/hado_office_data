import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend } from 'recharts';

const Dashboard = ({ items, transactions }) => {
    // --- Data Processing for Charts ---

    // 1. Sales/Stock Overview (Area Chart) - Last 7 Days (or grouped by date)
    const areaChartData = useMemo(() => {
        const dataMap = {};
        transactions.forEach(t => {
            const date = t.Date ? t.Date.substring(0, 10) : 'Unknown';
            if (!dataMap[date]) dataMap[date] = { name: date, In: 0, Out: 0 };
            const qty = parseInt(t.Quantity || 0);
            if (t.Type === 'IN') dataMap[date].In += qty;
            if (t.Type === 'OUT') dataMap[date].Out += qty;
        });
        // Sort by date and take last 7 entries for cleaner view
        return Object.values(dataMap).sort((a, b) => new Date(a.name) - new Date(b.name)).slice(-7);
    }, [transactions]);

    // 2. Order Status (Bar Chart) - Monthly Volume
    const barChartData = useMemo(() => {
        const dataMap = {};
        transactions.forEach(t => {
            if (!t.Date) return;
            const date = new Date(t.Date);
            const month = date.toLocaleString('default', { month: 'short' });
            if (!dataMap[month]) dataMap[month] = { name: month, value: 0 };
            dataMap[month].value += 1; // Count transactions
        });
        return Object.values(dataMap);
    }, [transactions]);

    // 3. Category Distribution (Pie/Donut Chart)
    const pieChartData = useMemo(() => {
        const dataMap = {};
        items.forEach(i => {
            if (!dataMap[i.Category]) dataMap[i.Category] = 0;
            dataMap[i.Category] += parseInt(i.CurrentStock || 0);
        });
        const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];
        return Object.keys(dataMap).map((key, index) => ({
            name: key,
            value: dataMap[key],
            color: COLORS[index % COLORS.length]
        }));
    }, [items]);

    // 4. Summary Metrics
    const totalStock = items.reduce((acc, i) => acc + parseInt(i.CurrentStock || 0), 0);
    const lowStockCount = items.filter(i => parseInt(i.CurrentStock || 0) <= parseInt(i.MinStock || 0)).length;
    const totalIn = transactions.filter(t => t.Type === 'IN').length;
    const totalOut = transactions.filter(t => t.Type === 'OUT').length;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <div className="page-header" style={{ border: 'none', marginBottom: '20px' }}>
                <h2 className="page-title">Dashboard Overview</h2>
            </div>

            {/* Top Charts Row */}
            <div className="dashboard-grid-top">
                {/* Area Chart: Stock Overview */}
                <div className="content-card chart-card">
                    <div className="card-header">
                        <h3>Stock Movement (Last 7 Days)</h3>
                        <div className="legend-indicator">
                            <span style={{ color: '#8884d8' }}>● In</span>
                            <span style={{ color: '#82ca9d', marginLeft: '10px' }}>● Out</span>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={areaChartData}>
                                <defs>
                                    <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="In" stroke="#8884d8" fillOpacity={1} fill="url(#colorIn)" />
                                <Area type="monotone" dataKey="Out" stroke="#82ca9d" fillOpacity={1} fill="url(#colorOut)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart: Transaction Volume */}
                <div className="content-card chart-card">
                    <div className="card-header">
                        <h3>Monthly Activity</h3>
                        <span style={{ fontSize: '1.5rem' }}>...</span>
                    </div>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" fill="#ff7300" radius={[10, 10, 0, 0]}>
                                    {barChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ff7300' : '#ffbb28'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="dashboard-grid-bottom">

                {/* Donut Chart */}
                <div className="content-card chart-card" style={{ flex: 1 }}>
                    <div className="card-header">
                        <h3>Category Distribution</h3>
                    </div>
                    <div style={{ width: '100%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '-20px' }}>
                        <h2 style={{ margin: 0 }}>{items.length}</h2>
                        <span style={{ color: '#999', fontSize: '0.8rem' }}>Total Items</span>
                    </div>
                </div>

                {/* Summary Grid */}
                <div className="summary-grid" style={{ flex: 2 }}>

                    <div className="summary-card">
                        <div className="icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>📦</div>
                        <div>
                            <div className="summary-label">Total Stock Qty</div>
                            <div className="summary-value">{totalStock}</div>
                        </div>
                    </div>

                    <div className="summary-card">
                        <div className="icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>💰</div>
                        <div>
                            <div className="summary-label">Stock In Transactions</div>
                            <div className="summary-value">{totalIn}</div>
                        </div>
                    </div>

                    <div className="summary-card">
                        <div className="icon-box" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>⚠️</div>
                        <div>
                            <div className="summary-label">Low Stock Alerts</div>
                            <div className="summary-value" style={{ color: '#ef4444' }}>{lowStockCount}</div>
                        </div>
                    </div>

                    <div className="summary-card">
                        <div className="icon-box" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>📤</div>
                        <div>
                            <div className="summary-label">Stock Out Transactions</div>
                            <div className="summary-value">{totalOut}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
