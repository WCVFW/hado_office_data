import React, { useState, useEffect } from 'react';
import { Store, MapPin, Phone, MoreHorizontal, Plus, Search, Filter, X, Save } from 'lucide-react';

const Shops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        shopName: '',
        address: '',
        phone: '',
        category: 'Dine-in',
        password: ''
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Inventory Modal State
    const [isInvModalOpen, setIsInvModalOpen] = useState(false);
    const [selectedShop, setSelectedShop] = useState(null);
    const [shopInventory, setShopInventory] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [invLoading, setInvLoading] = useState(false);

    const openInventory = async (shop) => {
        setSelectedShop(shop);
        setIsInvModalOpen(true);
        setInvLoading(true);
        if (window.electronAPI) {
            try {
                const [inv, prods] = await Promise.all([
                    window.electronAPI.getShopInventory(shop.id),
                    window.electronAPI.getAllProducts()
                ]);
                setShopInventory(inv || []);
                setAllProducts(prods || []);
            } catch (err) {
                console.error("Inv Load Error", err);
            } finally {
                setInvLoading(false);
            }
        }
    };

    const handleUpdateStock = async (productId, quantity, totalAdd = true, threshold = null) => {
        if (!window.electronAPI) return;
        try {
            const success = await window.electronAPI.updateShopStock({
                shopId: selectedShop.id,
                productId,
                quantity: parseInt(quantity),
                totalAdd,
                threshold
            });
            if (success) {
                // Refresh shop inventory
                const inv = await window.electronAPI.getShopInventory(selectedShop.id);
                setShopInventory(inv || []);
            }
        } catch (err) {
            console.error("Stock Update Error", err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        if (window.electronAPI) {
            try {
                const data = await window.electronAPI.getAllShops();
                if (data && !data.error) {
                    setShops(data);
                }
            } catch (err) {
                console.error("Failed to fetch shops", err);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    const getStatusStyle = (status) => {
        if (status === 1 || status === true || status === 'Open') return { bg: 'rgba(22, 163, 74, 0.1)', text: '#4ade80', label: 'Active' };
        return { bg: 'var(--bg-app)', text: 'var(--text-secondary)', label: 'Inactive' };
    };

    const filteredShops = shops.filter(shop => {
        const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (shop.location && shop.location.toLowerCase().includes(searchTerm.toLowerCase()));

        const isShopActive = shop.is_active === 1 || shop.is_active === true;
        const matchesStatus = statusFilter === 'all' ||
            (statusFilter === 'active' && isShopActive) ||
            (statusFilter === 'inactive' && !isShopActive);

        return matchesSearch && matchesStatus;
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.shopName || !formData.password) {
            alert("Shop Name and Owner Password are required");
            return;
        }

        if (window.electronAPI) {
            try {
                setSaving(true);
                // Use the atomic creation of Shop + User
                const result = await window.electronAPI.createShopAndUser({
                    name: formData.shopName,
                    address: formData.address,
                    phone: formData.phone,
                    category: formData.category,
                    password: formData.password
                });

                if (result && result.success) {
                    alert(`Outlet Created Successfully!\nOwner Login: ${result.username}`);
                    setIsModalOpen(false);
                    setFormData({ shopName: '', address: '', phone: '', category: 'Dine-in', password: '' });
                    loadData();
                } else {
                    alert("Failed to create outlet: " + (result?.error || "Unknown error"));
                }
            } catch (err) {
                console.error("Create Shop Error", err);
                alert("Error creating outlet. See console.");
            } finally {
                setSaving(false);
            }
        } else {
            alert("System Error: Backend API not connected. Please restart the application.");
        }
    };

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', margin: 0 }}>Outlets & Shops</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>Manage your kitchen outlets and canteens</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-primary" style={{
                        color: 'white',
                        padding: '8px 16px', borderRadius: '10px',
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontWeight: '500',
                        fontSize: '0.85rem',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        cursor: 'pointer'
                    }}>
                    <Plus size={16} /> Add New Outlet
                </button>
            </div>

            {/* Compact Search and Filter Toolbar */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search outlets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px 10px 10px 40px',
                            borderRadius: '10px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-surface)',
                            color: 'var(--text-main)',
                            fontSize: '0.875rem',
                            boxShadow: 'var(--shadow-card)',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ position: 'relative', minWidth: '200px' }}>
                    <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' }}>
                        <Filter size={16} />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px 16px 10px 40px',
                            borderRadius: '10px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-surface)',
                            color: 'var(--text-main)',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-card)',
                            appearance: 'none',
                            outline: 'none'
                        }}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Table View */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', overflowX: 'auto', border: '1px solid var(--border-color)' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>Loading Outlets...</div>
                ) : filteredShops.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>No shops found matching your search.</div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-app)', borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Outlet Name</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Location</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Contact</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Today's Revenue</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Status</th>
                                <th style={{ padding: '16px 24px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredShops.map(shop => {
                                const statusInfo = getStatusStyle(shop.is_active);
                                return (
                                    <tr key={shop.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{ padding: '16px 24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Store size={20} color="var(--color-primary)" />
                                                </div>
                                                <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{shop.name}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                                <MapPin size={14} /> {shop.location || 'No Location'}
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                                <Phone size={14} /> {shop.contact_number || 'No Contact'}
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 24px', fontWeight: 'bold', color: 'var(--text-main)' }}>
                                            ₹ {shop.today_revenue || 0}
                                        </td>
                                        <td style={{ padding: '16px 24px' }}>
                                            <span style={{
                                                background: statusInfo.bg,
                                                color: statusInfo.text,
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold'
                                            }}>
                                                {statusInfo.label}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                <button
                                                    onClick={() => openInventory(shop)}
                                                    style={{
                                                        background: 'var(--bg-app)',
                                                        color: 'var(--color-primary)',
                                                        border: '1px solid var(--border-color)',
                                                        padding: '6px 12px',
                                                        borderRadius: '8px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'bold',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Stock
                                                </button>
                                                <button
                                                    onClick={async () => {
                                                        const newStatus = !shop.is_active;
                                                        if (window.electronAPI) {
                                                            await window.electronAPI.updateShopStatus({ shopId: shop.id, isActive: newStatus });
                                                            loadData();
                                                        }
                                                    }}
                                                    title={shop.is_active ? "Deactivate Outlet" : "Activate Outlet"}
                                                    style={{
                                                        background: 'var(--bg-app)',
                                                        color: shop.is_active ? '#ef4444' : '#10b981',
                                                        border: '1px solid var(--border-color)',
                                                        padding: '6px 12px',
                                                        borderRadius: '8px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 'bold',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {shop.is_active ? "Disable" : "Enable"}
                                                </button>
                                                <button
                                                    onClick={async () => {
                                                        if (window.confirm(`Are you sure you want to delete ${shop.name}? This will remove all associated inventory data.`)) {
                                                            if (window.electronAPI) {
                                                                await window.electronAPI.deleteShop(shop.id);
                                                                loadData();
                                                            }
                                                        }
                                                    }}
                                                    style={{ color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Create Outlet Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
                }}>
                    <div style={{
                        background: 'var(--bg-surface)', padding: '24px', borderRadius: '16px',
                        width: '450px', boxShadow: 'var(--shadow-card)',
                        animation: 'fadeIn 0.2s ease-out', border: '1px solid var(--border-color)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Create New Outlet</h3>
                            {!saving && (
                                <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Shop Name *</label>
                                <input type="text" required value={formData.shopName} onChange={e => setFormData({ ...formData, shopName: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)' }} placeholder="e.g. Velmess Mount Road" disabled={saving} />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Address / Location</label>
                                <input type="text" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)' }} disabled={saving} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Category</label>
                                    <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)' }} disabled={saving}>
                                        <option value="Dine-in">Dine-in</option>
                                        <option value="Takeaway">Takeaway</option>
                                        <option value="Cloud Kitchen">Cloud Kitchen</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Phone</label>
                                    <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)' }} disabled={saving} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Owner Login Password *</label>
                                <input type="password" required value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-main)' }} placeholder="For shop login" disabled={saving} />
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                                    A user will be created automatically for this shop.
                                </p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                {!saving && (
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer' }}
                                    >
                                        Cancel
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="bg-gradient-primary"
                                    disabled={saving}
                                    style={{
                                        padding: '10px 20px', borderRadius: '8px', border: 'none',
                                        color: 'white', fontWeight: '500', cursor: saving ? 'not-allowed' : 'pointer',
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        opacity: saving ? 0.7 : 1
                                    }}
                                >
                                    {saving ? (
                                        "Creating..."
                                    ) : (
                                        <>
                                            <Save size={16} /> Create Outlet
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Stock Distribution Modal */}
            {isInvModalOpen && selectedShop && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1100,
                    backdropFilter: 'blur(4px)'
                }}>
                    <div style={{
                        background: 'var(--bg-surface)', padding: '30px', borderRadius: '20px',
                        width: '800px', maxHeight: '90vh', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                        border: '1px solid var(--border-color)',
                        animation: 'modalSlideUp 0.3s ease-out'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>Stock Distribution</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>Managing inventory for <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{selectedShop.name}</span></p>
                            </div>
                            <button onClick={() => setIsInvModalOpen(false)} style={{ background: 'var(--bg-app)', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
                            {invLoading ? (
                                <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>Loading inventory data...</div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>

                                    {/* Add New Stock Section */}
                                    <div className="card" style={{ padding: '20px', background: 'var(--bg-app)' }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--text-main)' }}>Add Stock</h4>
                                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                            <select id="prod-select" style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '10px', background: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}>
                                                <option value="">Select Product...</option>
                                                {allProducts.map(p => (
                                                    <option key={p.id} value={p.id}>{p.name} ({p.unit})</option>
                                                ))}
                                            </select>
                                            <input id="qty-input" type="number" placeholder="Qty" style={{ width: '100px', padding: '12px', borderRadius: '10px', background: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-color)' }} />
                                            <button
                                                onClick={() => {
                                                    const pid = document.getElementById('prod-select').value;
                                                    const qty = document.getElementById('qty-input').value;
                                                    if (pid && qty) handleUpdateStock(pid, qty);
                                                }}
                                                className="bg-gradient-primary"
                                                style={{ color: 'white', border: 'none', padding: '0 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                                            >
                                                Add Stock
                                            </button>
                                        </div>
                                    </div>

                                    {/* Current Inventory Table */}
                                    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                            <thead style={{ background: 'var(--bg-app)' }}>
                                                <tr>
                                                    <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>PRODUCT</th>
                                                    <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>CURRENT QTY</th>
                                                    <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>THRESHOLD</th>
                                                    <th style={{ padding: '12px 20px', textAlign: 'right', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shopInventory.length === 0 ? (
                                                    <tr><td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>No stock assigned yet.</td></tr>
                                                ) : (
                                                    shopInventory.map(item => (
                                                        <tr key={item.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                                            <td style={{ padding: '12px 20px' }}>
                                                                <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{item.name}</div>
                                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.category}</div>
                                                            </td>
                                                            <td style={{ padding: '12px 20px' }}>
                                                                <span style={{
                                                                    color: item.quantity <= item.min_threshold ? '#ef4444' : 'var(--text-main)',
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    {item.quantity} {item.unit}
                                                                </span>
                                                            </td>
                                                            <td style={{ padding: '12px 20px', color: 'var(--text-secondary)' }}>{item.min_threshold}</td>
                                                            <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                                                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                                    <button onClick={() => {
                                                                        const q = prompt("Enter adjustment (positive to add, negative to subtract):", "0");
                                                                        if (q) handleUpdateStock(item.id, q);
                                                                    }} style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--color-primary)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 'bold' }}>+ Stock</button>

                                                                    <button onClick={() => {
                                                                        const t = prompt("Enter new alert threshold for this item:", item.min_threshold);
                                                                        if (t) handleUpdateStock(item.id, 0, false, parseInt(t));
                                                                    }} style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>Set Target</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={() => setIsInvModalOpen(false)} style={{ padding: '12px 24px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shops;
