import { useState, useEffect } from 'react';
import { fetchMenu, addMenuItem, deleteMenuItem, toggleItemAvailability } from '../api';
import { Plus, Trash, ToggleLeft, ToggleRight, ForkKnife } from 'phosphor-react';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newItem, setNewItem] = useState({ name: '', price: '', category: 'Lunch', image: '' });

    useEffect(() => { loadMenu(); }, []);

    const loadMenu = async () => {
        try {
            const { data } = await fetchMenu();
            setItems(data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.price) return;
        try {
            const { data } = await addMenuItem(newItem);
            setItems([...items, data]);
            setNewItem({ name: '', price: '', category: 'Lunch', image: '' });
        } catch (err) { alert("Failed to add"); }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewItem({ ...newItem, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete item?")) return;
        try {
            await deleteMenuItem(id);
            setItems(items.filter(i => i.id !== id));
        } catch (err) { alert("Failed"); }
    };

    const handleToggle = async (item) => {
        try {
            const newStatus = !item.is_available;
            await toggleItemAvailability(item.id, newStatus);
            setItems(items.map(i => i.id === item.id ? { ...i, is_available: newStatus } : i));
        } catch (err) { alert("Failed to toggle"); }
    };

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="page-header" style={{ marginBottom: 0, flexShrink: 0 }}>
                <h1>Menu Management</h1>
            </div>

            <div className="menu-layout">

                {/* LEFT: Add Item Form */}
                <div className="feature-card" style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
                        <div style={{ background: 'var(--bg-hover)', padding: '8px', borderRadius: '50%', color: 'var(--primary)' }}>
                            <Plus size={18} weight="bold" />
                        </div>
                        Add New Item
                    </h2>

                    <form onSubmit={handleAdd}>
                        <div className="form-group">
                            <label className="form-label">Item Image</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '8px',
                                    border: '2px dashed var(--border-light)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden', background: 'var(--bg-input)'
                                }}>
                                    {newItem.image ? (
                                        <img src={newItem.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <ForkKnife size={24} color="var(--text-muted)" />
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Item Name</label>
                            <input
                                className="modern-input"
                                placeholder="e.g. Chicken Biryani"
                                value={newItem.name}
                                onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Price (₹)</label>
                            <input
                                type="number"
                                className="modern-input"
                                placeholder="0.00"
                                value={newItem.price}
                                onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Category</label>
                            <select
                                className="modern-select"
                                value={newItem.category}
                                onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                            >
                                {['Breakfast', 'Lunch', 'Dinner', 'Drinks'].map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="modern-btn" style={{ marginTop: '24px' }}>
                            Add to Menu
                        </button>
                    </form>
                </div>

                {/* RIGHT: Item List */}
                <div className="feature-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ padding: '20px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Current Menu Items</h2>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', background: 'var(--bg-hover)', padding: '4px 12px', borderRadius: '20px' }}>
                            {items.length} Items
                        </span>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <table className="modern-table" style={{ width: '100%' }}>
                            <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1, boxShadow: '0 2px 2px rgba(0,0,0,0.02)' }}>
                                <tr>
                                    <th>Item Details</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Availability</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                                            No items found. Add one to get started.
                                        </td>
                                    </tr>
                                ) : (
                                    items.map(item => (
                                        <tr key={item.id} style={{ opacity: item.is_available ? 1 : 0.6 }}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            style={{
                                                                width: '36px', height: '36px', borderRadius: '50%',
                                                                objectFit: 'cover', border: '1px solid var(--border-light)'
                                                            }}
                                                        />
                                                    ) : (
                                                        <div style={{
                                                            width: '36px', height: '36px', borderRadius: '50%',
                                                            background: item.is_available ? 'rgba(249, 115, 22, 0.1)' : 'var(--bg-hover)',
                                                            color: item.is_available ? 'var(--primary)' : 'var(--text-muted)',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                        }}>
                                                            <ForkKnife size={18} weight="fill" />
                                                        </div>
                                                    )}
                                                    <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{item.name}</span>
                                                </div>
                                            </td>
                                            <td><span className="category-tag">{item.category}</span></td>
                                            <td style={{ fontWeight: '600', color: 'var(--text-main)' }}>₹ {item.price}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleToggle(item)}
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}
                                                    title="Toggle Availability"
                                                >
                                                    {item.is_available ?
                                                        <ToggleRight size={32} weight="fill" color="var(--primary)" /> :
                                                        <ToggleLeft size={32} color="var(--text-muted)" />
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="modern-btn danger"
                                                    style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
                                                    title="Delete Item"
                                                >
                                                    <Trash size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;
