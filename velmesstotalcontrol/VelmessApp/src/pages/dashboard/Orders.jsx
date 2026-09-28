import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, RotateCw, AlertTriangle, Search, Printer, Receipt } from 'lucide-react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = user.role === 'admin';

    const fetchOrders = async () => {
        if (window.electronAPI) {
            try {
                const data = await window.electronAPI.getRecentOrders(isAdmin ? null : user.shopId);
                if (data && !data.error) {
                    // Process data to match UI
                    const formatted = data.map(o => ({
                        ...o,
                        itemsList: o.items ? o.items.split(', ') : [],
                        timeAgo: new Date(o.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }));
                    setOrders(formatted);
                }
            } catch (err) {
                console.error("Failed to fetch orders", err);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
        // Optional: Poll every 30 seconds
        const interval = setInterval(fetchOrders, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleStatusUpdate = async (orderId, newStatus) => {
        if (window.electronAPI) {
            try {
                await window.electronAPI.updateOrderStatus(orderId, newStatus);
                fetchOrders(); // Refresh
            } catch (err) {
                console.error("Failed to update status", err);
            }
        }
    };

    const getGradient = (status) => {
        switch (status) {
            case 'pending': return 'linear-gradient(310deg, #f53939, #fbcf33)'; // Orange/Red
            case 'cooking': return 'linear-gradient(310deg, #2152ff, #21d4fd)'; // Blue
            case 'ready': return 'linear-gradient(310deg, #17ad37, #98ec2d)'; // Green
            default: return 'none';
        }
    };

    const filteredOrders = orders.filter(order =>
        order.id.toString().includes(searchTerm) ||
        order.shop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.itemsList.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleReprint = async (order) => {
        if (window.electronAPI) {
            const receiptData = {
                orderId: order.id,
                shopName: order.shop_name,
                items: order.itemsList.map(item => ({ name: item, quantity: 1, price: 0 })),
                total: order.total
            };
            await window.electronAPI.printReceipt(receiptData);
        }
    };

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
                <div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2px' }}>Orders (KDS)</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: '500' }}>{filteredOrders.length} bills generated in this session</p>
                </div>

                <div style={{ display: 'flex', gap: '12px', flex: 1, justifyContent: 'flex-end' }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search Bill No, Shop or Items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%', padding: '10px 10px 10px 36px', borderRadius: '12px',
                                border: '1px solid var(--border-color)', background: 'var(--bg-card)',
                                color: 'var(--text-main)', fontSize: '0.85rem', outline: 'none'
                            }}
                        />
                    </div>
                    <button
                        onClick={fetchOrders}
                        style={{
                            padding: '8px 16px', borderRadius: '12px', border: '1px solid var(--border-color)',
                            background: 'var(--bg-card)', color: 'var(--text-main)', fontWeight: '700', fontSize: '0.8rem',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                        }}
                    >
                        <RotateCw size={14} /> Sync Logs
                    </button>
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
                    <div className="spinner" style={{ width: '30px', height: '30px' }}></div>
                </div>
            ) : filteredOrders.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', background: 'var(--bg-card)', borderRadius: '24px', border: '1px dashed var(--border-color)' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No billing records found.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {filteredOrders.map(order => (
                        <div key={order.id} style={{
                            background: 'var(--bg-card)', padding: '12px 16px', borderRadius: '16px',
                            border: '1px solid var(--border-color)', display: 'flex',
                            justifyContent: 'space-between', alignItems: 'center',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                        }}
                            className="order-row-hover"
                        >
                            {/* Bill Badge */}
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', minWidth: '200px' }}>
                                <div style={{
                                    minWidth: '40px', height: '40px', borderRadius: '12px',
                                    background: 'var(--bg-app)', display: 'flex',
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-primary)', border: '1.5px solid var(--border-color)',
                                }}>
                                    <span style={{ fontSize: '0.55rem', fontWeight: '900', textTransform: 'uppercase', opacity: 0.6 }}>BILL</span>
                                    <span style={{ fontWeight: '900', fontSize: '0.85rem', marginTop: '-2px' }}>{order.id}</span>
                                </div>

                                <div style={{ overflow: 'hidden' }}>
                                    <h4 style={{ fontWeight: '800', color: 'var(--text-main)', margin: '0 0 2px 0', fontSize: '0.9rem' }}>{order.shop_name}</h4>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <div style={{
                                            padding: '2px 6px', borderRadius: '6px', fontSize: '0.55rem',
                                            fontWeight: '900', textTransform: 'uppercase',
                                            background: '#dcfce7', color: '#16a34a',
                                            display: 'flex', alignItems: 'center', gap: '4px'
                                        }}>
                                            <CheckCircle size={10} /> PAID
                                        </div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                                            {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Items Preview */}
                            <div style={{ flex: 1, padding: '0 20px', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', overflow: 'hidden' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.5px' }}>Items Summary</div>
                                <div style={{
                                    display: 'flex', flexWrap: 'nowrap', gap: '6px', overflowX: 'auto', paddingBottom: '4px'
                                }} className="hide-scrollbar">
                                    {order.itemsList.map((item, idx) => (
                                        <span key={idx} style={{
                                            padding: '4px 8px', background: 'var(--bg-app)',
                                            borderRadius: '6px', fontSize: '0.7rem', fontWeight: '700',
                                            color: 'var(--text-main)', border: '1px solid var(--border-color)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Amount & Actions */}
                            <div style={{ minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>₹ {order.total}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', fontWeight: '700', textTransform: 'uppercase' }}>Grand Total</div>
                                </div>
                                <button
                                    onClick={() => handleReprint(order)}
                                    title="Reprint Bill"
                                    style={{
                                        width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-color)',
                                        background: 'var(--bg-card)', color: 'var(--text-main)', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    }}
                                    className="reprint-btn"
                                >
                                    <Printer size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                .order-row-hover:hover {
                    border-color: var(--color-primary) !important;
                    background: var(--bg-surface) !important;
                }
                .reprint-btn:hover {
                    background: var(--color-primary) !important;
                    color: white !important;
                    border-color: var(--color-primary) !important;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    height: 0px;
                }
                .spinner {
                    border: 3px solid var(--bg-app);
                    border-top: 3px solid var(--color-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Orders;
