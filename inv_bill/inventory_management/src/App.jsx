import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import ItemManager from './components/ItemManager'
import StockIn from './components/StockIn'
import StockOut from './components/StockOut'
import Reports from './components/Reports'
import { GAS_API } from './services/api'

import Login from './components/Login';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [items, setItems] = useState([])
  const [transactions, setTransactions] = useState([])
  const [status, setStatus] = useState('Checking connection...')
  const [config, setConfig] = useState(null)

  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hardcoded Web App URL
  const HARDCODED_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyk3j0k605Q7A44P1KAb-e5Jc6g6E05K9gKi8D9wTfB8rwbD1XFv6A3tZJ_1K0oBw/exec";

  useEffect(() => {
    // Auto-connect on load if logged in
    if (isLoggedIn) {
      handleConnect(HARDCODED_WEB_APP_URL);
    }
  }, [isLoggedIn]);

  const handleConnect = async (url) => {
    setStatus('Connecting to Google Sheets...')
    setConfig({ url, service: GAS_API }) // Store URL and Service

    // Initial Load
    await loadAllData(url);
  }

  const loadAllData = async (urlToUse) => {
    const url = urlToUse || (config ? config.url : HARDCODED_WEB_APP_URL);
    if (!url) return;

    setStatus('Loading data...');
    const itemsRes = await GAS_API.getItems(url);
    if (itemsRes.success) {
      setItems(itemsRes.data);
    } else {
      console.error("Failed to load items:", itemsRes.error);
    }

    const transRes = await GAS_API.getTransactions(url);
    if (transRes.success) {
      setTransactions(transRes.data);
    } else {
      console.error("Failed to load transactions:", transRes.error);
    }
    setStatus(`Connected. Last updated: ${new Date().toLocaleTimeString()}`);
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard items={items} transactions={transactions} />
      case 'inventory': return <ItemManager items={items} refreshData={loadAllData} config={config} />
      case 'stock-in': return <StockIn items={items} refreshData={loadAllData} config={config} />
      case 'stock-out': return <StockOut items={items} refreshData={loadAllData} config={config} />
      case 'reports': return <Reports transactions={transactions} />
      default: return <Dashboard items={items} transactions={transactions} />
    }
  }

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onRefresh={loadAllData} />
      <div className="main-content">
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px', fontSize: '0.8rem', color: '#666' }}>
          <span style={{ marginRight: '15px' }}>{status}</span>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

export default App
