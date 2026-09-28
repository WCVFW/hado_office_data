import yfinance as yf
import pandas as pd

# A list of major worldwide technology and high-volume stocks for analysis
WATCHLIST = [
    "AAPL", "MSFT", "NVDA", "TSLA", "META", "AMZN", "GOOGL", "AMD", 
    "RELIANCE.NS", "TCS.NS" # Added a couple of major Indian stocks as well
]

def get_market_data():
    """
    Fetches the 1-day data for the watchlist and identifies top gainers and losers.
    Returns a dictionary with structured market data.
    """
    print("Fetching real-time market data from Yahoo Finance...")
    data = []
    
    for ticker_symbol in WATCHLIST:
        try:
            ticker = yf.Ticker(ticker_symbol)
            # Fetch 2 days of daily data to calculate percentage change
            hist = ticker.history(period="2d")
            
            if len(hist) >= 2:
                prev_close = hist['Close'].iloc[0]
                current_price = hist['Close'].iloc[1]
                high = hist['High'].iloc[1]
                low = hist['Low'].iloc[1]
                volume = hist['Volume'].iloc[1]
                
                pct_change = ((current_price - prev_close) / prev_close) * 100
                
                data.append({
                    "Ticker": ticker_symbol,
                    "Current Price": round(current_price, 2),
                    "High": round(high, 2),
                    "Low": round(low, 2),
                    "Volume": int(volume),
                    "Change %": round(pct_change, 2)
                })
        except Exception as e:
            print(f"Failed to fetch data for {ticker_symbol}: {e}")
            
    df = pd.DataFrame(data)
    
    if df.empty:
        return None
        
    # Sort by percentage change
    df_sorted = df.sort_values(by="Change %", ascending=False)
    
    top_gainers = df_sorted.head(3).to_dict('records')
    top_losers = df_sorted.tail(3).to_dict('records')
    
    return {
        "top_gainers": top_gainers,
        "top_losers": top_losers,
        "all_data": df_sorted.to_dict('records')
    }

def get_historical_data(ticker_symbol, period="1mo", interval="1d"):
    """
    Fetches historical data for technical analysis.
    """
    try:
        ticker = yf.Ticker(ticker_symbol)
        hist = ticker.history(period=period, interval=interval)
        return hist
    except Exception as e:
        print(f"Error fetching historical data for {ticker_symbol}: {e}")
        return None
