import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { House, ShoppingCart, List, Gear, SignOut, ChartBar, CaretLeft, Sun, Moon, WifiSlash, CircleNotch } from 'phosphor-react';
import './index.css';

import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';
import Menu from './pages/Menu';
import Settings from './pages/Settings';
import Reports from './pages/Reports';

const SidebarIcon = ({ to, icon: Icon, label, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`sidebar-icon ${isActive ? 'active' : ''}`}
      title={collapsed ? label : ''}
      style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
    >
      <Icon size={20} weight={isActive ? "bold" : "regular"} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

import Login from './pages/Login';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('velmess_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('resize', handleResize);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial check/load
    setTimeout(() => setAppLoading(false), 800);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Check for saved user on initial load
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('velmess_user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem('velmess_user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem('velmess_user');
      setUser(null);
    }
  };

  // 1. Initial Loader
  if (appLoading) {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-body)', color: 'var(--text-main)' }}>
        <CircleNotch size={48} className="spin-anim" weight="bold" style={{ color: 'var(--primary)', marginBottom: '16px' }} />
        <h2 style={{ fontSize: '1.2rem', fontWeight: '500' }}>VelMess Loading...</h2>
      </div>
    );
  }

  // 2. Offline Screen
  if (!isOnline) {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-body)', color: 'var(--text-main)', textAlign: 'center', padding: '20px' }}>
        <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--card-shadow)', maxWidth: '400px' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: '50%', display: 'inline-flex', marginBottom: '24px' }}>
            <WifiSlash size={48} color="#ef4444" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '12px' }}>No Internet Connection</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
            It seems you are offline. Please check your network connection to continue using VelMess.
          </p>
          <button onClick={() => window.location.reload()} className="modern-btn" style={{ justifyContent: 'center' }}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="layout-container">
        {/* Left Sidebar */}
        <aside
          className="sidebar no-print"
          style={{
            width: collapsed ? '80px' : '260px',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: '24px 12px',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >

          {/* Logo Area (Toggle) */}
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: collapsed ? '0' : '0 4px', height: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: collapsed ? '100%' : 'auto', justifyContent: collapsed ? 'center' : 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316', fontWeight: 'bold', flexShrink: 0, transition: 'all 0.3s' }}>
                V
              </div>
              <div style={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : 'auto',
                overflow: 'hidden',
                transition: 'opacity 0.2s, width 0.3s'
              }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f97316' }}>Vel Mess</span>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#9ca3af',
                padding: '4px',
                display: collapsed ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }}
            >
              <CaretLeft size={20} weight="bold" />
            </button>
          </div>

          {/* Menu Items */}
          <div style={{
            opacity: collapsed ? 0 : 1,
            height: collapsed ? 0 : 'auto',
            marginBottom: collapsed ? 0 : '8px',
            transition: 'opacity 0.2s, height 0.3s, margin 0.3s',
            overflow: 'hidden'
          }} className="sidebar-section-title">
            Marketing
          </div>

          <SidebarIcon to="/" icon={House} label="Dashboard" collapsed={collapsed} />
          <SidebarIcon to="/billing" icon={ShoppingCart} label="Billing / POS" collapsed={collapsed} />
          <SidebarIcon to="/menu" icon={List} label="Menu Items" collapsed={collapsed} />

          <div style={{
            opacity: collapsed ? 0 : 1,
            height: collapsed ? 0 : 'auto',
            marginBottom: collapsed ? 0 : '8px',
            marginTop: collapsed ? '16px' : '24px',
            transition: 'opacity 0.2s, height 0.3s, margin 0.3s',
            overflow: 'hidden'
          }} className="sidebar-section-title">
            System
          </div>

          <SidebarIcon to="/reports" icon={ChartBar} label="Reports" collapsed={collapsed} />


          {/* Footer */}
          <div style={{ marginTop: 'auto' }}>

            <button
              className="sidebar-icon"
              onClick={() => {
                const newMode = !darkMode;
                setDarkMode(newMode);
                localStorage.setItem('velmess_theme', newMode ? 'dark' : 'light');
              }}
              style={{
                background: 'transparent',
                border: 'none',
                width: '100%',
                justifyContent: collapsed ? 'center' : 'flex-start',
                cursor: 'pointer'
              }}
              title={collapsed ? (darkMode ? "Switch to Light Mode" : "Switch to Dark Mode") : ""}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
            </button>

            <button
              className="sidebar-icon"
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: 'none',
                width: '100%',
                justifyContent: collapsed ? 'center' : 'flex-start'
              }}
              title={collapsed ? "Logout" : ""}
            >
              <SignOut size={20} />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>

          {/* Expander for Collapsed State */}
          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              style={{
                position: 'absolute',
                top: '28px',
                left: '60px',
                background: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#9ca3af',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                zIndex: 10
              }}
            >
              <CaretLeft size={12} weight="bold" style={{ transform: 'rotate(180deg)' }} />
            </button>
          )}
        </aside>

        {/* Main Content Render Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
