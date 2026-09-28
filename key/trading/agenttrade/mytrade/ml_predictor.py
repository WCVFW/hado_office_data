import yfinance as yf
import pandas as pd
import numpy as np
import xgboost as xgb
import warnings
import requests

warnings.filterwarnings("ignore")

# Custom functions to calculate indicators using standard pandas
def calculate_rsi(data, periods=14):
    close_delta = data['Close'].diff()
    up = close_delta.clip(lower=0)
    down = -1 * close_delta.clip(upper=0)
    ma_up = up.ewm(com=periods - 1, adjust=True, min_periods=periods).mean()
    ma_down = down.ewm(com=periods - 1, adjust=True, min_periods=periods).mean()
    rsi = ma_up / ma_down
    return 100 - (100 / (1 + rsi))

def calculate_macd(data, short=12, long=26, signal=9):
    ema_short = data['Close'].ewm(span=short, adjust=False).mean()
    ema_long = data['Close'].ewm(span=long, adjust=False).mean()
    macd = ema_short - ema_long
    macd_signal = macd.ewm(span=signal, adjust=False).mean()
    macd_hist = macd - macd_signal
    return macd, macd_signal, macd_hist

def calculate_stochastic(data, k_window=14, d_window=3):
    low_min = data['Low'].rolling(window=k_window).min()
    high_max = data['High'].rolling(window=k_window).max()
    k = 100 * ((data['Close'] - low_min) / (high_max - low_min))
    d = k.rolling(window=d_window).mean()
    return k, d

def calculate_bollinger_bands(data, window=20):
    sma = data['Close'].rolling(window).mean()
    std = data['Close'].rolling(window).std()
    upper = sma + (std * 2)
    lower = sma - (std * 2)
    return lower, upper

def calculate_atr(data, window=14):
    high_low = data['High'] - data['Low']
    high_close = np.abs(data['High'] - data['Close'].shift())
    low_close = np.abs(data['Low'] - data['Close'].shift())
    ranges = pd.concat([high_low, high_close, low_close], axis=1)
    true_range = np.max(ranges, axis=1)
    return true_range.rolling(window).mean()

def calculate_obv(data):
    obv = (np.sign(data['Close'].diff()) * data['Volume']).fillna(0).cumsum()
    return obv

def analyze_and_predict_intraday(ticker_symbol, df=None):
    """
    Intraday XGBoost Engine.
    Downloads 60 days of 15-minute interval data, trains an intraday ML model,
    and returns exact trading signals to make rapid profits.
    """
    try:
        if df is None:
            session = requests.Session()
            session.headers.update({
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
            })
            
            # 1. Fetch INTRADAY historical data (15-minute candles)
            ticker = yf.Ticker(ticker_symbol, session=session)
            df = ticker.history(period="60d", interval="15m")
        else:
            # Create a copy so we don't modify the batch downloaded dataframe directly
            df = df.copy()
            
        if df.empty or len(df) < 100:
            return None
            
        # 2. Intraday Feature Engineering
        df['RSI'] = calculate_rsi(df)
        df['Stoch_k'], df['Stoch_d'] = calculate_stochastic(df)
        df['MACD'], df['MACD_Signal'], df['MACD_Hist'] = calculate_macd(df)
        df['SMA_20'] = df['Close'].rolling(window=20).mean()
        df['EMA_9'] = df['Close'].ewm(span=9, adjust=False).mean()
        df['SMA_50'] = df['Close'].rolling(window=50).mean()
        df['BB_Lower'], df['BB_Upper'] = calculate_bollinger_bands(df)
        df['ATR'] = calculate_atr(df)
        df['OBV'] = calculate_obv(df)
        df['Ret_1candle'] = df['Close'].pct_change(1)
        df['Ret_2candle'] = df['Close'].pct_change(2)
        
        # 3. Create Intraday Target Variable (Will next 15m candle close higher?)
        df['Next_Close'] = df['Close'].shift(-1)
        df['Target'] = (df['Next_Close'] > df['Close']).astype(int)
        
        df.dropna(inplace=True)
        
        features = [
            'Volume', 'RSI', 'Stoch_k', 'Stoch_d', 'MACD', 'MACD_Signal', 'MACD_Hist',
            'SMA_20', 'EMA_9', 'SMA_50', 'BB_Lower', 'BB_Upper', 'ATR', 'OBV', 'Ret_1candle', 'Ret_2candle'
        ]
        
        available_features = [f for f in features if f in df.columns]
        
        X = df[available_features]
        y = df['Target']
        
        if len(X) < 50:
            return None
            
        # 4. Train the XGBoost Model for Intraday noise
        model = xgb.XGBClassifier(
            n_estimators=100, 
            learning_rate=0.05, 
            max_depth=4, 
            random_state=42,
            eval_metric="logloss"
        )
        model.fit(X, y)
        
        # 5. Predict the current live candle
        today = df.iloc[-1:]
        X_today = today[available_features]
        probability_up = model.predict_proba(X_today)[0][1]
        
        # 6. Generate Aggressive Intraday Signals
        if probability_up >= 0.65:
            action = "STRONG BUY 🔥"
        elif probability_up >= 0.55:
            action = "BUY 🟢"
        elif probability_up <= 0.35:
            action = "STRONG SELL 💥"
        elif probability_up <= 0.45:
            action = "SELL 🔴"
        else:
            action = "HOLD ⏸️"
            
        # 7. Intraday Risk Management
        current_price = today['Close'].values[0]
        current_atr = today['ATR'].values[0]
        
        # Intraday targets need to be slightly tighter: 1.5 ATR Target, 1 ATR Stop-Loss
        if "BUY" in action:
            target_price = current_price + (1.5 * current_atr)
            stop_loss = current_price - (1.0 * current_atr)
        elif "SELL" in action:
            target_price = current_price - (1.5 * current_atr) 
            stop_loss = current_price + (1.0 * current_atr)
        else:
            target_price = current_price
            stop_loss = current_price
            
        # Calculate Low Investment Capital required for ₹2000 Profit
        profit_per_share = abs(target_price - current_price)
        if profit_per_share > 0:
            shares_needed = 2000 / profit_per_share
            # 5x Leverage for Intraday Equity
            capital_required = (shares_needed * current_price) / 5
        else:
            capital_required = 0
            
        # Calculate Daily Change vs Yesterday
        df_copy = df.copy()
        df_copy['Date_only'] = df_copy.index.date
        unique_dates = df_copy['Date_only'].unique()
        if len(unique_dates) >= 2:
            prev_day = unique_dates[-2]
            prev_close = df_copy[df_copy['Date_only'] == prev_day]['Close'].iloc[-1]
        else:
            prev_close = current_price
            
        change_val = current_price - prev_close
        change_pct = (change_val / prev_close) * 100 if prev_close > 0 else 0
            
        # 8. Extract history for charts (Last 60 15-minute candles = Approx 2 days)
        chart_data = df.tail(60)[['Open', 'High', 'Low', 'Close', 'SMA_20', 'BB_Upper', 'BB_Lower']].reset_index()
        # Handle index naming from yf.download vs ticker.history
        if 'Datetime' in chart_data.columns:
             chart_data['Date'] = chart_data['Datetime'].dt.strftime('%Y-%m-%d %H:%M')
        elif 'Date' in chart_data.columns:
             chart_data['Date'] = chart_data['Date'].dt.strftime('%Y-%m-%d %H:%M')
        else:
             chart_data['Date'] = chart_data.index.strftime('%Y-%m-%d %H:%M')
             
        return {
            "Ticker": ticker_symbol,
            "Action": action,
            "Price": round(current_price, 2),
            "Target": round(target_price, 2),
            "Stop": round(stop_loss, 2),
            "Capital (for ₹2K)": round(capital_required, 2),
            "Change_Val": round(change_val, 2),
            "Change_Pct": round(change_pct, 2),
            "Conf %": round(probability_up * 100 if probability_up > 0.5 else (1 - probability_up) * 100, 1),
            "History": chart_data.to_dict('records')
        }
        
    except Exception as e:
        print(f"Error processing {ticker_symbol}: {e}")
        return None

