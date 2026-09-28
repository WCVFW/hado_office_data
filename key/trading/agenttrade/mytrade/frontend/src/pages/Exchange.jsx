import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';
import { Search, Settings, X, Plus, ChevronDown, Check, Activity, RefreshCw } from 'lucide-react';

const ChartComponent = ({ data, action, currentPrice, target, stop }) => {
  const chartContainerRef = useRef();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: 'solid', color: '#ffffff' },
        textColor: 'rgb(37, 48, 64)',
        fontSize: 12,
        fontFamily: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
      },
      grid: {
        vertLines: { color: 'rgba(0, 0, 0, 0.05)' },
        horzLines: { color: 'rgba(0, 0, 0, 0.05)' },
      },
      crosshair: {
        mode: 1,
        vertLine: { color: '#9CA3AF', labelBackgroundColor: '#374151', style: 2 },
        horzLine: { color: '#9CA3AF', labelBackgroundColor: '#374151', style: 2 }
      },
      rightPriceScale: {
        borderColor: '#E5E7EB',
        autoScale: true,
      },
      timeScale: {
        borderColor: '#E5E7EB',
        timeVisible: true,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#10B981', // Emerald 500
      downColor: '#EF4444', // Red 500
      borderVisible: false,
      wickUpColor: '#10B981',
      wickDownColor: '#EF4444',
    });

    const chartData = data.map(candle => {
      const timestamp = new Date(candle.Date).getTime() / 1000;
      return {
        time: timestamp,
        open: candle.Open,
        high: candle.High,
        low: candle.Low,
        close: candle.Close,
      };
    });

    candlestickSeries.setData(chartData);

    // Target Line
    if (target) {
      candlestickSeries.createPriceLine({
        price: target,
        color: action.includes('BUY') ? '#10B981' : '#EF4444',
        lineWidth: 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: 'TARGET',
      });
    }

    // Stop Loss Line
    if (stop) {
      candlestickSeries.createPriceLine({
        price: stop,
        color: action.includes('BUY') ? '#EF4444' : '#10B981',
        lineWidth: 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: 'STOP',
      });
    }

    // Entry Line
    if (currentPrice) {
      candlestickSeries.createPriceLine({
        price: currentPrice,
        color: '#3B82F6', // Blue
        lineWidth: 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: 'ENTRY',
      });
    }

    chart.timeScale().fitContent();
    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data, action, currentPrice, target, stop]);

  return <div ref={chartContainerRef} className="absolute inset-0 w-full h-full" />;
};

