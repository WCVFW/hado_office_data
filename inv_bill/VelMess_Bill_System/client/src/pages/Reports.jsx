import { useState } from 'react';
import { fetchReports } from '../api';
import { Calendar, MagnifyingGlass, DownloadSimple, TrendUp, CreditCard, Money } from 'phosphor-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Reports = () => {
    const today = new Date().toISOString().split('T')[0];
    const [dates, setDates] = useState({ start: today, end: today });
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Mock chart data for visualization (mix with real later if needed)
    const [chartData, setChartData] = useState([]);

    const generateReport = async () => {
        setLoading(true);
        try {
            const { data } = await fetchReports(dates.start, dates.end);
            setReportData(data);

            // Prepare mock chart data based on payment modes for visual effect
            const chartD = Object.entries(data.byPaymentMode).map(([key, val]) => ({
                name: key,
                value: val
            }));
            setChartData(chartD);

        } catch (err) { alert("Failed to fetch reports"); }
        finally { setLoading(false); }
    };

    // Filter orders based on search (ID or Customer Name)
    const filteredOrders = reportData?.orders?.filter(order => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
            order.id.toString().includes(term) ||
            (order.customer_name && order.customer_name.toLowerCase().includes(term))
        );
    }) || [];

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '0', boxSizing: 'border-box' }}>

            {/* Consolidated Top Bar (Header + Controls) */}
            <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)', flexShrink: 0, padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>

                {/* Title */}
                <div>
                    <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary)' }}>Sales Reports</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2px' }}>Business Performance</p>
                </div>

                {/* Controls Group */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>

                    {/* Date Inputs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-input)', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.5px' }}>FROM DATE</span>
                            <input
                                type="date"
                                style={{ border: 'none', background: 'transparent', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', color: 'var(--text-main)', fontWeight: '500', colorScheme: 'dark' }} // Added colorScheme for date picker icon
                                value={dates.start}
                                onChange={e => setDates({ ...dates, start: e.target.value })}
                            />
                        </div>
                        <div style={{ width: '1px', height: '24px', background: 'var(--border-light)' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.5px' }}>TO DATE</span>
                            <input
                                type="date"
                                style={{ border: 'none', background: 'transparent', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', color: 'var(--text-main)', fontWeight: '500', colorScheme: 'dark' }}
                                value={dates.end}
                                onChange={e => setDates({ ...dates, end: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            className="modern-btn"
                            onClick={generateReport}
                            style={{ width: 'auto', padding: '0 24px', height: '48px' }}
                            disabled={loading}
                        >
                            <MagnifyingGlass size={18} weight="bold" />
                            {loading ? 'Loading...' : 'View Report'}
                        </button>

                        <button className="modern-btn" style={{ background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border-light)', width: 'auto', height: '48px', padding: '0 16px' }} title="Export PDF">
                            <DownloadSimple size={18} weight="bold" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            {reportData ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, minHeight: 0 }}>

                    {/* Summary Cards Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>

                        <div className="feature-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', color: 'white' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '4px' }}>Total Revenue</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹ {reportData.totalCollection.toLocaleString()}</h2>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                                    <TrendUp size={24} color="white" weight="fill" />
                                </div>
                            </div>
                        </div>

                        <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Transactions</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{reportData.orders.length}</h2>
                                </div>
                                <div style={{ background: 'var(--bg-hover)', padding: '10px', borderRadius: '10px' }}>
                                    <Money size={24} color="var(--text-muted)" weight="fill" />
                                </div>
                            </div>
                        </div>

                        <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Cash Collected</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>₹ {reportData.byPaymentMode.Cash?.toLocaleString() || 0}</h2>
                                </div>
                                <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                    <Money size={24} color="#4ade80" weight="fill" />
                                </div>
                            </div>
                        </div>

                        <div className="feature-card" style={{ padding: '24px', background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Digital / UPI</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>₹ {reportData.byPaymentMode.UPI?.toLocaleString() || 0}</h2>
                                </div>
                                <div style={{ background: 'rgba(96, 165, 250, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                    <CreditCard size={24} color="#60a5fa" weight="fill" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Report Table */}
                    <div className="feature-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0, overflow: 'hidden' }}>
                        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Transaction History</h3>
                            <input
                                placeholder="Search ID or Customer..."
                                className="modern-input"
                                style={{ width: '250px' }}
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            <table className="modern-table">
                                <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                    <tr>
                                        <th style={{ paddingLeft: '24px' }}>Date & Time</th>
                                        <th>Token ID</th>
                                        <th>Customer</th>
                                        <th>Payment Mode</th>
                                        <th style={{ textAlign: 'right', paddingRight: '24px' }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredOrders.map((order, idx) => (
                                        <tr key={order.id} style={{ background: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-hover)' }}>
                                            <td style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '24px' }}>
                                                {new Date(order.order_date).toLocaleDateString()} <span style={{ opacity: 0.7, fontSize: '0.8rem', marginLeft: '6px' }}>{new Date(order.order_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </td>
                                            <td style={{ fontWeight: 500, color: 'var(--text-main)' }}>#{order.id}</td>
                                            <td style={{ color: 'var(--text-main)' }}>{order.customer_name || 'Walk-in Customer'}</td>
                                            <td>
                                                <span className={`status-badge ${order.payment_mode === 'Cash' ? 'active' : 'inactive'}`} style={{
                                                    background: order.payment_mode === 'Cash' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                                                    color: order.payment_mode === 'Cash' ? '#4ade80' : '#60a5fa'
                                                }}>
                                                    {order.payment_mode}
                                                </span>
                                            </td>
                                            <td style={{ textAlign: 'right', fontWeight: 'bold', paddingRight: '24px', color: 'var(--text-main)' }}>₹ {order.final_amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="feature-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'var(--bg-hover)', padding: '30px', borderRadius: '50%', marginBottom: '20px' }}>
                        <TrendUp size={48} weight="duotone" />
                    </div>
                    <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>No Data Generated</h2>
                    <p style={{ maxWidth: '300px', textAlign: 'center', lineHeight: '1.6' }}>
                        Select a <strong>From Date</strong> and <strong>To Date</strong> from the top bar and click <strong>View Report</strong> to see your sales data.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Reports;
