import React, { useState, useEffect } from 'react';
import {
    Plus, Edit3, Trash2, Filter, Search, Image as ImageIcon,
    X, Save, Loader2, Coffee, Layers, Tag
} from 'lucide-react';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        unit: 'pcs'
    });

    const [searchTerm, setSearchTerm] = useState('');

    const fetchProducts = async () => {
        if (window.electronAPI) {
            setLoading(true);
            try {
                const data = await window.electronAPI.getAllProducts();
                if (data && !data.error) {
                    setItems(data);
                }
            } catch (err) {
                console.error("Failed to fetch products", err);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (window.electronAPI) {
            setSaving(true);
            try {
                const result = await window.electronAPI.createProduct({
                    name: formData.name,
                    category: formData.category,
                    price: parseFloat(formData.price),
                    unit: formData.unit
                });

                if (result && result.success) {
                    setIsModalOpen(false);
                    setFormData({ name: '', category: '', price: '', unit: 'pcs' });
                    fetchProducts();
                } else {
                    alert("Failed to add item: " + (result?.error || "Unknown error"));
                }
            } catch (err) {
                console.error("Failed to add product", err);
                alert("Error adding item. Check console.");
            } finally {
                setSaving(false);
            }
        }
    };

    // Derived Categories
    const categories = ['All', ...new Set(items.map(i => i.category).filter(Boolean))];

    const filteredItems = items.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalItems = items.length;
    const totalCategories = categories.length - 1; // Exclude 'All'
    const avgPrice = totalItems > 0
        ? Math.round(items.reduce((acc, curr) => acc + (parseFloat(curr.base_price) || 0), 0) / totalItems)
        : 0;

    return (
        <div className="animate-fade-in page-container" style={{ paddingLeft: '40px' }}>
            {/* Header Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2px' }}>Menu Management</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '500' }}>Define and manage your global product catalog</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-primary"
                    style={{
                        padding: '10px 20px', borderRadius: '12px', color: 'white', border: 'none',
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
                        boxShadow: '0 10px 20px -5px rgba(242, 116, 33, 0.4)',
                        transition: 'transform 0.2s',
                        letterSpacing: '0.025em'
                    }}
                >
                    <Plus size={18} strokeWidth={2.5} /> ADD NEW ITEM
                </button>
            </div>

            {/* Catalog Statistics */}
            <div className="grid-3" style={{ marginBottom: '32px' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(242, 116, 33, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Coffee size={20} color="#F27421" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>{totalItems}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '2px' }}>Total Products</div>
                    </div>
                </div>
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Layers size={20} color="#FB923C" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>{totalCategories}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '2px' }}>Active Categories</div>
                    </div>
                </div>
                <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Tag size={20} color="#10b981" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: 1 }}>₹ {avgPrice}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '2px' }}>Average Price</div>
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="card" style={{ padding: '0', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'var(--bg-card)', boxShadow: 'var(--shadow-soft)' }}>

                {/* Search and Filters Bar */}
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-app)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>

                    {/* Modern Search Bar */}
                    <div style={{ position: 'relative', flex: '1', minWidth: '280px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Find products by name or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 14px 14px 52px',
                                borderRadius: '16px',
                                border: '1.5px solid var(--border-color)',
                                background: 'var(--bg-surface)',
                                color: 'var(--text-main)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'all 0.2s',
                                fontWeight: '600',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '4px', maxWidth: '100%' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '12px',
                                    border: '1.5px solid ' + (activeCategory === cat ? 'var(--color-primary)' : 'var(--border-color)'),
                                    background: activeCategory === cat ? 'var(--color-primary)' : 'var(--bg-surface)',
                                    color: activeCategory === cat ? 'white' : 'var(--text-main)',
                                    fontWeight: '700',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                {cat === 'All' && <Filter size={14} />}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table Section */}
                {loading ? (
                    <div style={{ padding: '80px', textAlign: 'center' }}>
                        <Loader2 size={40} className="animate-spin" style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <p style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>Synchronizing Menu...</p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div style={{ padding: '80px', textAlign: 'center' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <Search size={32} color="var(--text-secondary)" />
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontWeight: '700', fontSize: '1.1rem' }}>No results match your search</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Try refining your keywords or selected category.</p>
                    </div>
                ) : (
                    <div style={{ padding: '16px', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product Info</th>
                                    <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                                    <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price Setup</th>
                                    <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inventory Unit</th>
                                    <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((item, idx) => (
                                    <tr
                                        key={item.id}
                                        style={{
                                            transition: 'transform 0.2s',
                                            background: 'var(--bg-app)',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                            borderRadius: '16px'
                                        }}
                                        className="hover-card-row"
                                    >
                                        <td style={{ padding: '12px 16px', borderRadius: '16px 0 0 16px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{
                                                    width: '40px', height: '40px', borderRadius: '10px',
                                                    background: 'var(--bg-surface)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: 'var(--text-secondary)',
                                                    border: '1px solid var(--border-color)'
                                                }}>
                                                    <ImageIcon size={18} />
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '2px' }}>{item.name}</div>
                                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>ID: #{item.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <span style={{
                                                padding: '4px 10px', borderRadius: '8px', background: 'var(--bg-surface)', color: 'var(--text-main)',
                                                fontSize: '0.75rem', fontWeight: '700', border: '1px solid var(--border-color)'
                                            }}>
                                                {item.category}
                                            </span>
                                        </td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--color-primary)' }}>₹ {parseFloat(item.base_price).toLocaleString()}</span>
                                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>Standard Rate</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-main)', background: 'var(--bg-surface)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                                                {item.unit}
                                            </span>
                                        </td>
                                        <td style={{ padding: '12px 16px', borderRadius: '0 16px 16px 0', textAlign: 'right' }}>
                                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                <button style={{
                                                    padding: '8px', borderRadius: '10px', border: '1px solid var(--border-color)',
                                                    background: 'var(--bg-surface)', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }} onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}>
                                                    <Edit3 size={16} />
                                                </button>
                                                <button style={{
                                                    padding: '8px', borderRadius: '10px', border: '1px solid var(--color-danger-light)',
                                                    background: 'var(--bg-danger-light)', color: 'var(--color-danger)', cursor: 'pointer', transition: 'all 0.2s',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--bg-danger-hover)'; }}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Premium Add Item Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
                    padding: '20px'
                }}>
                    <div style={{
                        background: 'var(--bg-card)', padding: '40px', borderRadius: '32px',
                        width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)', border: '1px solid var(--border-color)'
                    }}>
                        <style>{`
                            @keyframes modalSlideIn {
                                from { transform: translateY(30px); opacity: 0; }
                                to { transform: translateY(0); opacity: 1; }
                            }
                        `}</style>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>New Menu Item</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Fill in the details for the new product</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    background: 'var(--bg-app)', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)',
                                    width: '36px', height: '36px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>Item Designation *</label>
                                <input
                                    type="text" required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        width: '100%', padding: '14px 18px', borderRadius: '14px', border: '2px solid var(--border-color)',
                                        background: 'var(--input-bg)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', transition: 'all 0.2s', fontWeight: '600'
                                    }}
                                    placeholder="e.g. Special Chocolate Cake"
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>Category *</label>
                                <input
                                    type="text" required
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    style={{
                                        width: '100%', padding: '14px 18px', borderRadius: '14px', border: '2px solid var(--border-color)',
                                        background: 'var(--input-bg)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', transition: 'all 0.2s', fontWeight: '600'
                                    }}
                                    placeholder="e.g. Desserts"
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>Price (₹) *</label>
                                    <input
                                        type="number" step="0.01" required
                                        value={formData.price}
                                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                                        style={{
                                            width: '100%', padding: '14px 18px', borderRadius: '14px', border: '2px solid var(--border-color)',
                                            background: 'var(--input-bg)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', transition: 'all 0.2s', fontWeight: '600'
                                        }}
                                        placeholder="0.00"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>Measurement</label>
                                    <select
                                        value={formData.unit}
                                        onChange={e => setFormData({ ...formData, unit: e.target.value })}
                                        style={{
                                            width: '100%', padding: '14px 18px', borderRadius: '14px', border: '2px solid var(--border-color)',
                                            background: 'var(--input-bg)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', cursor: 'pointer', fontWeight: '600'
                                        }}
                                    >
                                        <option value="pcs">Pieces (pcs)</option>
                                        <option value="kg">Kilogram (kg)</option>
                                        <option value="ltr">Liter (ltr)</option>
                                        <option value="plate">Plate</option>
                                        <option value="set">Set</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    style={{
                                        padding: '14px 24px', borderRadius: '16px', border: '1.5px solid var(--border-color)',
                                        background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: '700', fontSize: '0.9rem'
                                    }}
                                >
                                    Dismiss
                                </button>
                                <button
                                    type="submit"
                                    className="bg-gradient-primary"
                                    disabled={saving}
                                    style={{
                                        padding: '14px 32px', borderRadius: '16px', border: 'none',
                                        color: 'white', fontWeight: '700', cursor: saving ? 'not-allowed' : 'pointer',
                                        display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem',
                                        boxShadow: '0 10px 15px -3px rgba(242, 116, 33, 0.3)',
                                        opacity: saving ? 0.7 : 1
                                    }}
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Finalizing...
                                        </>
                                    ) : (
                                        <>
                                            <Save size={20} /> Register Item
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