function App() {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [marketStatus, setMarketStatus] = useState('Checking...');
  const [chartData, setChartData] = useState([]);
  const [timeframe, setTimeframe] = useState('1D');
  const [loadingHistory, setLoadingHistory] = useState(false);
  
  // Dynamic Timeframe Stats
  const [tfStats, setTfStats] = useState({
    changeVal: 0,
    changePct: 0,
    startStr: '',
    endStr: '',
    isProfit: true
  });

  // Calculate stats whenever chartData changes
  useEffect(() => {
    if (chartData.length > 0) {
      const first = chartData[0];
      const last = chartData[chartData.length - 1];
      
      const startPrice = first.open;
      const endPrice = last.close;
      const changeVal = endPrice - startPrice;
      const changePct = (changeVal / startPrice) * 100;
      
      const formatTime = (timestamp) => {
        const d = new Date(timestamp * 1000);
        // For 1D or 1W, show Time. For longer periods, show Date.
        if (timeframe === '1D' || timeframe === '1W') {
          return d.toLocaleString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        } else {
          return d.toLocaleString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
        }
      };

      setTfStats({
        changeVal,
        changePct,
        startStr: formatTime(first.time),
        endStr: formatTime(last.time),
        isProfit: changeVal >= 0
      });
    }
  }, [chartData, timeframe]);

  useEffect(() => {
    if (selectedTrade) {
      setChartData(selectedTrade.History);
      setTimeframe('1D');
    }
  }, [selectedTrade]);

  const fetchHistory = async (tf, period, interval) => {
    if (!selectedTrade) return;
    setLoadingHistory(true);
    setTimeframe(tf);
    try {
      const response = await axios.get(`http://localhost:5000/api/history?ticker=${selectedTrade.Ticker}&period=${period}&interval=${interval}`);
      if (response.data.status === 'success') {
        setChartData(response.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch history:', err);
    }
    setLoadingHistory(false);
  };

  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, weekday: 'short' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      let hour = 0, minute = 0, weekday = '';
      parts.forEach(p => {
        if (p.type === 'hour') hour = parseInt(p.value);
        if (p.type === 'minute') minute = parseInt(p.value);
        if (p.type === 'weekday') weekday = p.value;
      });

      const isWeekend = weekday === 'Sat' || weekday === 'Sun';
      const isBeforeOpen = hour < 9 || (hour === 9 && minute < 15);
      const isAfterClose = hour >= 16 || (hour === 15 && minute >= 30);
      
      if (isWeekend || isBeforeOpen || isAfterClose) {
        setMarketStatus('MARKET CLOSED');
      } else {
        setMarketStatus('MARKET LIVE');
      }
    };
    
    checkMarketStatus();
    const interval = setInterval(checkMarketStatus, 60000);
    return () => clearInterval(interval);
  }, []);

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
      setError('Could not connect to the Python API. Ensure api.py is running on port 5000.');
    }
    setLoading(false);
  };

  const hasTrades = trades.length > 0;

  return (
    <div className="h-screen w-full bg-white text-[rgb(0,0,0)] flex flex-col font-sans overflow-y-auto lg:overflow-hidden">
      
      {/* Top Navbar */}
      <nav className="flex-none bg-white border-b border-gray-200 h-14 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 font-black text-xl tracking-tighter">
              A<span className="text-blue-500">T</span>
            </div>
            <h1 className="text-[15px] font-bold tracking-tight text-gray-800 hidden md:block">
              AgentTrade
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[13px] font-medium text-[rgb(37,48,64)]">
            <span className="hover:text-blue-600 cursor-pointer text-blue-600 border-b-2 border-blue-600 pb-[18px] pt-[18px]">Explore</span>
            <span className="hover:text-blue-600 cursor-pointer">Investments</span>
            <span className="hover:text-blue-600 cursor-pointer">Markets</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center w-80 bg-white border border-gray-300 rounded-md px-3 py-1.5 shadow-sm">
            <Search size={16} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search stocks and mutual funds" className="w-full text-[13px] outline-none placeholder:text-gray-400" />
          </div>
          
          {hasTrades && (
            <button 
              onClick={fetchScan}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              {loading ? "Scanning..." : "Re-scan"}
            </button>
          )}
          
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[13px] font-bold cursor-pointer">
            P
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full flex flex-col relative bg-white lg:overflow-hidden">
        
        {/* Empty State / Loading */}
        {!hasTrades && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
             {loading ? (
                <div className="text-center">
                  <RefreshCw size={40} className="animate-spin text-blue-600 mx-auto mb-4" />
                  <h3 className="text-[15px] font-medium text-gray-800">Analyzing Markets...</h3>
                  <p className="text-[13px] text-gray-500 mt-1">Running institutional models on NIFTY 50</p>
                </div>
             ) : (
                <div className="text-center max-w-lg px-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Activity size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">Intraday Breakout Scanner</h2>
                  <p className="text-[13px] text-gray-600 mb-8 leading-relaxed">
                    Instantly scan NIFTY 50 companies to identify high-probability trades with exact entry, targets, and stop-loss using our ML engine.
                  </p>
                  <button 
                    onClick={fetchScan}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md text-[14px] font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    SCAN NIFTY 50 NOW
                  </button>
                  {error && <p className="text-red-500 text-[13px] mt-4">{error}</p>}
                </div>
             )}
          </div>
        )}

        {/* Dashboard Layout */}
        {hasTrades && (
          <div className="flex flex-col lg:flex-row w-full h-full lg:overflow-hidden">
            
            {/* Left Sidebar: Watchlist */}
            <div className="w-full lg:w-[320px] flex-none flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 bg-white h-[350px] lg:h-full order-2 lg:order-1">
              
              {/* Watchlist Header */}
              <div className="p-4 flex flex-col gap-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-medium text-gray-900">Watchlist</h3>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Settings size={16} className="cursor-pointer hover:text-gray-800" />
                    <X size={16} className="cursor-pointer hover:text-gray-800" />
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[13px] text-blue-600 border-b-2 border-blue-600 pb-2 w-max cursor-pointer">
                  <span>My Watchlist</span>
                </div>
              </div>
              
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50/50">
                <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-1.5">
                  <Search size={14} className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Search" className="w-full text-[13px] outline-none placeholder:text-gray-400 bg-transparent" />
                  <Settings size={14} className="text-gray-400 ml-2 cursor-pointer" />
                </div>
              </div>
              
              {/* Table Body */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col">
                  {trades.map((trade, idx) => {
                    const isSelected = selectedTrade?.Ticker === trade.Ticker;
                    const isPositive = trade.Change_Val >= 0;
                    const changeColor = isPositive ? 'text-[#00B386]' : 'text-[#EB5B3C]';
                    const iconColor = isPositive ? 'text-[#00B386]' : 'text-[#EB5B3C]';
                    
                    return (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedTrade(trade)}
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-100 transition-colors hover:bg-gray-50 ${isSelected ? 'bg-blue-50/40' : ''}`}
                      >
                        {/* Left Side: Name */}
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-medium text-[rgb(0,0,0)]">{trade.Ticker.replace('.NS', '')}</span>
                          <span className="text-[10.5px] font-medium text-[rgb(37,48,64)] opacity-70">NSE</span>
                        </div>
                        
                        {/* Right Side: Price & Change */}
                        <div className="flex flex-col items-end gap-0.5">
                          <span className={`text-[13px] font-medium ${changeColor}`}>
                            {trade.Price.toFixed(2)} {isPositive ? '▲' : '▼'}
                          </span>
                          {trade.Change_Pct !== undefined && (
                            <span className={`text-[10.5px] font-medium ${changeColor}`}>
                              {isPositive ? '+' : ''}{trade.Change_Val.toFixed(2)} ({isPositive ? '+' : ''}{trade.Change_Pct.toFixed(2)}%)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Main Area: Interactive Chart */}
            <div className="flex-1 flex flex-col bg-white relative min-h-[500px] lg:min-h-0 lg:h-full order-1 lg:order-2 lg:overflow-hidden">
              
              {selectedTrade ? (
                <>
                  {/* Top Action Bar (like TradingView embedded in Groww) */}
                  <div className="flex-none h-12 border-b border-gray-200 flex items-center justify-between px-4 text-[13px] text-[rgb(37,48,64)] font-medium">
                    <div className="flex items-center gap-4">
                      <span className="text-black font-medium">{selectedTrade.Ticker.replace('.NS', '')}</span>
                      <span className="text-gray-400">|</span>
                      <span>1h</span>
                      <span className="text-gray-400">|</span>
                      <span>NSE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="bg-[#00B386] hover:bg-[#009973] text-white px-4 py-1.5 rounded transition-colors text-[13px] font-medium flex items-center gap-2">
                        BUY
                      </button>
                      <button className="bg-[#EB5B3C] hover:bg-[#D44A2E] text-white px-4 py-1.5 rounded transition-colors text-[13px] font-medium flex items-center gap-2">
                        SELL
                      </button>
                    </div>
                  </div>

                  {/* Chart Header Info */}
                  <div className="flex-none p-6 pb-2">
                    <div className="flex items-end gap-3 mb-1">
                      <h2 className="text-[28px] font-medium text-[rgb(0,0,0)] tracking-tight">
                        ₹{selectedTrade.Price.toFixed(2)}
                      </h2>
                      {chartData.length > 0 && (
                        <div className="flex flex-col pb-1">
                          <span className={`text-[15px] font-medium ${tfStats.isProfit ? 'text-[#00B386]' : 'text-[#EB5B3C]'}`}>
                            {tfStats.isProfit ? '+' : ''}{tfStats.changeVal.toFixed(2)} ({tfStats.isProfit ? '+' : ''}{tfStats.changePct.toFixed(2)}%)
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Date Range & Timeframe info */}
                    {chartData.length > 0 && (
                      <div className="text-[10.5px] font-medium text-[rgb(37,48,64)] mb-2 uppercase tracking-wider">
                        {tfStats.isProfit ? 'Profit' : 'Loss'} for {timeframe === '1D' ? 'Today' : timeframe} ({tfStats.startStr} — {tfStats.endStr})
                      </div>
                    )}
                    
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-medium text-[rgb(37,48,64)] mb-0.5">AI SIGNAL</span>
                        <span className={`text-[13px] font-medium ${selectedTrade.Action.includes('BUY') ? 'text-[#00B386]' : 'text-[#EB5B3C]'}`}>
                          {selectedTrade.Action} ({selectedTrade['Conf %']}%)
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-medium text-[rgb(37,48,64)] mb-0.5">TARGET</span>
                        <span className="text-[13px] font-medium text-black">₹{selectedTrade.Target.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-medium text-[rgb(37,48,64)] mb-0.5">STOP LOSS</span>
                        <span className="text-[13px] font-medium text-black">₹{selectedTrade.Stop.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-medium text-[rgb(37,48,64)] mb-0.5">EST. CAPITAL (₹2K PROFIT)</span>
                        <span className="text-[13px] font-medium text-black">₹{selectedTrade.Capital_for_2K || selectedTrade["Capital (for ₹2K)"]}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeframe Selector */}
                  <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-100">
                    {[
                      { label: '1D', action: () => { setTimeframe('1D'); setChartData(selectedTrade.History); } },
                      { label: '1W', action: () => fetchHistory('1W', '5d', '15m') },
                      { label: '1M', action: () => fetchHistory('1M', '1mo', '1d') },
                      { label: '3M', action: () => fetchHistory('3M', '3mo', '1d') },
                      { label: '6M', action: () => fetchHistory('6M', '6mo', '1d') },
                      { label: '1Y', action: () => fetchHistory('1Y', '1y', '1d') },
                      { label: '5Y', action: () => fetchHistory('5Y', '5y', '1wk') },
                      { label: 'ALL', action: () => fetchHistory('ALL', 'max', '1mo') }
                    ].map((tf) => (
                      <button
                        key={tf.label}
                        onClick={tf.action}
                        disabled={loadingHistory && timeframe !== tf.label}
                        className={`text-[13px] font-medium transition-colors ${timeframe === tf.label ? 'text-blue-600' : 'text-[rgb(37,48,64)] hover:text-black'}`}
                      >
                        {tf.label}
                      </button>
                    ))}
                    {loadingHistory && <RefreshCw size={14} className="animate-spin text-gray-400 ml-2" />}
                  </div>
                  
                  {/* Chart Body */}
                  <div className="flex-1 relative w-full h-full p-2">
                    <ChartComponent 
                      key={`${selectedTrade.Ticker}-${timeframe}`}
                      data={chartData} 
                      action={timeframe === '1D' ? selectedTrade.Action : ''} // Only show lines on 1D timeframe
                      currentPrice={timeframe === '1D' ? selectedTrade.Price : null}
                      target={timeframe === '1D' ? selectedTrade.Target : null}
                      stop={timeframe === '1D' ? selectedTrade.Stop : null}
                    />
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-[rgb(37,48,64)] gap-3 bg-gray-50/50">
                  <Activity size={40} className="text-gray-300" />
                  <p className="text-[13px] font-medium">Select an instrument from the watchlist</p>
                </div>
              )}
            </div>
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
