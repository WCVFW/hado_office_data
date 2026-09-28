import React, { useState, useEffect } from 'react';
import { Package, Search, Filter, AlertTriangle, MoreHorizontal, Plus, ArrowDown, ArrowUp } from 'lucide-react';

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [allProducts, setAllProducts] = useState([]); // Master product list
    const [loading, setLoading] = useState(true);
    const [requestModal, setRequestModal] = useState({ open: false, item: null, qty: "50", manualMode: false });
    const [debugCount, setDebugCount] = useState(0);

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = user.role === 'admin';

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (window.electronAPI) {
                try {
                    // Fetch Shop Inventory
                    let shopInv;
                    if (isAdmin) {
                        shopInv = await window.electronAPI.getGlobalInventory();
                    } else {
                        shopInv = await window.electronAPI.getShopInventory(user.shopId);

                        // Also fetch ALL products for the manual request dropdown
                        const masterProds = await window.electronAPI.getAllProducts();
                        if (masterProds && !masterProds.error) setAllProducts(masterProds);
                    }
                    if (shopInv && !shopInv.error) setItems(shopInv);

                } catch (err) {
                    console.error("Failed to fetch inventory data", err);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [isAdmin, user.shopId]);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusStyle = (threshold, stock) => {
        if (stock === 0) return { bg: '#f1f5f9', text: '#64748b', label: 'Empty' };
        if (stock <= threshold) return { bg: '#fee2e2', text: '#ef4444', label: 'Low Stock' };
        if (stock <= threshold * 2) return { bg: '#fef3c7', text: '#d97706', label: 'Medium Stock' };
        return { bg: '#dcfce7', text: '#16a34a', label: 'High Stock' };
    };

    const submitRequest = async () => {
        const { item, qty } = requestModal;
        const prodId = item ? item.id : null;

        if (!prodId || !qty || isNaN(qty) || parseInt(qty) <= 0) {
            alert("Please select a valid product and quantity.");
            return;
        }

        if (window.electronAPI) {
            try {
                const shopId = user.shopId || user.shop_id;
                const result = await window.electronAPI.requestStock(shopId, [{ productId: parseInt(prodId), quantity: parseInt(qty) }]);
                if (result === true || (result && !result.error)) {
                    alert("✅ SUCCESS: Request Sent to Central Kitchen!");
                    setRequestModal({ open: false, item: null, qty: "50", manualMode: false });
                } else {
                    alert("❌ FAILED: " + (result?.message || "Check Connection"));
                }
            } catch (err) {
                alert("❌ ERROR: " + err.message);
            }
        }
    };

    return (
        <div className="animate-fade-in page-container" style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                        {isAdmin ? 'Global Inventory' : 'My Inventory'}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                        {isAdmin ? 'Centralized view of all shop stock' : `Managing Inventory for Store #${user.shopId}`}
                    </p>
                </div>
                {!isAdmin && (
                    <button
                        onClick={() => setRequestModal({ open: true, item: null, qty: "50", manualMode: true })}
                        className="bg-gradient-primary"
                        style={{ padding: '8px 16px', borderRadius: '12px', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                        <Plus size={16} /> Manual Stock Request
                    </button>
                )}
            </div>

            {/* Main Table Card */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border-color)', overflowX: 'auto' }}>
                <div style={{
                    padding: '20px 24px', borderBottom: '1px solid var(--border-color)',
                    display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--bg-card)', flexWrap: 'wrap'
                }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', opacity: 0.7 }} />
                        <input
                            type="text"
                            placeholder="Find items in your stock (Name or Category)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%', padding: '10px 16px 10px 48px', borderRadius: '14px',
                                border: '1.5px solid var(--border-color)', background: 'var(--bg-app)',
                                color: 'var(--text-main)', outline: 'none', fontSize: '0.85rem',
                                transition: 'all 0.2s ease', fontWeight: '500'
                            }}
                            className="inventory-search-input"
                        />
                    </div>

                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '700'
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                        {filteredItems.length} ITEMS FOUND
                    </div>
                </div>

                {loading ? (
                    <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-app)', borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>ITEM</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>STOCK</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>STATUS</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item, idx) => {
                                const statusStyle = getStatusStyle(item.min_threshold, item.total_stock || item.quantity);
                                return (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--text-main)', fontSize: '0.85rem' }}>{item.name}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-main)', fontSize: '0.8rem' }}>
                                            {item.total_stock ?? item.quantity} {item.unit}
                                        </td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <div style={{ display: 'inline-flex', padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold', background: statusStyle.bg, color: statusStyle.text }}>
                                                {statusStyle.label}
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px 16px' }}>
                                            {!isAdmin && (
                                                <button
                                                    onClick={() => {
                                                        setRequestModal({ open: true, item, qty: "50", manualMode: false });
                                                    }}
                                                    style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                                                    Quick Request
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            {/* REQUEST MODAL OVERLAY */}
            {requestModal.open && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ margin: '0 0 8px', color: 'var(--text-main)', fontSize: '1.4rem' }}>{requestModal.manualMode ? 'Manual Stock Request' : 'Quick Request'}</h3>
                        <p style={{ margin: '0 0 24px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            {requestModal.manualMode ? 'Select a product to request from the Central Kitchen.' : `Requesting more stock for ${requestModal.item?.name}.`}
                        </p>

                        {requestModal.manualMode ? (
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>SELECT PRODUCT</label>
                                <select
                                    className="custom-select"
                                    onChange={(e) => {
                                        const selected = allProducts.find(p => p.id === parseInt(e.target.value));
                                        setRequestModal({ ...requestModal, item: selected });
                                    }}
                                    style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-app)', color: 'var(--text-main)', fontSize: '1rem' }}
                                >
                                    <option value="">-- Choose Product --</option>
                                    {allProducts.map(p => (
                                        <option key={p.id} value={p.id}>{p.name} ({p.category})</option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <div style={{ padding: '16px', background: 'var(--bg-app)', borderRadius: '12px', marginBottom: '20px', border: '1px solid var(--border-color)' }}>
                                <div style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{requestModal.item?.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Current Stock: {requestModal.item?.total_stock ?? requestModal.item?.quantity} {requestModal.item?.unit}</div>
                            </div>
                        )}

                        <div style={{ marginBottom: '28px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>QUANTITY NEEDED</label>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                value={requestModal.qty}
                                onChange={(e) => setRequestModal({ ...requestModal, qty: e.target.value })}
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid var(--color-primary)', background: 'var(--bg-app)', color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 'bold' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => setRequestModal({ open: false, item: null, qty: "50", manualMode: false })}
                                style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: '600' }}>
                                Cancel
                            </button>
                            <button
                                onClick={submitRequest}
                                className="bg-gradient-primary"
                                style={{ flex: 1, padding: '14px', borderRadius: '12px', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                .inventory-search-input:focus {
                    border-color: var(--color-primary) !important;
                    background: var(--bg-card) !important;
                    box-shadow: 0 0 0 4px rgba(33, 82, 255, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Inventory;
