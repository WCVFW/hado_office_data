import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarketStatusBanner from './MarketStatusBanner';

const ScreenerDashboard = ({ onTradeSelect }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [lastScanned, setLastScanned] = useState(null);

  const fetchLiveScan = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/scan`);
      if (res.data.status === 'success') {
        setStocks(res.data.data);
        setLastScanned(`${res.data.last_updated_mins_ago} minutes ago`);
        setLoading(false);
      } else if (res.data.status === 'pending') {
        setLoading(true);
        // It's still warming up, we'll try again shortly via the interval
      }
    } catch (e) {
      console.error("Auto Fetch Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchLiveScan();
    // Auto refresh every 15 seconds to check for new cache
    const interval = setInterval(fetchLiveScan, 15000);
    return () => clearInterval(interval);
  }, []);

  // Helper to extract clean action string without emojis for CSS class
  const getCleanAction = (actionStr) => {
    if (!actionStr) return '';
    return actionStr.replace(/[^\w\s]/gi, '').trim().toUpperCase();
  };

  const getBadgeClass = (action) => {
    const cleanAction = getCleanAction(action);
    if (cleanAction === 'STRONG BUY') return 'badge badge-success px-2 py-1';
    if (cleanAction === 'BUY') return 'badge badge-primary px-2 py-1';
    if (cleanAction === 'STRONG SELL') return 'badge badge-danger px-2 py-1';
    if (cleanAction === 'SELL') return 'badge badge-warning px-2 py-1';
    return 'badge badge-secondary px-2 py-1';
  };

  const filteredStocks = stocks.filter(stock => {
    if (filter === 'all') return true;
    const cleanAction = getCleanAction(stock.Action);
    return cleanAction.includes(filter);
  });

  return (
    <div className="container-fluid mt-4">
      <MarketStatusBanner />
      
      <div className="alert alert-info d-flex justify-content-between align-items-center p-3 mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)', border: '1px solid rgba(0, 123, 255, 0.2)', color: '#66b0ff' }}>
        <div>
          <i className="icon ion-md-information-circle mr-2" style={{ fontSize: '1.2rem' }}></i>
          <span style={{ fontSize: '0.9rem' }}>
            <strong>Live Automated ML Scanner:</strong> Continuously analyzes 60-day Intraday data for the Top 100 Most Liquid Companies (Nifty 100) in the background to find ONLY the strongest high-probability setups.
          </span>
        </div>
        <div>
          {loading ? (
             <span className="badge badge-warning p-2"><i className="icon ion-md-sync mr-1"></i> Warming Up...</span>
          ) : (
             <span className="badge badge-success p-2"><i className="icon ion-md-checkmark-circle mr-1"></i> Live & Auto-Updating</span>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="text-white mb-0">Real-Time Market Scanner</h2>
          {lastScanned && <small className="text-muted">Last updated: {lastScanned}</small>}
        </div>
        
        <div className="btn-group" role="group">
          <button type="button" className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setFilter('all')}>All</button>
          <button type="button" className={`btn btn-sm ${filter === 'STRONG BUY' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setFilter('STRONG BUY')}>Strong Buys</button>
          <button type="button" className={`btn btn-sm ${filter === 'BUY' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setFilter('BUY')}>Buys</button>
          <button type="button" className={`btn btn-sm ${filter === 'SELL' ? 'btn-warning' : 'btn-outline-warning'}`} onClick={() => setFilter('SELL')}>Sells</button>
          <button type="button" className={`btn btn-sm ${filter === 'STRONG SELL' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setFilter('STRONG SELL')}>Strong Sells</button>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="card-body p-0">
          {loading ? (
             <div className="p-5 text-center text-white">
               <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status"></div>
               <h4 className="mt-4">Warming Up Background AI Scanner...</h4>
               <p className="text-muted">The system is currently running its first massive calculation in the background. Results will automatically appear here within 1-2 minutes.</p>
             </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-dark table-hover table-borderless mb-0">
                <thead style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <tr>
                    <th>Company</th>
                    <th className="text-right">LTP (₹)</th>
                    <th className="text-right">Change</th>
                    <th className="text-right">Target (₹)</th>
                    <th className="text-right">Stop Loss (₹)</th>
                    <th className="text-right">Capital Needed (for ₹2k)</th>
                    <th className="text-center">Recommendation</th>
                    <th className="text-right">AI Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStocks.length > 0 ? filteredStocks.map(stock => (
                    <tr 
                      key={stock.Ticker} 
                      onClick={() => onTradeSelect({ Ticker: stock.Ticker, Action: stock.Action, Price: stock.Price, Target: stock.Target, Stop: stock.Stop, 'Conf %': stock['Conf %'] })}
                      style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                      className="hover-bg-light"
                    >
                      <td className="font-weight-bold">{stock.Ticker.replace('.NS', '')}</td>
                      <td className="text-right font-weight-bold">₹{stock.Price}</td>
                      <td className={`text-right ${stock.Change_Pct > 0 ? 'text-success' : stock.Change_Pct < 0 ? 'text-danger' : ''}`}>
                        {stock.Change_Val > 0 ? '+' : ''}{stock.Change_Val} ({stock.Change_Pct}%)
                      </td>
                      <td className="text-right text-success font-weight-bold">₹{stock.Target}</td>
                      <td className="text-right text-danger font-weight-bold">₹{stock.Stop}</td>
                      <td className="text-right text-info">₹{stock['Capital (for ₹2K)']}</td>
                      <td className="text-center"><span className={getBadgeClass(stock.Action)}>{stock.Action}</span></td>
                      <td className="text-right">
                        <div className="progress" style={{ height: '8px', marginTop: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                          <div className={`progress-bar ${stock['Conf %'] > 70 ? 'bg-success' : stock['Conf %'] < 40 ? 'bg-danger' : 'bg-warning'}`} role="progressbar" style={{ width: `${stock['Conf %']}%` }}></div>
                        </div>
                        <small className="text-muted">{stock['Conf %']}%</small>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="8" className="text-center py-5 text-muted">
                        {stocks.length === 0 ? "Waiting for new setups from background scanner..." : "No stocks match this filter."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenerDashboard;

