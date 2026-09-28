import pandas as pd
import numpy as np

def run_backtest(df, initial_capital=100000, risk_per_trade=0.02):
    """
    Vectorized backtesting engine for intraday signals.
    Expects df with 'Action', 'Target', 'Stop', 'Close'
    """
    capital = initial_capital
    positions = []
    equity_curve = [initial_capital]
    
    for i in range(len(df) - 1):
        row = df.iloc[i]
        next_row = df.iloc[i+1]
        
        action = str(row.get('Action', 'HOLD'))
        if "BUY" in action or "SELL" in action and "HOLD" not in action:
            entry_price = next_row['Open']
            target = row.get('Target', entry_price * 1.01)
            stop = row.get('Stop', entry_price * 0.99)
            
            # Kelly Criterion estimation
            win_prob = 0.55
            win_loss_ratio = abs(target - entry_price) / abs(entry_price - stop) if abs(entry_price - stop) > 0 else 1
            kelly_pct = win_prob - ((1 - win_prob) / win_loss_ratio)
            kelly_pct = max(0, min(kelly_pct, 0.25)) # Cap at 25%
            
            position_size = capital * min(risk_per_trade * 2, kelly_pct)
            shares = position_size / entry_price if entry_price > 0 else 0
            
            # Simulate exit on next candle close for simplicity (Intraday aggressive)
            exit_price = next_row['Close']
            
            if "BUY" in action:
                pnl = (exit_price - entry_price) * shares
            else:
                pnl = (entry_price - exit_price) * shares
                
            capital += pnl
            positions.append({
                'Date': next_row.name,
                'Action': action,
                'Entry': entry_price,
                'Exit': exit_price,
                'PnL': pnl,
                'Capital': capital
            })
            
        equity_curve.append(capital)
        
    if not positions:
        return None
        
    results = pd.DataFrame(positions)
    
    # Calculate Metrics
    total_return = (capital - initial_capital) / initial_capital
    winning_trades = len(results[results['PnL'] > 0])
    losing_trades = len(results[results['PnL'] <= 0])
    win_rate = winning_trades / len(results) if len(results) > 0 else 0
    
    peak = pd.Series(equity_curve).expanding(min_periods=1).max()
    drawdown = (pd.Series(equity_curve) - peak) / peak
    max_drawdown = drawdown.min()
    
    return {
        'Final Capital': capital,
        'Total Return %': total_return * 100,
        'Win Rate %': win_rate * 100,
        'Total Trades': len(results),
        'Max Drawdown %': max_drawdown * 100,
        'Trades': results.to_dict('records')
    }

if __name__ == "__main__":
    print("Backtest Engine Ready.")
