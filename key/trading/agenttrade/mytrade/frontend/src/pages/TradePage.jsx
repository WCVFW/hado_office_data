import React, { useEffect } from 'react';
import Watchlist from '../components/Watchlist';
import CompanyAnalytics from '../components/CompanyAnalytics';
import MarketStatusBanner from '../components/MarketStatusBanner';
const ChartComponent = ({ symbol }) => {
  const containerId = `tv_chart_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    const isDark = document.body.id === 'dark';

    if (window.TradingView) {
      new window.TradingView.widget({
        "width": "100%",
        "height": 550,
        "symbol": "BSE:" + symbol.replace('.NS', ''),
        "interval": "D",
        "timezone": "Asia/Kolkata",
        "theme": isDark ? "Dark" : "Light",
        "style": "1",
        "isTransparent": true,
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": false,
        "show_popup_button": false,
        "container_id": containerId
      });
    }
  }, [symbol, containerId]);

  return <div id={containerId} style={{ width: '100%', height: '550px' }} />;
};

const TradePage = ({ trades, setTrades, selectedTrade, setSelectedTrade }) => {
  if (!trades || trades.length === 0 || !selectedTrade) return null;

  return (
    <div className="container-fluid mtb15 no-fluid">
      <div className="row sm-gutters">
        <div className="col-md-3">
          <Watchlist 
            trades={trades} 
            setTrades={setTrades}
            selectedTrade={selectedTrade} 
            setSelectedTrade={setSelectedTrade} 
          />
        </div>
        <div className="col-md-9">
          <MarketStatusBanner />
          <div className="main-chart mb15">
            <div className="tradingview-widget-container">
              {selectedTrade && (
                <>
                  <ChartComponent
                    key={`${selectedTrade.Ticker}`}
                    symbol={selectedTrade.Ticker}
                  />
                  <CompanyAnalytics symbol={selectedTrade.Ticker} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
