import React, { useState } from 'react';

const ItemManager = ({ items, refreshData, config }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [newItem, setNewItem] = useState({
        Name: '', Category: 'Grocery', Unit: 'Kg', MinStock: '5', Status: 'Active', CurrentStock: '0'
    });
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditClick = (item) => {
        setNewItem(item);
        setIsEditMode(true);
        setShowAdd(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (config && config.service) { // Using GAS API via prop
            let res;
            if (isEditMode) {
                res = await config.service.editItem(config.url, newItem);
            } else {
                res = await config.service.addItem(config.url, newItem);
            }

            if (res.success) {
                refreshData();
                setShowAdd(false);
                setIsEditMode(false);
                setNewItem({ Name: '', Category: 'Grocery', Unit: 'Kg', MinStock: '5', Status: 'Active', CurrentStock: '0' });
            } else {
                alert('Error: ' + JSON.stringify(res.error));
            }
        } else {
            alert('API Config missing or disconnected.');
        }
        setLoading(false);
    };

    const handleDeleteClick = async (item) => {
        if (window.confirm(`Are you sure you want to delete "${item.Name}"? This cannot be undone.`)) {
            setLoading(true);
            if (config && config.service) {
                const res = await config.service.deleteItem(config.url, item);
                if (res.success) {
                    refreshData();
                    if (isEditMode && newItem.ID === item.ID) {
                        setShowAdd(false);
                        setIsEditMode(false);
                        setNewItem({ Name: '', Category: 'Grocery', Unit: 'Kg', MinStock: '5', Status: 'Active', CurrentStock: '0' });
                    }
                } else {
                    alert('Error: ' + JSON.stringify(res.error));
                }
            } else {
                alert('API Config missing');
            }
            setLoading(false);
        }
    };

    const filteredItems = items.filter(i =>
        i.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.Category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="page-header">
                <h2 className="page-title">Inventory Items</h2>
                <button className="btn btn-primary" onClick={() => {
                    setShowAdd(!showAdd);
                    setIsEditMode(false);
                    setNewItem({ Name: '', Category: 'Grocery', Unit: 'Kg', MinStock: '5', Status: 'Active', CurrentStock: '0' });
                }}>
                    {showAdd ? 'Cancel' : '+ Add New Item'}
                </button>
            </div>

            {showAdd && (
                <div className="content-card">
                    <h3 style={{ marginTop: 0 }}>{isEditMode ? 'Edit Product' : 'Add New Product'}</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Item Name</label>
                                <input required type="text" value={newItem.Name} onChange={e => setNewItem({ ...newItem, Name: e.target.value })} placeholder="e.g. Basmati Rice" />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select value={newItem.Category} onChange={e => setNewItem({ ...newItem, Category: e.target.value })}>
                                    <option>Grocery</option>
                                    <option>Vegetables</option>
                                    <option>Oil</option>
                                    <option>Spices</option>
                                    <option>Dairy</option>
                                    <option>Cleaning</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Unit</label>
                                <select value={newItem.Unit} onChange={e => setNewItem({ ...newItem, Unit: e.target.value })}>
                                    <option>Kg</option>
                                    <option>Litre</option>
                                    <option>Nos</option>
                                    <option>Box</option>
                                    <option>Packet</option>
                                    <option>Gram</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Minimum Stock Alert Level</label>
                                <input required type="number" value={newItem.MinStock} onChange={e => setNewItem({ ...newItem, MinStock: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select value={newItem.Status} onChange={e => setNewItem({ ...newItem, Status: e.target.value })}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{isEditMode ? 'Current Stock (Update manually if needed)' : 'Opening Stock'}</label>
                                <input type="number" value={newItem.CurrentStock} onChange={e => setNewItem({ ...newItem, CurrentStock: e.target.value })} />
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <button className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : (isEditMode ? 'Update Item' : 'Save Item')}</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="content-card">
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: '300px' }}
                    />
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Unit</th>
                                <th>Stock</th>
                                <th>Min Level</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.ID}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Unit}</td>
                                    <td style={{ fontWeight: 'bold', color: parseInt(item.CurrentStock) <= parseInt(item.MinStock) ? '#ef4444' : 'inherit' }}>
                                        {item.CurrentStock}
                                    </td>
                                    <td>{item.MinStock}</td>
                                    <td>
                                        <span className={`status-badge ${item.Status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                                            {item.Status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ padding: '5px 10px', fontSize: '0.8rem', marginRight: '5px' }} onClick={() => handleEditClick(item)}>Edit</button>
                                        <button className="btn btn-danger" style={{ padding: '5px 10px', fontSize: '0.8rem' }} onClick={() => handleDeleteClick(item)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {filteredItems.length === 0 && (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No items found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ItemManager;
