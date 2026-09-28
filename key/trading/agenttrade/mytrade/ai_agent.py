import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
API_KEY = os.getenv("GEMINI_API_KEY")
if API_KEY:
    genai.configure(api_key=API_KEY)
else:
    print("WARNING: GEMINI_API_KEY not found in .env file.")

def generate_trading_advice(market_data):
    """
    Sends the market data to the Gemini AI to get a 1-day trading recommendation.
    """
    if not API_KEY:
        return "Error: Gemini API Key is missing. Please add it to the .env file."
        
    prompt = f"""
    You are an expert AI Day Trading Assistant. 
    Analyze the following stock market data for today. Identify which stock has the highest potential for a 1-day intraday or swing trade to make a good profit.

    Market Data (Top Gainers and Losers today):
    {market_data}

    Based on this data and your knowledge of these worldwide tech/major stocks, please provide a proper trading plan.
    Format your response cleanly using Markdown:
    1. **Recommended Stock**: Name of the stock to trade.
    2. **Action**: BUY or SELL SHORT.
    3. **Rationale**: Why this stock is a good pick for today (mention the high/low volume or momentum).
    4. **Entry Price**: Suggested entry price range.
    5. **Target Price (1-day)**: Suggested exit price for profit.
    6. **Stop-Loss**: Suggested stop loss to manage risk.
    7. **Risk Level**: High/Medium/Low.

    Make the response professional and actionable. Note: Emphasize that this is educational advice.
    """
    
    try:
        model = genai.GenerativeModel('gemini-1.5-pro')
        print("Analyzing data with Gemini AI...")
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Failed to generate advice: {e}"
