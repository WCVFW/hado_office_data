import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
    MagnifyingGlass, User, Bell, Receipt, Plus, Minus, Trash, Printer, 
    XCircle, UserCircle, Phone, Money, CreditCard, Ticket, ShoppingCart,
    CheckCircle, Keyboard, Package, ForkKnife, Clock, Bag, Storefront
} from 'phosphor-react';
import { fetchMenu, createOrder } from '../api';

const Billing = () => {
    // Current Time for Header
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Data State
    const [menuItems, setMenuItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [cart, setCart] = useState([]);

    // Customer State
    const [customerInfo, setCustomerInfo] = useState({ name: 'Walk-in', phone: '' });
    const [paymentMode, setPaymentMode] = useState('Cash'); 
    const [orderType, setOrderType] = useState('Dine-in'); 
    const [discount, setDiscount] = useState(0);

    // Filter & Search
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // Feedback
    const [showSuccess, setShowSuccess] = useState(false);
    const [lastOrderDetails, setLastOrderDetails] = useState(null);
    const [shopDetails, setShopDetails] = useState({ name: 'VEL MESS', address: 'Madurai', phone: '' });

    // Refs
    const searchRef = useRef(null);

    // Initial Load
    useEffect(() => {
        loadData();
        const savedSettings = localStorage.getItem('velmess_settings');
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            setShopDetails({
                name: parsed.shopName || 'VEL MESS',
                address: parsed.address || 'Madurai',
                phone: parsed.phone || ''
            });
        }
    }, []);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'F2') { e.preventDefault(); searchRef.current?.focus(); }
            if (e.key === 'F4') { e.preventDefault(); clearCart(); }
            if (e.key === 'F9') { e.preventDefault(); handleCheckout(); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [cart, customerInfo, paymentMode, discount, orderType]);

    // Filter Logic
    useEffect(() => {
        let result = menuItems.filter(i => i.is_available);
        if (activeCategory !== 'All') {
            result = result.filter(i => i.category === activeCategory);
        }
        if (search) {
            const term = search.toLowerCase();
            result = result.filter(i => 
                i.name.toLowerCase().includes(term) || 
                (i.category && i.category.toLowerCase().includes(term))
            );
        }
        setFilteredItems(result);
    }, [search, activeCategory, menuItems]);

    const loadData = async () => {
        try {
            const { data } = await fetchMenu();
            setMenuItems(data || []);
        } catch (err) { console.error("Menu fetch error", err); }
        finally { setLoading(false); }
    };

    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const updateQty = (itemId, delta) => {
        setCart(prev => prev.map(i => i.id === itemId ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
    };

    const removeFromCart = (itemId) => setCart(prev => prev.filter(i => i.id !== itemId));
    const clearCart = () => setCart([]);

    const subTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const finalAmount = Math.max(0, subTotal - discount);

    const handleCheckout = async () => {
        if (cart.length === 0 || isProcessing) return;
        setIsProcessing(true);
        const orderPayload = {
            customer_name: customerInfo.name,
            phone_number: customerInfo.phone,
            total_amount: subTotal,
            discount: parseFloat(discount) || 0,
            final_amount: finalAmount,
            payment_mode: paymentMode,
            status: orderType,
            items: cart
        };

        try {
            const { data } = await createOrder(orderPayload);
            if (data.success) {
                const orderData = {
                    id: data.orderId,
                    items: [...cart],
                    finalAmount,
                    discount: parseFloat(discount) || 0,
                    date: new Date(),
                    orderType,
                    paymentMode
                };
                setLastOrderDetails(orderData);
                setShowSuccess(true);
                setCart([]);
                setCustomerInfo({ name: 'Walk-in', phone: '' });
                setDiscount(0);
                setTimeout(() => setShowSuccess(false), 3000);
            }
        } catch (err) { 
            console.error("Order error", err);
            const msg = err.response?.data?.message || err.message;
            alert("Checkout error: " + msg); 
        } finally { setIsProcessing(false); }
    };

    // Auto-Print Trigger
    useEffect(() => {
        if (lastOrderDetails) {
            // Check if we are in Electron for silent/dialog print, else browser print
            setTimeout(() => {
                if (window.electronAPI) {
                    window.electronAPI.printBill();
                } else {
                    window.print();
                }
            }, 800);
        }
    }, [lastOrderDetails]);

    const Categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks'];

    const ReceiptPortal = () => {
        if (!lastOrderDetails) return null;
        return createPortal(
            <div id="receipt-print-area">
                <style>
                    {`
                        @media print {
                            body * { visibility: hidden !important; background: none !important; }
                            #receipt-print-area, #receipt-print-area * { visibility: visible !important; }
                            #receipt-print-area { 
                                position: absolute !important; 
                                left: 0 !important; 
                                top: 0 !important; 
                                width: 56mm !important; /* Standard Thermal Roll */
                                margin: 0 !important; 
                                padding: 0 !important;
                                background: white !important;
                                z-index: 99999 !important;
                            }
                            @page { margin: 0 !important; size: auto; }
                        }
                    `}
                </style>
                <div className="receipt-content" style={{ 
                    width: '56mm', padding: '2mm', color: 'black', background: 'white', 
                    fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', lineHeight: '1.2'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}>{shopDetails.name}</h2>
                        <p style={{ margin: '2px 0', fontSize: '10px' }}>{shopDetails.address}</p>
                        {shopDetails.phone && <p style={{ margin: '0', fontSize: '10px' }}>Mob: {shopDetails.phone}</p>}
                    </div>

                    <div style={{ borderTop: '1px dashed #000', margin: '5px 0' }}></div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                        <span>Bill No: #{lastOrderDetails.id}</span>
                        <span>{lastOrderDetails.date.toLocaleDateString()}</span>
                    </div>
                    <div style={{ fontSize: '10px' }}>
                        Time: {lastOrderDetails.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>

                    <div style={{ borderTop: '1px dashed #000', margin: '5px 0' }}></div>

                    {/* Table Header */}
                    <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '3px' }}>
                        <span style={{ flex: 1 }}>Item</span>
                        <span style={{ width: '25px', textAlign: 'center' }}>Qty</span>
                        <span style={{ width: '60px', textAlign: 'right' }}>Amt</span>
                    </div>

                    {lastOrderDetails.items.map((item, i) => (
                        <div key={i} style={{ display: 'flex', marginBottom: '2px' }}>
                            <span style={{ flex: 1 }}>{item.name}</span>
                            <span style={{ width: '25px', textAlign: 'center' }}>{item.qty}</span>
                            <span style={{ width: '60px', textAlign: 'right' }}>{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    ))}

                    <div style={{ borderTop: '2px solid #000', margin: '8px 0 5px' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Subtotal:</span>
                        <span>₹ {lastOrderDetails.items.reduce((acc, i) => acc + (i.price * i.qty), 0).toFixed(2)}</span>
                    </div>
                    {lastOrderDetails.discount > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Discount:</span>
                            <span>- ₹ {lastOrderDetails.discount.toFixed(2)}</span>
                        </div>
                    )}
                    
                    <div style={{ 
                        display: 'flex', justifyContent: 'space-between', 
                        fontSize: '16px', fontWeight: 'bold', marginTop: '5px',
                        borderTop: '1px solid #000', paddingTop: '5px'
                    }}>
                        <span>TOTAL</span>
                        <span>₹ {lastOrderDetails.finalAmount.toFixed(2)}</span>
                    </div>

                    <div style={{ borderTop: '1px dashed #000', margin: '8px 0' }}></div>

                    <div style={{ textAlign: 'center', fontSize: '10px' }}>
                        <p style={{ margin: '0' }}>Payment Mode: {lastOrderDetails.paymentMode}</p>
                        <p style={{ margin: '5px 0', fontSize: '12px', fontWeight: 'bold' }}>TOKEN NO: {lastOrderDetails.id}</p>
                        <p style={{ margin: '10px 0 0' }}>--- Thank You! Come Again ---</p>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    return (
        <div className="billing-display" style={{ display: 'flex', height: '100vh', background: 'var(--bg-body)', overflow: 'hidden' }}>
            <ReceiptPortal />

            {/* Premium Toast */}
            {showSuccess && (
                <div style={{
                    position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)',
                    background: '#10b981', color: 'white', padding: '12px 30px', borderRadius: '50px',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)', zIndex: 3000,
                    display: 'flex', alignItems: 'center', gap: '10px', animation: 'slideDown 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                }}>
                    <CheckCircle size={24} weight="bold" />
                    <span style={{ fontWeight: 'bold' }}>Order #{lastOrderDetails?.id} Printed Successfully!</span>
                </div>
            )}

            {/* LEFT: MAIN CONTENT AREA */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                
                {/* Modern Banner/Header */}
                <div className="modern-header" style={{ height: '70px', padding: '0 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-card)' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Storefront size={24} weight="fill" />
                        </div>
                        <div>
                            <div style={{ fontWeight: '900', fontSize: '1.2rem', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{shopDetails.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={12} /> {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </div>
                        </div>
                   </div>

                   <div className="header-search" style={{ flex: 1, maxWidth: '400px', margin: '0 40px', position: 'relative' }}>
                        <MagnifyingGlass size={18} style={{ position: 'absolute', left: '15px', top: '11px', color: 'var(--text-muted)' }} />
                        <input
                            ref={searchRef}
                            className="premium-input"
                            placeholder="Find quick recipes... (F2)"
                            style={{ 
                                width: '100%', height: '40px', paddingLeft: '45px', borderRadius: '10px',
                                background: 'var(--bg-input)', border: '1px solid transparent', transition: '0.3s'
                            }}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                   </div>

                   <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status</span>
                            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 'bold' }}>● Operational</span>
                        </div>
                        <div className="icon-badge">
                            <Bell size={22} color="var(--text-main)" />
                            <div className="dot"></div>
                        </div>
                   </div>
                </div>

                {/* Categories Bar */}
                <div style={{ padding: '15px 30px', overflowX: 'auto', display: 'flex', gap: '12px', background: 'var(--bg-body)' }}>
                    {Categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer',
                                background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                                color: activeCategory === cat ? 'white' : 'var(--text-main)',
                                fontWeight: 'bold', fontSize: '0.85rem', whiteSpace: 'nowrap',
                                boxShadow: activeCategory === cat ? '0 4px 12px rgba(249, 115, 22, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                                transition: '0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid of Dishes */}
                <div style={{ flex: 1, padding: '0 30px 30px', overflowY: 'auto' }}>
                    {loading ? (
                         <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="loader-ring"></div>
                         </div>
                    ) : filteredItems.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '100px', color: 'var(--text-muted)' }}>
                            <MagnifyingGlass size={64} opacity={0.2} />
                            <p>No dishes found for this category.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '15px' }}>
                            {filteredItems.map(item => {
                                const cartItem = cart.find(c => c.id === item.id);
                                return (
                                    <div 
                                        key={item.id} 
                                        className="premium-dish-card"
                                        onClick={() => addToCart(item)}
                                        style={{
                                            background: 'var(--bg-card)', borderRadius: '15px', padding: '10px',
                                            border: cartItem ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                                            position: 'relative', cursor: 'pointer', transition: '0.2s transform'
                                        }}
                                    >
                                        <div style={{ height: '80px', background: 'var(--bg-input)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', overflow: 'hidden' }}>
                                            {item.image ? <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: '2rem' }}>🥘</span>}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '800', marginTop: '4px' }}>₹ {item.price}</div>
                                        
                                        {cartItem && (
                                            <div style={{ 
                                                position: 'absolute', top: '-10px', right: '-10px', background: 'var(--primary)', 
                                                color: 'white', width: '26px', height: '26px', borderRadius: '50%', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)', border: '2px solid white'
                                            }}>{cartItem.qty}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* RIGHT SIDEBAR: ELEVATED CART */}
            <div className="premium-sidebar" style={{ 
                width: '320px', background: 'var(--bg-card)', margin: '15px', borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', 
                border: '1px solid var(--border-light)', overflow: 'hidden'
            }}>
                
                {/* Header of Sidebar */}
                <div style={{ padding: '20px', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-input)' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                        {['Dine-in', 'Parcel'].map(t => (
                            <button 
                                key={t} 
                                onClick={() => setOrderType(t)} 
                                style={{ 
                                    flex: 1, padding: '8px', borderRadius: '10px', border: 'none',
                                    background: orderType === t ? 'var(--text-main)' : 'var(--bg-card)',
                                    color: orderType === t ? 'white' : 'var(--text-main)',
                                    fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem'
                                }}
                            >{t}</button>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <input 
                            className="premium-input" 
                            placeholder="Guest Name..." 
                            style={{ width: '100%', height: '36px', paddingLeft: '35px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', fontSize: '0.8rem' }}
                            value={customerInfo.name}
                            onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                        />
                        <UserCircle size={18} style={{ position: 'absolute', left: '10px', top: '9px', color: 'var(--text-muted)' }} />
                    </div>
                </div>

                {/* List Body */}
                <div style={{ flex: 1, padding: '15px', overflowY: 'auto' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Ordered Items</span>
                        <span style={{ color: 'var(--primary)' }}># {cart.length}</span>
                    </div>

                    {cart.length === 0 ? (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                            <Bag size={48} />
                            <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>Billing Queue Empty</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '10px', padding: '12px 0', borderBottom: '1px dashed var(--border-light)' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>₹ {item.price} each</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-input)', borderRadius: '6px', padding: '2px' }}>
                                    <button onClick={() => updateQty(item.id, -1)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}><Minus size={14} /></button>
                                    <span style={{ fontSize: '0.85rem', width: '20px', textAlign: 'center' }}>{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, 1)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}><Plus size={14} /></button>
                                </div>
                                <div style={{ minWidth: '60px', textAlign: 'right', fontWeight: 'bold', fontSize: '0.85rem' }}>₹ {(item.price * item.qty).toFixed(2)}</div>
                            </div>
                        ))
                    )}
                </div>

                {/* Totals & Actions */}
                <div style={{ padding: '20px', background: 'var(--bg-card)', borderTop: '2px solid var(--bg-input)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        {['Cash', 'UPI', 'Card'].map(m => (
                            <button 
                                key={m} 
                                onClick={() => setPaymentMode(m)} 
                                style={{ 
                                    flex: 1, padding: '6px', borderRadius: '8px', border: '1px solid var(--border-light)',
                                    background: paymentMode === m ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                                    color: paymentMode === m ? 'var(--primary)' : 'var(--text-muted)',
                                    fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer', margin: '0 2px'
                                }}
                            >{m}</button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            <span>Basket Subtotal</span>
                            <span>₹ {subTotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', alignItems: 'center' }}>
                            <span>Extra Discount</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ fontSize: '0.75rem' }}>₹</span>
                                <input type="number" style={{ width: '60px', padding: '4px', textAlign: 'right', borderRadius: '4px', border: '1px solid var(--border-light)' }} value={discount} onChange={e => setDiscount(e.target.value)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '10px', marginTop: '5px' }}>
                            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>NET PAYABLE</span>
                            <span style={{ fontWeight: '900', fontSize: '1.4rem', color: 'var(--primary)' }}>₹ {finalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <button 
                        className="checkout-btn"
                        onClick={handleCheckout}
                        disabled={cart.length === 0 || isProcessing}
                        style={{
                            width: '100%', height: '50px', background: '#10b981', color: 'white', border: 'none',
                            borderRadius: '12px', fontSize: '1rem', fontWeight: '900', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                            boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)', transition: '0.2s'
                        }}
                    >
                        {isProcessing ? 'SAVING...' : (
                            <>
                                <Printer size={20} weight="fill" />
                                COMPLETE & PRINT (F9)
                            </>
                        )}
                    </button>
                    <button onClick={clearCart} style={{ width: '100%', marginTop: '15px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'underline', cursor: 'pointer' }}>Reset Receipt (F4)</button>
                </div>
            </div>
        </div>
    );
};

export default Billing;
