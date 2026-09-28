import React, { useState, useMemo } from 'react';

const Reports = ({ transactions }) => {
    const [reportType, setReportType] = useState('ALL'); // ALL, IN, OUT
    const [dateRange, setDateRange] = useState('ALL'); // ALL, TODAY, WEEK, MONTH
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTransactions = useMemo(() => {
        let data = [...transactions];

        // Filter Type
        if (reportType !== 'ALL') {
            data = data.filter(t => t.Type === reportType);
        }

        // Filter Date (Simple implementation)
        const today = new Date();
        if (dateRange === 'TODAY') {
            const todayStr = today.toISOString().split('T')[0];
            data = data.filter(t => t.Date === todayStr);
        } else if (dateRange === 'MONTH') {
            const currentMonth = today.getMonth() + 1;
            data = data.filter(t => {
                const tDate = new Date(t.Date);
                return (tDate.getMonth() + 1) === currentMonth;
            });
        }

        // Search
        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            data = data.filter(t =>
                t.ItemName.toLowerCase().includes(lower) ||
                (t.SupplierOrPurpose || '').toLowerCase().includes(lower)
            );
        }

        // Sort by Date Descending
        return data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    }, [transactions, reportType, dateRange, searchTerm]);

    return (
        <div>
            <div className="page-header">
                <h2 className="page-title">Reports & History</h2>
            </div>

            <div className="content-card">
                <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
                    <select value={reportType} onChange={e => setReportType(e.target.value)} style={{ width: 'auto' }}>
                        <option value="ALL">All Transactions</option>
                        <option value="IN">Inward (Purchase)</option>
                        <option value="OUT">Outward (Usage)</option>
                    </select>
                    <select value={dateRange} onChange={e => setDateRange(e.target.value)} style={{ width: 'auto' }}>
                        <option value="ALL">All Time</option>
                        <option value="TODAY">Today</option>
                        <option value="MONTH">This Month</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search Item or Supplier..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ flex: 1, minWidth: '200px' }}
                    />
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Supplier / Purpose</th>
                                <th>Price/Unit</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t, idx) => (
                                <tr key={idx}>
                                    <td>{t.Date}</td>
                                    <td>
                                        <span className={`status-badge ${t.Type === 'IN' ? 'status-active' : 'status-inactive'}`}>
                                            {t.Type === 'IN' ? 'PURCHASE' : 'ISSUE'}
                                        </span>
                                    </td>
                                    <td style={{ fontWeight: 500 }}>{t.ItemName}</td>
                                    <td>{t.Quantity}</td>
                                    <td>{t.SupplierOrPurpose}</td>
                                    <td>{t.Price ? '₹' + t.Price : '-'}</td>
                                    <td>{t.Total && t.Total !== '0' ? '₹' + t.Total : '-'}</td>
                                </tr>
                            ))}
                            {filteredTransactions.length === 0 && (
                                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No records found</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
