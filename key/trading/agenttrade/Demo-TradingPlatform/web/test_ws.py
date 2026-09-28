import asyncio
import websockets

async def test():
    try:
        async with websockets.connect('ws://127.0.0.1:8000/ws/trade/prices/') as ws:
            print('Connected!')
            await ws.send('{"page":0, "RequestType":"trade"}')
            print('Sent message')
            res = await asyncio.wait_for(ws.recv(), timeout=2.0)
            print('Received:', res)
    except Exception as e:
        print('Error:', e)

asyncio.get_event_loop().run_until_complete(test())
