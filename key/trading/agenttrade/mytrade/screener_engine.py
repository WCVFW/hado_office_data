import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime
from database import SessionLocal, Company, ScreenerResult, engine, Base

def get_nifty500_symbols():
    try:
        print("Fetching NIFTY 500 symbols from Wikipedia...")
        url = "https://en.wikipedia.org/wiki/NIFTY_500"
        tables = pd.read_html(url)
        # Usually the 3rd table contains the constituent data
        df = tables[2]
        if 'Symbol' in df.columns:
            symbols = df['Symbol'].tolist()
            return [f"{sym}.NS" for sym in symbols]
        else:
            raise ValueError("Symbol column not found in Wikipedia table")
    except Exception as e:
        print(f"Error fetching symbols dynamically: {e}")
        # Fallback small list if Wikipedia structure changes
        return ["RELIANCE.NS", "TCS.NS", "HDFCBANK.NS", "INFY.NS", "ICICIBANK.NS"]

def calculate_rsi(data, window=14):
    delta = data['Close'].diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=window).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=window).mean()
    rs = gain / loss
    return 100 - (100 / (1 + rs))

def run_screener():
    universe = get_nifty500_symbols()
    print(f"Starting background scan for {len(universe)} Indian companies...")
    db = SessionLocal()
    
    # Ensure Base is created just in case
    Base.metadata.create_all(bind=engine)
    
    try:
        # 1. Sync companies to DB
        existing_companies = {c.symbol for c in db.query(Company).all()}
        for symbol in universe:
            if symbol not in existing_companies:
                db.add(Company(symbol=symbol, name=symbol.replace(".NS", ""), is_active=1))
        db.commit()

        # 2. Batch download data to avoid rate limits
        print("Downloading market data in batch (this may take a while)...")
        data = yf.download(universe, period="1y", group_by="ticker", auto_adjust=True, progress=False)
        
        results = []
        for symbol in universe:
            try:
                # Handle edge cases where single or multi-ticker download structures vary
                if len(universe) == 1:
                    df = data
                else:
                    df = data[symbol]
                
                if df.empty or len(df) < 200:
                    continue
                    
                df = df.copy()
                df['RSI_14'] = calculate_rsi(df)
                df['SMA_50'] = df['Close'].rolling(window=50).mean()
                df['SMA_200'] = df['Close'].rolling(window=200).mean()
                
                # Simple MACD
                exp1 = df['Close'].ewm(span=12, adjust=False).mean()
                exp2 = df['Close'].ewm(span=26, adjust=False).mean()
                macd = exp1 - exp2
                df['MACD'] = macd
                
                latest = df.iloc[-1]
                price = latest['Close']
                rsi = latest['RSI_14']
                sma50 = latest['SMA_50']
                sma200 = latest['SMA_200']
                macd_val = latest['MACD']
                
                # Strategy Rules
                recommendation = "HOLD"
                confidence = 50.0
                
                if rsi < 30 and price > sma200:
                    recommendation = "STRONG BUY"
                    confidence = 90.0
                elif rsi < 40 and macd_val > 0:
                    recommendation = "BUY"
                    confidence = 75.0
                elif rsi > 70 or price < sma200:
                    recommendation = "AVOID"
                    confidence = 20.0
                elif rsi > 60 and macd_val < 0:
                    recommendation = "SELL"
                    confidence = 30.0
                    
                # Store Result
                res = ScreenerResult(
                    symbol=symbol,
                    price=float(price) if not np.isnan(price) else 0.0,
                    rsi_14=float(rsi) if not np.isnan(rsi) else 0.0,
                    macd=float(macd_val) if not np.isnan(macd_val) else 0.0,
                    sma_50=float(sma50) if not np.isnan(sma50) else 0.0,
                    sma_200=float(sma200) if not np.isnan(sma200) else 0.0,
                    recommendation=recommendation,
                    confidence_score=confidence
                )
                db.add(res)
                
            except Exception as e:
                print(f"Error processing {symbol}: {e}")
                
        db.commit()
        print("Background scan complete and results stored in DB.")
        
    except Exception as e:
        print("Screener failed:", e)
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    run_screener()
