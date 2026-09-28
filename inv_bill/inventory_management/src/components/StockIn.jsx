import React, { useState } from 'react';

const StockIn = ({ items, refreshData, config }) => {
    const [transaction, setTransaction] = useState({
        Date: new Date().toISOString().split('T')[0],
        ItemID: '',
        ItemName: '',
        Quantity: '',
        SupplierOrPurpose: '',
        Price: '', // Purchase Price
    });
    const [loading, setLoading] = useState(false);

    const handleItemSelect = (e) => {
        const selectedId = e.target.value;
        const item = items.find(i => i.ID === selectedId);
        setTransaction({
            ...transaction,
            ItemID: selectedId,
            ItemName: item ? item.Name : ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Calculate total if needed, mainly for report
        const total = (parseFloat(transaction.Price || 0) * parseInt(transaction.Quantity || 0)).toFixed(2);

        const payload = {
            ...transaction,
            Type: 'IN',
            Total: total
        };

        if (config && config.service) {
            const res = await config.service.addTransaction(config.url, payload);
            if (res.success) {
                alert('Stock Added Successfully');
                refreshData();
                setTransaction({ ...transaction, Quantity: '', Price: '', SupplierOrPurpose: '' });
            } else {
                alert('Error: ' + JSON.stringify(res.error));
            }
        } else {
            alert('API Config missing or disconnected.');
        }
        setLoading(false);
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-title">Stock In (Purchase)</h2>
            </div>

            <div className="content-card" style={{ maxWidth: '800px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" required value={transaction.Date} onChange={e => setTransaction({ ...transaction, Date: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Select Item</label>
                            <select required value={transaction.ItemID} onChange={handleItemSelect}>
                                <option value="">-- Select Item --</option>
                                {items.filter(i => i.Status === 'Active').map(i => (
                                    <option key={i.ID} value={i.ID}>{i.Name} (Curr: {i.CurrentStock} {i.Unit})</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Supplier Name (Optional)</label>
                            <input type="text" value={transaction.SupplierOrPurpose} onChange={e => setTransaction({ ...transaction, SupplierOrPurpose: e.target.value })} placeholder="e.g. ABC Traders" />
                        </div>
                        <div className="form-group">
                            <label>Quantity Received</label>
                            <input type="number" required min="1" value={transaction.Quantity} onChange={e => setTransaction({ ...transaction, Quantity: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Purchase Price (Per Unit)</label>
                            <input type="number" step="0.01" value={transaction.Price} onChange={e => setTransaction({ ...transaction, Price: e.target.value })} placeholder="0.00" />
                        </div>
                        <div className="form-group">
                            <label>Total Cost</label>
                            <input type="text" disabled value={((parseFloat(transaction.Price || 0) * parseInt(transaction.Quantity || 0)) || 0).toFixed(2)} style={{ backgroundColor: '#eee' }} />
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <button className="btn btn-primary" disabled={loading}>{loading ? 'Processing...' : 'Add Stock'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StockIn;
