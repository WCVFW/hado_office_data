import streamlit as st
import pandas as pd
import plotly.graph_objects as go
from ml_predictor import run_global_scanner

# Page config (Must be the first Streamlit command)
st.set_page_config(
    page_title="Global Intraday Scanner Pro",
    page_icon="⚡",
    layout="wide"
)

# 1. Theme Switch Option
col_title, col_theme = st.columns([4, 1])
with col_theme:
    st.write("") # Spacer
    is_dark = st.toggle("🌙 Dark Mode", value=True)

# Dynamic Colors based on Theme
bg_color = "#0A0A0A" if is_dark else "#F0F2F6"
text_color = "#E0E0E0" if is_dark else "#111111"
card_bg = "#121212" if is_dark else "#FFFFFF"
border_color = "#2A2A2A" if is_dark else "#E0E0E0"
grid_color = "#222" if is_dark else "#DDD"

# Premium UI CSS styling (Glassmorphism & Neat Broker Look)
st.markdown(f"""
<style>
    /* Main Background */
    .stApp {{
        background-color: {bg_color};
        color: {text_color};
    }}
    
    /* Center the title and make it pop */
    h1 {{
        text-align: left;
        font-family: 'Inter', sans-serif;
        background: -webkit-linear-gradient(#00F0FF, #0077FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 10px;
    }}

    /* Container Spacing Fixes (Added Left Margin) */
    .block-container {{
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 3rem;  /* Added Left Margin */
        padding-right: 3rem; /* Added Right Margin */
    }}
    
    /* Clean DataFrame Table Styling */
    [data-testid="stDataFrame"] {{
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid {border_color};
        background-color: {card_bg};
    }}

    /* Modern Huge Button */
    .stButton>button {{
        width: 100%;
        height: 60px;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 1px;
        background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
        color: #000;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 4px 15px rgba(0, 201, 255, 0.4);
        transition: transform 0.2s, box-shadow 0.2s;
    }}
    .stButton>button:hover {{
        transform: translateY(-2px);
        box-shadow: 0px 6px 20px rgba(0, 201, 255, 0.6);
        color: #000;
    }}
    
    /* Card-like borders for charts */
    div.stPlotlyChart {{
        border-radius: 12px;
        padding: 10px;
        background-color: {card_bg};
        border: 1px solid {border_color};
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }}
</style>
""", unsafe_allow_html=True)

with col_title:
    st.title("⚡ GLOBAL MARKET PRO SCANNER")
    st.markdown(f"<p style='color: {text_color}; opacity: 0.7; font-size: 16px; margin-bottom: 20px;'>Institutional-Grade Momentum Scanner for Intraday Profits (₹2000+ Daily Target)</p>", unsafe_allow_html=True)

# Initialize Session State to cache results (so theme switch doesn't restart the scan)
if 'scan_results' not in st.session_state:
    st.session_state.scan_results = None

# Static placeholder to prevent shaking
output_placeholder = st.empty()

if st.session_state.scan_results is None:
    with st.spinner("Analyzing Live 15-Minute Candlesticks across Global Markets... Please wait 1-2 mins..."):
        st.session_state.scan_results = run_global_scanner()
    
