import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CompanyAnalytics = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!symbol) return;
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/analytics?ticker=${symbol}`);
        if (response.data.status === 'success') {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
      setLoading(false);
    };
    
    fetchAnalytics();
  }, [symbol]);

  if (loading || !data) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="company-analytics mt-4">
      <h4 className="mb-3 text-white" style={{ fontSize: '1.25rem', paddingLeft: '5px' }}>Company Analytics: {symbol.replace('.NS', '')}</h4>
      
      {data.livePricing && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div className="card-body d-flex justify-content-around align-items-center py-3">
                <div className="text-center">
                  <span className="d-block text-muted small text-uppercase">Today's Open</span>
                  <span className="font-weight-bold text-white" style={{ fontSize: '1.2rem' }}>₹{data.livePricing.todayOpen}</span>
                </div>
                <div className="text-center">
                  <span className="d-block text-muted small text-uppercase">Current Price</span>
                  <span className="font-weight-bold text-white" style={{ fontSize: '1.2rem' }}>₹{data.livePricing.currentPrice}</span>
                </div>
                <div className="text-center">
                  <span className="d-block text-muted small text-uppercase">Previous Close</span>
                  <span className="font-weight-bold text-white" style={{ fontSize: '1.2rem' }}>₹{data.livePricing.previousClose}</span>
                </div>
                <div className="text-center">
                  <span className="d-block text-muted small text-uppercase">Today's Change</span>
                  <span className={`font-weight-bold ${data.livePricing.dayChangeAmount >= 0 ? 'text-success' : 'text-danger'}`} style={{ fontSize: '1.2rem' }}>
                    {data.livePricing.dayChangeAmount >= 0 ? '+' : ''}₹{data.livePricing.dayChangeAmount} ({data.livePricing.dayChangeAmount >= 0 ? '+' : ''}{data.livePricing.dayChangePct}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="row">
        {/* Metrics Table */}
        <div className="col-md-3 mb-4">
          <div className="card h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div className="card-header border-bottom-0" style={{ backgroundColor: 'transparent' }}>
              <h5 className="card-title text-white mb-0" style={{ fontSize: '1rem' }}>Key Metrics</h5>
            </div>
            <div className="card-body p-0">
              <table className="table table-dark table-borderless table-striped mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.85rem' }}>
                <tbody>
                  <tr>
                    <td className="text-muted" style={{ paddingLeft: '1rem' }}>Market Cap</td>
                    <td className="text-right text-white font-weight-bold" style={{ paddingRight: '1rem' }}>{data.metrics.marketCap}</td>
                  </tr>
                  <tr>
                    <td className="text-muted" style={{ paddingLeft: '1rem' }}>P/E Ratio</td>
                    <td className="text-right text-white font-weight-bold" style={{ paddingRight: '1rem' }}>{data.metrics.peRatio}</td>
                  </tr>
                  <tr>
                    <td className="text-muted" style={{ paddingLeft: '1rem' }}>ROE</td>
                    <td className="text-right text-white font-weight-bold" style={{ paddingRight: '1rem' }}>{data.metrics.roe}</td>
                  </tr>
                  <tr>
                    <td className="text-muted" style={{ paddingLeft: '1rem' }}>Div Yield</td>
                    <td className="text-right text-white font-weight-bold" style={{ paddingRight: '1rem' }}>{data.metrics.dividendYield}</td>
                  </tr>
                  <tr>
                    <td className="text-muted" style={{ paddingLeft: '1rem' }}>Proj Margin</td>
                    <td className="text-right text-success font-weight-bold" style={{ paddingRight: '1rem' }}>{data.metrics.projectedProfitMargin}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Historical Trend */}
        <div className="col-md-3 mb-4">
          <div className="card h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div className="card-header border-bottom-0" style={{ backgroundColor: 'transparent' }}>
              <h5 className="card-title text-white mb-0" style={{ fontSize: '1rem' }}>5-Day History</h5>
            </div>
            <div className="card-body p-0">
              <table className="table table-dark table-borderless table-striped mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.85rem' }}>
                <thead>
                  <tr>
                    <th className="text-muted" style={{ paddingLeft: '1rem' }}>Date</th>
                    <th className="text-right text-muted" style={{ paddingRight: '1rem' }}>Close</th>
                  </tr>
                </thead>
                <tbody>
                  {data.historicalTrend && [...data.historicalTrend].reverse().map((day, idx) => (
                    <tr key={idx}>
                      <td className="text-white" style={{ paddingLeft: '1rem' }}>{day.date}</td>
                      <td className="text-right text-white font-weight-bold" style={{ paddingRight: '1rem' }}>₹{day.close}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bar Chart - Quarterly Earnings */}
        <div className="col-md-6 mb-4">
          <div className="card h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div className="card-header border-bottom-0" style={{ backgroundColor: 'transparent' }}>
              <h5 className="card-title text-white mb-0" style={{ fontSize: '1rem' }}>Quarterly Profit/Loss (Cr)</h5>
            </div>
            <div className="card-body pb-0 pl-0">
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={data.earnings} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1c2030', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} 
                    itemStyle={{ color: '#fff' }}
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="profit" fill="#00C49F" name="Profit" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar dataKey="loss" fill="#FF8042" name="Loss" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAnalytics;
