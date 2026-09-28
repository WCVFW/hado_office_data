from data_fetcher import get_market_data
from ai_agent import generate_trading_advice
import time

def main():
    print("="*50)
    print("🚀 Starting Worldwide Tech AI Trading Agent 🚀")
    print("="*50)
    
    # Step 1: Fetch Market Data
    market_data = get_market_data()
    
    if not market_data:
        print("Could not fetch market data. Please check your internet connection or try again later.")
        return

    print("\n📊 Today's Market Snapshot:")
    print("--- Top Gainers ---")
    for stock in market_data["top_gainers"]:
        print(f"{stock['Ticker']}: ${stock['Current Price']} ({stock['Change %']}%) | High: ${stock['High']} | Low: ${stock['Low']}")
        
    print("\n--- Top Losers ---")
    for stock in market_data["top_losers"]:
        print(f"{stock['Ticker']}: ${stock['Current Price']} ({stock['Change %']}%) | High: ${stock['High']} | Low: ${stock['Low']}")

    print("\n" + "="*50)
    time.sleep(2)
    
    # Step 2: Get AI Advice
    print("🧠 Asking AI for 1-Day Trade Recommendation...")
    advice = generate_trading_advice(market_data)
    
    print("\n" + "="*50)
    print("📈 AI TRADING PLAN")
    print("="*50)
    print(advice)
    print("="*50)

if __name__ == "__main__":
    main()