if st.session_state.scan_results is not None:
    results = st.session_state.scan_results
    
    # Filter out "HOLD" signals. We only want actionable trades.
    actionable_trades = [res for res in results if "HOLD" not in str(res['Action'])]
    
    with output_placeholder.container():
            if not actionable_trades:
                st.warning("No high-probability trades found right now. Market might be choppy. Check back in 15 minutes.")
            else:
                st.success(f"Scanner locked onto {len(actionable_trades)} Explosive Intraday Setups!")
                
                # Split layout: Left (Table) | Right (Charts)
                col_left, col_right = st.columns([1.2, 2.5])
                
                with col_left:
                    # --- SECTION 1: THE PREDICTION TABLE (LEFT) ---
                    st.subheader("📋 Signals & Capital")
                    
                    table_data = []
                    for res in actionable_trades:
                        row = res.copy()
                        row.pop('History', None)
                        table_data.append(row)
                        
                    df = pd.DataFrame(table_data)
                    
                    # Highlight colors for the table
                    def highlight_action(val):
                        val_str = str(val)
                        if "STRONG BUY" in val_str:
                            return 'background-color: rgba(0, 255, 0, 0.15); color: #00AA00; font-weight: bold' if not is_dark else 'background-color: rgba(0, 255, 0, 0.1); color: #00FF00; font-weight: bold'
                        elif "BUY" in val_str:
                            return 'color: #00AA00; font-weight: bold' if not is_dark else 'color: #00FF00; font-weight: bold'
                        elif "STRONG SELL" in val_str:
                            return 'background-color: rgba(255, 0, 0, 0.15); color: #DD0000; font-weight: bold' if not is_dark else 'background-color: rgba(255, 0, 0, 0.1); color: #FF4444; font-weight: bold'
                        elif "SELL" in val_str:
                            return 'color: #DD0000; font-weight: bold' if not is_dark else 'color: #FF4444; font-weight: bold'
                        return ''

                    st.dataframe(
                        df.style.map(highlight_action, subset=['Action']),
                        use_container_width=True,
                        hide_index=True,
                        height=600 # Keep the table reasonably tall
                    )
                    
                    st.info("ℹ️ **Capital (for ₹2K)** assumes your broker provides **5x Margin** for Intraday trading.")
                
                with col_right:
                    # --- SECTION 2: THE INTERACTIVE BROKER CHARTS (RIGHT) ---
                    st.subheader("📈 Professional Candlestick Charts (15-Min)")
                    
                    for res in actionable_trades:
                        ticker = res['Ticker']
                        action = res['Action']
                        target = res['Target']
                        stop = res['Stop']
                        current_price = res['Price']
                        history_list = res.get('History', [])
                        
                        if not history_list:
                            continue
                            
                        hist_df = pd.DataFrame(history_list)
                        
                        fig = go.Figure()
                        
                        # 1. Professional Candlestick Chart (FIXED BUG)
                        fig.add_trace(go.Candlestick(
                            x=hist_df['Date'],
                            open=hist_df['Open'],
                            high=hist_df['High'],
                            low=hist_df['Low'],
                            close=hist_df['Close'],
                            name='Candlestick',
                            increasing_line_color='#00CC00', increasing_fillcolor='#00CC00',
                            decreasing_line_color='#FF3333', decreasing_fillcolor='#FF3333'
                        ))
                        
                        # 2. Add Horizontal Lines for Target and Stop Loss
                        target_color = '#00AA00' if "BUY" in action else '#FF3333'
                        stop_color = '#FF3333' if "BUY" in action else '#00AA00'
                        
                        fig.add_hline(y=target, line_dash="solid", line_width=2, line_color=target_color, 
                                      annotation_text=f"🎯 TARGET: {target}", annotation_position="top right",
                                      annotation_font=dict(color=target_color, size=12))
                        
                        fig.add_hline(y=stop, line_dash="solid", line_width=2, line_color=stop_color, 
                                      annotation_text=f"🛑 STOP LOSS: {stop}", annotation_position="bottom right",
                                      annotation_font=dict(color=stop_color, size=12))
                        
                        fig.add_hline(y=current_price, line_dash="dot", line_width=1, line_color="#00F0FF" if is_dark else "#0055FF", 
                                      annotation_text=f"ENTRY: {current_price}", annotation_position="top left",
                                      annotation_font=dict(color="#00F0FF" if is_dark else "#0055FF", size=11))
                        
                        # Layout Tweaks for clean broker look (FIXED X-AXIS BUG)
                        fig.update_layout(
                            title=dict(text=f"<b>{ticker}</b>  |  {action}  |  Conf: {res['Conf %']}%", font=dict(size=16)),
                            plot_bgcolor=card_bg,
                            paper_bgcolor=card_bg,
                            font=dict(color=text_color),
                            xaxis=dict(
                                showgrid=False, 
                                rangeslider=dict(visible=False), # Essential for clean Candlestick
                                tickangle=-45,
                                nticks=10
                            ),
                            yaxis=dict(
                                showgrid=True, 
                                gridcolor=grid_color, 
                                zeroline=False,
                                side='right' # Price on the right side like real brokers
                            ),
                            height=400, # Increased slightly for clarity
                            margin=dict(l=10, r=60, t=40, b=30),
                            showlegend=False
                        )
                        
                        st.plotly_chart(fig, use_container_width=True)

    else:
        st.error("Failed to run scanner. Please check your internet connection and try again.")
