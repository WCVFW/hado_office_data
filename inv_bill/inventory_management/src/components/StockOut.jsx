import React, { useState } from 'react';

const StockOut = ({ items, refreshData, config }) => {
    const [transaction, setTransaction] = useState({
        Date: new Date().toISOString().split('T')[0],
        ItemID: '',
        ItemName: '',
        Quantity: '',
        SupplierOrPurpose: 'Kitchen', // Default
        Price: '0', // Not relevant for issue usually
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

        const item = items.find(i => i.ID === transaction.ItemID);
        if (!item) { alert('Item not found'); setLoading(false); return; }

        const currentStock = parseInt(item.CurrentStock || 0);
        const qty = parseInt(transaction.Quantity);

        if (qty > currentStock) {
            alert(`Insufficient Stock! Current: ${currentStock}, Requested: ${qty}`);
            setLoading(false);
            return;
        }

        // We can treat Price as 0 or Cost Price if we tracked it, but for usage mainly quantity matters.
        // Total is 0

        const payload = {
            ...transaction,
            Type: 'OUT',
            Total: '0'
        };

        if (config && config.service) {
            const res = await config.service.addTransaction(config.url, payload);
            if (res.success) {
                alert('Stock Issued Successfully');
                refreshData();
                setTransaction({ ...transaction, Quantity: '', SupplierOrPurpose: 'Kitchen' });
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
                <h2 className="page-title">Stock Out (Issue/Usage)</h2>
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
                            <label>Purpose / Issued To</label>
                            <select value={transaction.SupplierOrPurpose} onChange={e => setTransaction({ ...transaction, SupplierOrPurpose: e.target.value })}>
                                <option>Kitchen</option>
                                <option>Office</option>
                                <option>Wastage</option>
                                <option>Staff</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Quantity Used</label>
                            <input type="number" required min="1" value={transaction.Quantity} onChange={e => setTransaction({ ...transaction, Quantity: e.target.value })} />
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <button className="btn btn-danger" disabled={loading}>{loading ? 'Processing...' : 'Issue Stock'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StockOut;
