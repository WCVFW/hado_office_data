import os
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, Text
from sqlalchemy.orm import declarative_base, sessionmaker
from datetime import datetime

# Database configuration
# Attempt to use MySQL, fallback to SQLite if connection fails.
MYSQL_URL = "mysql+pymysql://root:root@localhost:3306/agenttrade_db"
SQLITE_URL = "sqlite:///./agenttrade_local.db"

Base = declarative_base()

class Trade(Base):
    __tablename__ = 'trades'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    symbol = Column(String(50), nullable=False)
    action = Column(String(20), nullable=False)
    predicted_profit = Column(Float, nullable=False, default=0.0)
    actual_profit = Column(Float, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Company(Base):
    __tablename__ = 'companies'
    
    symbol = Column(String(50), primary_key=True)
    name = Column(String(100), nullable=True)
    sector = Column(String(100), nullable=True)
    is_active = Column(Integer, default=1)

class ScreenerResult(Base):
    __tablename__ = 'screener_results'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    symbol = Column(String(50), nullable=False)
    date = Column(DateTime, default=datetime.utcnow)
    price = Column(Float, nullable=True)
    rsi_14 = Column(Float, nullable=True)
    macd = Column(Float, nullable=True)
    sma_50 = Column(Float, nullable=True)
    sma_200 = Column(Float, nullable=True)
    recommendation = Column(String(20), nullable=False) # BUY, SELL, HOLD, AVOID
    confidence_score = Column(Float, nullable=True)

class LiveSignalCache(Base):
    """
    Stores the full JSON string of the latest background scan.
    """
    __tablename__ = 'live_signal_cache'
    id = Column(Integer, primary_key=True, autoincrement=True)
    last_updated = Column(DateTime, default=datetime.utcnow)
    data_json = Column(Text(length=4294967295), nullable=False)

def get_engine():
    try:
        # First, try to auto-create the database if it doesn't exist
        temp_engine = create_engine("mysql+pymysql://root:root@localhost:3306/")
        with temp_engine.connect() as conn:
            from sqlalchemy import text
            conn.execute(text("CREATE DATABASE IF NOT EXISTS agenttrade_db"))
        
        # Now try connecting to the newly created database
        engine = create_engine(MYSQL_URL, pool_pre_ping=True)
        print("Successfully connected to MySQL database on port 3306.")
        return engine
    except Exception as e:
        print(f"Failed to connect to MySQL ({e}). Falling back to SQLite.")
        engine = create_engine(SQLITE_URL, connect_args={"check_same_thread": False})
        return engine

engine = get_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    try:
        # Create all tables (will create them in MySQL or SQLite depending on the active engine)
        Base.metadata.create_all(bind=engine)
    except Exception as e:
        print("Database table creation step skipped or failed:", e)
    
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Initialize tables
init_db()
