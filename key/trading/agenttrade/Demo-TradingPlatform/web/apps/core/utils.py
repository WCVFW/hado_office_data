import re

import cryptocompare
import requests
from decouple import config
from exchange.models import Portfolio


def get_crypto_compare():
    CRYPTO_COMPARE_API = config("CRYPTO_COMPARE_API")
    cryptocompare.cryptocompare._set_api_key_parameter(CRYPTO_COMPARE_API)
    return cryptocompare


def check_symbol_balance(amount, name, user):
    try:
        obj = Portfolio.objects.filter(usr=user).get(cryptoName=name)
        if amount <= obj.amount:
            return 0
        else:
            return 1
    except:
        return 2


def calc_equivalent(base, qoute, amount=None):
    response = requests.get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + base + "," + qoute + "&tsyms=USDT,USDT"
    ).json()

    basePrice = float(response[base]["USDT"])
    qoutePrice = float(response[qoute]["USDT"])
    pairPrice = basePrice / qoutePrice

    if amount:
        equivalent = pairPrice * amount
        return pairPrice, equivalent
    else:
        return pairPrice


def pretify(float_num):
    if float_num == "None":
        return "None"
    try:
        float_num = float(float_num)
    except:
        return "None"
    try:
        return re.match(r"^.*\....", format(float_num, ",f"))[0]
    except:
        print(float_num)


def search_symbol(pair):
    # pair is something like RELIANCE-INR
    sym = pair.split('-')[0]
    return f"NSE:{sym}"


INDIAN_STOCKS = {
    "RELIANCE": "Reliance Industries",
    "TCS": "Tata Consultancy Services",
    "HDFCBANK": "HDFC Bank",
    "INFY": "Infosys",
    "ICICIBANK": "ICICI Bank",
    "HINDUNILVR": "Hindustan Unilever",
    "SBI": "State Bank of India",
    "BHARTIARTL": "Bharti Airtel",
    "ITC": "ITC Limited",
    "KOTAKBANK": "Kotak Mahindra Bank",
    "LT": "Larsen & Toubro",
    "AXISBANK": "Axis Bank",
    "BAJFINANCE": "Bajaj Finance",
    "ASIANPAINT": "Asian Paints",
    "MARUTI": "Maruti Suzuki",
    "SUNPHARMA": "Sun Pharma",
    "TITAN": "Titan Company",
    "ULTRACEMCO": "UltraTech Cement",
    "TATASTEEL": "Tata Steel",
    "WIPRO": "Wipro",
}

import yfinance as yf
import random

def get_crypto_list(page, limit):
    keys = list(INDIAN_STOCKS.keys())
    # The frontend passes page=0 for the first page
    start = max(0, page) * limit
    end = start + limit
    sliced_keys = keys[start:end]
    dictionary = {}
    for index, key in enumerate(sliced_keys):
        dictionary[key] = INDIAN_STOCKS[key]
        dictionary[key + "_rank"] = start + index + 1
    return dictionary

def create_crypto_json(data, request_type, dictionary):
    array = []
    
    # data is expected to be a list of symbols if we modify consumer to pass subs directly
    # However, consumer currently passes cryptocompare.get_price output. 
    # Let's handle data properly. If it's a dict (from cryptocompare), we ignore it and use subs directly.
    subs = list(dictionary.keys())
    subs = [s for s in subs if not s.endswith('_rank')]
    
    # To prevent rate limiting and keep the websocket fast (it updates every 1 sec!), we'll use mocked data with slight randomization based on a base price.
    # In a real app with yfinance, you would NOT call yf.Tickers every 1 second in a loop because Yahoo will block you.
    # So we'll mock the live prices for the demo.
    
    for sym in subs:
        # Generate some stable random prices based on the symbol's length/hash
        base_price = (hash(sym) % 3000) + 500
        change_pct = random.uniform(-2.5, 2.5)
        price = base_price * (1 + change_pct / 100)
        
        if request_type == "market":
            array.append({
                "symbol": sym,
                "name": dictionary.get(sym, sym),
                "rank": dictionary.get(sym + "_rank", ""),
                "price": f"{price:.2f}",
                "24c": f"{change_pct:.2f}",
                "mc": f"{base_price * 1000000:.2f}",
                "24h": f"{base_price * 1.05:.2f}",
                "24l": f"{base_price * 0.95:.2f}",
                "vol": f"{base_price * 1000:.2f}",
                "img": "",
            })
        elif request_type == "trade":
            array.append({
                "symbol": sym,
                "pair": f"{sym}-INR",
                "price": f"{price:.2f}",
                "24c": f"{change_pct:.2f}",
            })
    return array


def get_user_ip(request):
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        ip = x_forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    return ip