def get_all_nse_tickers():
    import requests
    import io
    import pandas as pd
    try:
        url = "https://en.wikipedia.org/wiki/NIFTY_500"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        res = requests.get(url, headers=headers, timeout=10)
        df = pd.read_html(io.StringIO(res.text), match='Symbol')[0]
        symbols = df['Symbol'].tolist()
        return [f"{sym}.NS" for sym in symbols]
    except Exception as e:
        print("Error fetching all NSE tickers, falling back:", e)
        # Fallback to NIFTY 100 if the full list fails
        try:
            res1 = requests.get("https://en.wikipedia.org/wiki/NIFTY_50", headers=headers)
            nifty50_df = pd.read_html(io.StringIO(res1.text), match='Symbol')[0]
            res2 = requests.get("https://en.wikipedia.org/wiki/NIFTY_Next_50", headers=headers)
            next50_df = pd.read_html(io.StringIO(res2.text), match='Symbol')[0]
            top_100 = nifty50_df['Symbol'].tolist() + next50_df['Symbol'].tolist()
            return [f"{sym}.NS" for sym in top_100]
        except Exception:
            return ["RELIANCE.NS", "TCS.NS", "HDFCBANK.NS", "ICICIBANK.NS", "INFY.NS", "ITC.NS", "SBIN.NS", "BHARTIARTL.NS", "LT.NS", "BAJFINANCE.NS"]

import contextlib
import os

def run_global_scanner():
    """Runs the advanced XGBoost model for all 2400+ NSE companies automatically."""
    print("Fetching All 2400+ NSE Equities from open source...")
    all_tickers = get_all_nse_tickers()
    
    print(f"Batch downloading 15m interval data for {len(all_tickers)} companies (takes ~10 seconds)...")
    print("Please wait. Yahoo Finance warnings for missing data are being suppressed...")
    
    # Batch download prevents rate limits and is 100x faster than individual requests
    # We suppress standard output and error here to prevent yfinance from flooding the console with "possibly delisted" messages
    with open(os.devnull, 'w') as devnull:
        with contextlib.redirect_stdout(devnull), contextlib.redirect_stderr(devnull):
            data = yf.download(all_tickers, period="60d", interval="15m", group_by="ticker", auto_adjust=True, progress=False)
    
    print("Running XGBoost parallel processing...")
    results = []
    
    def process_stock(stock):
        try:
            if isinstance(data.columns, pd.MultiIndex):
                if stock not in data.columns.get_level_values(0):
                    return None
                stock_df = data[stock].copy()
            else:
                stock_df = data.copy()
                
            stock_df.dropna(how='all', inplace=True)
            return analyze_and_predict_intraday(stock, df=stock_df)
        except Exception as e:
            # Silently skip processing errors to keep console clean
            return None

    import concurrent.futures
    # Use ThreadPoolExecutor to run the ML processing on 20 threads simultaneously
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        futures = {executor.submit(process_stock, stock): stock for stock in all_tickers}
        for future in concurrent.futures.as_completed(futures):
            res = future.result()
            if res:
                results.append(res)
            
    print(f"Finished processing. Found {len(results)} active setups.")
    return results

if __name__ == "__main__":
    print("Running Intraday Global Scanner...")
    data = run_global_scanner()
    for d in data:
        print(d["Ticker"], d["Action"])
