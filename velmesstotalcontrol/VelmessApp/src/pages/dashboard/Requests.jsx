import React, { useState, useEffect } from 'react';
import {
    AlertTriangle, Package, Check, Clock, TrendingDown,
    Truck, CheckCircle, XCircle, ArrowRight, Filter, Search
} from 'lucide-react';

const Requests = () => {
    const [requests, setRequests] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('pending'); // 'pending', 'history'

    const fetchData = async () => {
        if (window.electronAPI) {
            try {
                const [reqData, alertData, compCount] = await Promise.all([
                    window.electronAPI.getOpenRequests(),
                    window.electronAPI.getLowStock(),
                    window.electronAPI.getCompletedToday()
                ]);
                setRequests(reqData || []);
                setAlerts(alertData || []);
                setCompletedToday(compCount || 0);
            } catch (err) {
                console.error("Failed to load requests", err);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    const [completedToday, setCompletedToday] = useState(0);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleFulfill = async (id) => {
        if (window.confirm("Confirm distribution of stock to this shop?")) {
            try {
                const success = await window.electronAPI.fulfillRequest(id);
                if (success) {
                    setRequests(prev => prev.filter(r => r.id !== id));
                    // Ideally show a toast here
                } else {
                    alert("Distribution Failed");
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    // Derived Stats
    const pendingCount = requests.length;
    const criticalCount = alerts.length;

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            {/* Header Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2px' }}>
                        Distribution & Requests
                    </h1>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                        Manage inventory requests and central kitchen dispatch
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '8px 16px', borderRadius: '12px',
                        background: 'var(--color-primary)', color: '#fff', border: 'none',
                        fontWeight: '600', boxShadow: '0 4px 12px rgba(37, 82, 103, 0.3)',
                        fontSize: '0.85rem'
                    }}>
                        <Truck size={16} /> Direct Dispatch
                    </button>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid-3" style={{ marginBottom: '32px' }}>
                {/* Pending Requests Stat */}
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Clock size={20} color="#f59e0b" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>{pendingCount}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '4px' }}>Pending Requests</div>
                    </div>
                </div>

                {/* Critical Alerts Stat */}
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AlertTriangle size={20} color="#ef4444" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>{criticalCount}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '4px' }}>Critical Stock Alerts</div>
                    </div>
                </div>

                {/* Dispatched Today Stat */}
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle size={20} color="#10b981" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>{completedToday}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '4px' }}>Dispatched Today</div>
                    </div>
                </div>
            </div>

            {/* Main Content Split */}
            <div className="grid-2-1">

                {/* Left Column: Request Management */}
                <div style={{ background: 'var(--bg-surface)', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '500px' }}>
                    {/* Toolbar */}
                    <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={() => setActiveTab('pending')}
                                style={{
                                    padding: '6px 14px', borderRadius: '10px', fontWeight: '700', fontSize: '0.85rem', border: 'none', cursor: 'pointer',
                                    background: activeTab === 'pending' ? 'var(--bg-app)' : 'transparent',
                                    color: activeTab === 'pending' ? 'var(--text-main)' : 'var(--text-muted)'
                                }}
                            >
                                Pending Requests
                            </button>
                            <button
                                onClick={() => setActiveTab('history')}
                                style={{
                                    padding: '6px 14px', borderRadius: '10px', fontWeight: '700', fontSize: '0.85rem', border: 'none', cursor: 'pointer',
                                    background: activeTab === 'history' ? 'var(--bg-app)' : 'transparent',
                                    color: activeTab === 'history' ? 'var(--text-main)' : 'var(--text-muted)'
                                }}
                            >
                                Dispatch History
                            </button>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search outlets..."
                                style={{
                                    padding: '8px 12px 8px 32px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-app)',
                                    width: '180px', fontSize: '0.8rem'
                                }}
                            />
                        </div>
                    </div>

                    {/* Content List */}
                    <div style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
                        {activeTab === 'pending' ? (
                            loading ? (
                                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>Loading requests...</div>
                            ) : requests.length === 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', opacity: 0.6 }}>
                                    <Package size={48} style={{ marginBottom: '16px' }} />
                                    <p style={{ fontWeight: '600' }}>No pending requests found</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {requests.map(req => (
                                        <div key={req.id} style={{
                                            padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)',
                                            background: 'var(--bg-app)', display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) auto auto', gap: '16px', alignItems: 'center',
                                            transition: 'transform 0.2s', cursor: 'default'
                                        }}>
                                            {/* Store Info */}
                                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <img src={`https://ui-avatars.com/api/?name=${req.shop_name}&background=random`} alt="Shop" style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
                                                </div>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>{req.shop_name}</h4>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>{new Date(req.created_at).toLocaleString()}</span>
                                                </div>
                                            </div>

                                            {/* Items */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-surface)', padding: '8px 12px', borderRadius: '10px' }}>
                                                <Package size={16} color="var(--color-secondary)" />
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)' }}>
                                                    {req.product_name}
                                                </span>
                                                <span style={{ height: '20px', width: '1px', background: 'var(--border-color)' }}></span>
                                                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                                                    x {req.quantity}
                                                </span>
                                            </div>

                                            {/* Actions */}
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    style={{
                                                        width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)',
                                                        color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                    }}
                                                    title="Reject"
                                                >
                                                    <XCircle size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleFulfill(req.id)}
                                                    style={{
                                                        height: '36px', padding: '0 16px', borderRadius: '10px', border: 'none', background: 'var(--gradient-primary)',
                                                        color: '#fff', fontWeight: '600', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                                                        boxShadow: '0 4px 10px rgba(37, 82, 103, 0.2)'
                                                    }}
                                                >
                                                    Accept <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                                <p>History view coming soon...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Alerts & Quick Inventory */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Low Stock Alerts */}
                    <div style={{ background: '#fff1f2', borderRadius: '20px', border: '1px solid #fecaca', boxShadow: 'var(--shadow-card)', padding: '16px', display: 'flex', flexDirection: 'column', maxHeight: '400px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#be123c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <AlertTriangle size={20} /> Low Stock Levels
                            </h3>
                            <span style={{ background: '#be123c', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>{alerts.length}</span>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
                            {alerts.length === 0 ? (
                                <div style={{ color: '#be123c', opacity: 0.7, fontSize: '0.9rem', textAlign: 'center' }}>All outlets fully stocked.</div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {alerts.map((alert, idx) => (
                                        <div key={idx} style={{
                                            background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #fecaca',
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                        }}>
                                            <div>
                                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1f2937' }}>{alert.shop_name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#4b5563' }}>{alert.product_name}</div>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#dc2626' }}>{alert.quantity}</div>
                                                <div style={{ fontSize: '0.7rem', fontWeight: '600', color: '#9ca3af' }}>left</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Transfer Widget */}
                    <div style={{ background: 'var(--bg-surface)', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', padding: '16px' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '16px' }}>Quick Transfer</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Manually move stock to an outlet.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <input type="text" placeholder="Select Outlet" style={{ padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
                            <input type="text" placeholder="Select Product" style={{ padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <input type="number" placeholder="Qty" style={{ padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
                                <button style={{
                                    background: 'var(--bg-sidebar)', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer',
                                    transition: 'opacity 0.2s'
                                }}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Requests;
