import json
import urllib.parse

import requests
from core.utils import search_symbol
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse
from requests.structures import CaseInsensitiveDict


def exchange_trade(request, pair=None):
    if not pair:
        pair = "RELIANCE-INR"

    name = pair.split("-")[0]
    search_res = search_symbol(pair)
    
    if not search_res:
        pair_symbol = "NSE:RELIANCE"
        name = "RELIANCE"
    else:
        pair_symbol = search_res

    context = {
        "pair": pair_symbol, 
        "name": name.upper(),
        "url_pair": pair
    }

    return render(request, "registration/trade.html", context=context)


def search_cryptos(request, value):
    from core.utils import INDIAN_STOCKS
    
    query = value.lower()
    results = []
    
    for symbol, name in INDIAN_STOCKS.items():
        if query in symbol.lower() or query in name.lower():
            results.append({
                "name": name,
                "symbol": symbol,
                "image": "https://cdn-icons-png.flaticon.com/512/2916/2916117.png", 
                "slug": symbol.lower()
            })
            
    if not results:
        return JsonResponse("null", safe=False)
        
    return JsonResponse(results, safe=False)


def markets(request):
    return render(request, "exchange/markets.html")
