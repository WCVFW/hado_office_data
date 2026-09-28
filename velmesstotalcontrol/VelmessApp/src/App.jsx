import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const { isLoading, showLoader, hideLoader } = useLoading();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let checkInterval;

    const checkDB = async () => {
      if (window.electronAPI && window.electronAPI.checkDBReady) {
        try {
          const status = await window.electronAPI.checkDBReady();
          if (status.ready) {
            setInitialLoading(false);
            clearInterval(checkInterval);
          } else if (status.error) {
            console.error("DB Error:", status.error);
            // Optionally set an error state here
            setInitialLoading(false);
            clearInterval(checkInterval);
          }
        } catch (err) {
          console.error("Check DB Failed", err);
          setInitialLoading(false);
          clearInterval(checkInterval);
        }
      } else {
        // Fallback for web dev
        setTimeout(() => setInitialLoading(false), 2000);
      }
    };

    checkDB();
    checkInterval = setInterval(checkDB, 1000);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {(initialLoading || isLoading) && <Loader isLoading={true} />}
      </AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/shop/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
