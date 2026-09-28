import React, { useState, useEffect } from 'react';

const MarketStatusBanner = () => {
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState('Checking...');
  const [statusColor, setStatusColor] = useState('text-muted');
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const timeInMinutes = hour * 60 + min;

      let targetTime = new Date(now);
      let targetType = 'Open';

      if (day === 0 || day === 6) {
        targetTime.setDate(now.getDate() + (day === 0 ? 1 : 2));
        targetTime.setHours(9, 15, 0, 0);
        setStatus('MARKET CLOSED (WEEKEND)');
        setStatusColor('text-danger');
      } else {
        if (timeInMinutes < 555) {
          // Before 9:15 AM
          targetTime.setHours(9, 15, 0, 0);
          setStatus('MARKET CLOSED');
          setStatusColor('text-danger');
        } else if (timeInMinutes >= 555 && timeInMinutes < 930) {
          // 9:15 AM to 3:30 PM
          targetTime.setHours(15, 30, 0, 0);
          setStatus('MARKET OPEN');
          setStatusColor('text-success');
          targetType = 'Close';
        } else {
          // After 3:30 PM
          if (day === 5) {
            targetTime.setDate(now.getDate() + 3);
          } else {
            targetTime.setDate(now.getDate() + 1);
          }
          targetTime.setHours(9, 15, 0, 0);
          setStatus('MARKET CLOSED');
          setStatusColor('text-danger');
        }
      }

      const diffMs = targetTime - now;
      if (diffMs > 0) {
        const h = Math.floor(diffMs / (1000 * 60 * 60));
        const m = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diffMs % (1000 * 60)) / 1000);
        
        let cdStr = `${targetType}s in `;
        if (h > 0) cdStr += `${h}h `;
        if (m > 0 || h > 0) cdStr += `${m.toString().padStart(2, '0')}m `;
        cdStr += `${s.toString().padStart(2, '0')}s`;
        setCountdown(cdStr);
      } else {
        setCountdown('');
      }

    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex justify-content-between align-items-center p-2 mb-3 rounded shadow-sm" style={{ backgroundColor: 'rgba(15, 20, 25, 0.9)', border: '1px solid rgba(255,255,255,0.1)' }}>
      {/* Small Calendar / Time */}
      <div className="d-flex align-items-center text-nowrap mr-3">
        <i className="icon ion-md-calendar mr-2" style={{ fontSize: '1.2rem', color: '#007bff' }}></i>
        <div style={{ lineHeight: '1.1' }}>
          <small className="d-block text-white" style={{ fontSize: '0.7rem', opacity: 0.9 }}>
            {time.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          </small>
          <span className="font-weight-bold text-white" style={{ fontSize: '0.9rem' }}>
            {time.toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Static Market Hours */}
      <div className="d-none d-md-flex mx-3 align-items-center px-3 py-1 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <div className="text-white mr-3">
          <small className="text-muted d-block" style={{ fontSize: '0.65rem' }}>OPENING TIME</small>
          <span className="font-weight-bold" style={{ fontSize: '0.85rem' }}>09:15 AM</span>
        </div>
        <div className="text-white">
          <small className="text-muted d-block" style={{ fontSize: '0.65rem' }}>CLOSING TIME</small>
          <span className="font-weight-bold" style={{ fontSize: '0.85rem' }}>03:30 PM</span>
        </div>
      </div>

      {/* Spacer to push right content if needed */}
      <div className="flex-grow-1"></div>

      {/* Market Status & Countdown */}
      <div className="d-flex flex-column align-items-end text-nowrap pl-3">
        <div className="d-flex align-items-center px-2 py-1 rounded mb-1" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <div className={`spinner-grow spinner-grow-sm mr-2 ${statusColor}`} role="status" style={{ width: '0.6rem', height: '0.6rem' }}></div>
          <span className={`font-weight-bold ${statusColor}`} style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>{status}</span>
        </div>
        <span className="text-warning font-weight-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
          <i className="icon ion-md-time mr-1"></i> {countdown}
        </span>
      </div>
    </div>
  );
};

export default MarketStatusBanner;
