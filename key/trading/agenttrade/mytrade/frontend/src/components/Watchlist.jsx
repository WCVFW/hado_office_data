import React, { useState } from 'react';
import axios from 'axios';
import './Watchlist.css';

const Watchlist = ({ trades, setTrades, selectedTrade, setSelectedTrade }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      setIsSearching(true);
      setError('');
      try {
        const response = await axios.get(`http://localhost:5000/api/search?q=${searchQuery.trim()}`);
        if (response.data.status === 'success') {
          const newTrade = response.data.data;
          
          // Check if it already exists in the list
          const exists = trades.find(t => t.Ticker === newTrade.Ticker);
          if (!exists) {
            setTrades([newTrade, ...trades]);
          }
          setSelectedTrade(newTrade);
          setSearchQuery('');
        } else {
          setError(response.data.message || 'Not found');
        }
      } catch (err) {
        setError('Failed to fetch stock');
      }
      setIsSearching(false);
    }
  };

  return (
    <div className="market-pairs">
      <div className="input-group mb-2 flex-column">
        <input 
          type="text" 
          className="form-control w-100" 
          placeholder={isSearching ? "Analyzing..." : "Search Company A-Z (Press Enter)"} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
          onKeyDown={handleSearch}
          disabled={isSearching}
        />
        {error && <small className="text-danger mt-1">{error}</small>}
      </div>
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <a className="nav-link active">Watchlist</a>
        </li>
      </ul>
      <div className="tab-content d-none d-lg-block watchlist-container">
        <div className="tab-pane fade show active d-block">
          <table className="table table-hover table-borderless mb-0 watchlist-table">
            <tbody>
              {trades.map((trade, idx) => {
                const isPositive = trade.Change_Val >= 0;
                const changeColor = isPositive ? 'text-success' : 'text-danger';
                const isSelected = selectedTrade.Ticker === trade.Ticker;

                return (
                  <tr
                    key={idx}
                    onClick={() => setSelectedTrade(trade)}
                    className={isSelected ? 'table-active' : ''}
                    style={{ cursor: 'pointer', borderBottom: '1px solid rgba(128, 128, 128, 0.1)' }}
                  >
                    {/* Left Column: Ticker and Exchange */}
                    <td className="align-middle py-2">
                      <div className="d-flex align-items-center">
                        <span className="font-weight-bold mr-2" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                          {trade.Ticker.replace('.NS', '')}
                        </span>
                        <span className="text-muted" style={{ fontSize: '0.5rem', marginLeft: '4px' }}>
                          NSE
                        </span>
                      </div>
                    </td>

                    {/* Right Column: Price and Change */}
                    <td className="align-middle text-right py-2">
                      <div className="d-flex flex-column align-items-end justify-content-center">
                        <div className={`font-weight-bold ${changeColor} d-flex align-items-center price-text`}>
                          {trade.Price.toFixed(2)}
                          <i className={isPositive ? 'icon ion-md-arrow-dropup ml-1 price-icon' : 'icon ion-md-arrow-dropdown ml-1 price-icon'}></i>
                        </div>
                        <div className="text-muted text-right mt-0 change-text">
                          {isPositive ? '+' : ''}{trade.Change_Val ? trade.Change_Val.toFixed(2) : '0.00'} ({isPositive ? '+' : ''}{trade.Change_Pct ? trade.Change_Pct.toFixed(2) : '0.00'}%)
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
