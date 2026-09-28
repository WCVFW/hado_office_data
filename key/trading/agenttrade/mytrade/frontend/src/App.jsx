import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import TradePage from './pages/TradePage';
import ScreenerDashboard from './components/ScreenerDashboard';

function AppContent() {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [projectedEarnings, setProjectedEarnings] = useState(null);
  const navigate = useNavigate();

  // Auto-load data on website load
  useEffect(() => {
    fetchScan();
    
    // Fetch projected earnings prediction from MySQL backend
    const fetchPrediction = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/predict_earnings');
        if (response.data.status === 'success') {
          setProjectedEarnings(response.data.data);
        }
      } catch (e) {
        console.error("Prediction error:", e);
      }
    };
    fetchPrediction();
  }, []);

  useEffect(() => {
    if (selectedTrade) {
      setChartData(selectedTrade.History || []);
    }
  }, [selectedTrade]);

  const fetchScan = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/api/scan');
      if (response.data.status === 'success') {
        const results = response.data.data;
        setTrades(results);
        if (results.length > 0) {
          setSelectedTrade(results[0]);
        }
      } else {
        setError(response.data.message || 'Error occurred during scan.');
      }
    } catch (err) {
      setError('Could not connect to the Python API.');
    }
    setLoading(false);
  };

  return (
    <>
      <header className="dark-bb">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src="/exchange/img/logo-light.svg" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="icon ion-md-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="headerMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Market
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Markets</a>
                  <a className="dropdown-item" href="#">Market Data</a>
                  <Link className="dropdown-item" to="/screener">Market Screener</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trade">Trade Station</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/screener">Market Screener</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item header-custom-icon">
                <a className="nav-link" href="#" id="clickFullscreen">
                  <i className="icon ion-md-expand"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={
          <div className="landing-hero">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>A trusted and secure trading platform.</h2>
                  <p>AgentTrade is the most advanced UI kit for making the trading platform.
                    This platform helps you instantly scan companies to identify high-probability trades.</p>
                  <button onClick={() => navigate('/trade')} className="btn btn-primary mr-3">Trade Now</button>
                  <button onClick={() => navigate('/screener')} className="btn btn-outline-light">Live Screener</button>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
                <div className="offset-md-1 col-md-5">
                  <img src="/exchange/img/landing.png" alt="trading" />
                </div>
              </div>
            </div>
          </div>
        } />
        
        <Route path="/screener" element={
          <ScreenerDashboard 
            onTradeSelect={(trade) => {
              setSelectedTrade(trade);
              navigate('/trade');
            }} 
          />
        } />
        
        <Route path="/trade" element={
          <div className="trade-page-wrapper">
            {projectedEarnings && (
              <div className="container-fluid mt-2 px-4">
                <div className="alert alert-success d-flex align-items-center justify-content-between p-2 mb-0" style={{ backgroundColor: 'rgba(0, 196, 159, 0.1)', border: '1px solid #00C49F', color: '#00C49F' }}>
                  <div className="d-flex align-items-center">
                    <i className="icon ion-md-trending-up mr-2" style={{ fontSize: '1.2rem' }}></i>
                    <span className="font-weight-bold" style={{ fontSize: '0.95rem' }}>Today's Projected Earnings: ₹{projectedEarnings.projected_earnings.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="d-block" style={{ fontSize: '0.8rem', opacity: 0.8 }}>Based on ML analysis of {projectedEarnings.trades_analyzed} historical trades (Win Rate: {projectedEarnings.historical_win_rate})</span>
                  </div>
                </div>
              </div>
            )}
            <TradePage 
              trades={trades} 
              setTrades={setTrades}
              selectedTrade={selectedTrade} 
              setSelectedTrade={setSelectedTrade} 
            />
          </div>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
