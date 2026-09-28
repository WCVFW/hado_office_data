import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Search, Coffee, ShoppingBag } from 'lucide-react';

const Billing = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get User Info
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    // State for Admin Shop Selection
    const [shops, setShops] = useState([]);
    const [selectedShopId, setSelectedShopId] = useState(user.shopId || null);
    const isAdmin = user.role === 'admin';

    useEffect(() => {
        const initData = async () => {
            if (window.electronAPI) {
                // Fetch next order ID
                const nextId = await window.electronAPI.getNextOrderId();
                setNextBillId(nextId);

                // If admin, fetch all shops to allow selection
                if (isAdmin) {
                    try {
                        const allShops = await window.electronAPI.getAllShops();
                        if (allShops && allShops.length > 0) {
                            setShops(allShops);
                            // Default to first shop if none selected yet
                            if (!selectedShopId) setSelectedShopId(allShops[0].id);
                        }
                    } catch (err) {
                        console.error("Failed to load shops", err);
                    }
                }
            }
        };
        initData();
    }, [isAdmin]);

    const [nextBillId, setNextBillId] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            if (window.electronAPI && selectedShopId) {
                try {
                    setLoading(true);
                    // Fetch specific shop's inventory
                    const data = await window.electronAPI.getShopInventory(selectedShopId);
                    if (data) setProducts(data);
                } catch (err) {
                    console.error("Failed to load products", err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [selectedShopId]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (product.quantity <= 0) {
                alert("Out of Stock!");
                return prev;
            }

            if (existing) {
                if (existing.quantity >= product.quantity) {
                    alert(`Cannot add more. Only ${product.quantity} in stock.`);
                    return prev;
                }
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const product = products.find(p => p.id === id);
                const maxStock = product ? product.quantity : 999;

                let newQty = item.quantity + delta;
                if (newQty > maxStock) {
                    alert(`Limit reached: ${maxStock} available`);
                    newQty = maxStock;
                }
                return { ...item, quantity: Math.max(0, newQty) };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + (item.base_price * item.quantity), 0);
    };

    const [lastOrder, setLastOrder] = useState(null);

    const handlePrintBill = async () => {
        if (!selectedShopId) {
            alert("No Shop Selected. Cannot place order.");
            return;
        }
        if (cart.length === 0) return;

        if (window.electronAPI) {
            try {
                const total = getTotal();
                const itemsToOrder = cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.base_price
                }));

                const result = await window.electronAPI.createOrder({
                    shopId: selectedShopId,
                    userId: user.id,
                    items: itemsToOrder.map(i => ({ id: i.id, quantity: i.quantity, price: i.price }))
                });

                if (result.success) {
                    const receiptData = {
                        orderId: result.orderId,
                        shopName: isAdmin ? (shops.find(s => s.id == selectedShopId)?.name || 'Vel Mess Unit') : (user.shopName || 'Vel Mess Unit'),
                        items: itemsToOrder,
                        total: total
                    };

                    // Trigger Automatic Print
                    await window.electronAPI.printReceipt(receiptData);

                    setLastOrder(receiptData);
                    setCart([]);

                    // Refresh next ID
                    const nextId = await window.electronAPI.getNextOrderId();
                    setNextBillId(nextId);
                }
            } catch (err) {
                console.error(err);
                alert("Failed to process order and print.");
            }
        }
    };

    const handleReprint = async () => {
        if (lastOrder && window.electronAPI) {
            await window.electronAPI.printReceipt(lastOrder);
        }
    };

    const clearCart = () => {
        if (window.confirm("Are you sure you want to clear the entire order?")) {
            setCart([]);
        }
    };

    const filteredProducts = products.filter(p =>
        (selectedCategory === 'All' || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = ['All', ...new Set(products.map(p => p.category))];

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 140px)', gap: '24px', padding: '0' }} className="animate-fade-in">
            {/* Left: Product Selection Hub */}
            <div style={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Modern Header Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2px' }}>New Order / Billing</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '500' }}>
                                {products.length} Items available
                            </p>

                            {/* Admin Shop Selector */}
                            {isAdmin && (
                                <select
                                    value={selectedShopId || ''}
                                    onChange={(e) => {
                                        setSelectedShopId(e.target.value);
                                        setCart([]); // Clear cart when switching shops
                                    }}
                                    style={{
                                        padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--border-color)',
                                        fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-main)',
                                        background: 'var(--bg-app)', outline: 'none', cursor: 'pointer'
                                    }}
                                >
                                    {shops.map(shop => (
                                        <option key={shop.id} value={shop.id}>{shop.name}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ position: 'relative', width: '240px' }}>
                            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 12px 12px 40px',
                                    borderRadius: '14px', border: '1px solid var(--border-color)',
                                    background: 'var(--bg-surface)', color: 'var(--text-main)',
                                    fontSize: '0.9rem', outline: 'none', transition: 'all 0.3s',
                                    fontWeight: '500', boxShadow: 'var(--shadow-sm)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-primary)';
                                    e.target.style.boxShadow = '0 0 0 3px var(--color-primary-fade)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--border-color)';
                                    e.target.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Category Navigation */}
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '0', scrollbarWidth: 'none' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '12px',
                                border: '1px solid',
                                borderColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--border-color)',
                                background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--bg-surface)',
                                color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease',
                                boxShadow: selectedCategory === cat ? '0 4px 12px rgba(242, 116, 33, 0.3)' : 'none',
                                display: 'flex', alignItems: 'center', gap: '8px'
                            }}
                        >
                            {cat === 'All' && <Coffee size={14} />}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid of Excellence */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px',
                    overflowY: 'auto', paddingRight: '12px', paddingBottom: '30px'
                }} className="custom-scrollbar">
                    {filteredProducts.map(product => (
                        <div key={product.id}
                            onClick={() => addToCart(product)}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '12px',
                                borderRadius: '18px',
                                border: '1px solid var(--border-color)',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                                position: 'relative', overflow: 'hidden',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                                e.currentTarget.style.borderColor = 'var(--color-primary-fade)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '14px',
                                background: 'var(--bg-app)',
                                marginBottom: '10px', overflow: 'hidden',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid var(--border-color)'
                            }}>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=random&color=fff&size=128&length=2&bold=true`}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#f1f5f9'; }}
                                />
                                <div style={{ display: 'none' }}><Coffee size={20} /></div>
                            </div>

                            <h4 style={{
                                fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-main)',
                                marginBottom: '6px', lineHeight: '1.3', height: '2.6em',
                                overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                                padding: '0 4px'
                            }}>
                                {product.name}
                            </h4>

                            <div style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '4px',
                                width: '100%', padding: '0 4px'
                            }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-secondary)' }}>₹</span>
                                <span style={{ color: 'var(--text-main)', fontWeight: '800', fontSize: '1.1rem' }}>{product.base_price}</span>
                            </div>

                            <div style={{
                                marginTop: '8px', width: '100%',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '4px 8px', background: 'var(--bg-app)', borderRadius: '8px'
                            }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: '700', color: product.quantity < 10 ? '#ef4444' : 'var(--text-secondary)' }}>
                                    {product.quantity > 0 ? `${product.quantity} Left` : 'Empty'}
                                </span>
                                <div style={{ width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Plus size={12} color="white" strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: The Receipt Vault */}
            <div style={{
                flex: '0 0 340px', display: 'flex', flexDirection: 'column', borderRadius: '24px',
                overflow: 'hidden', background: 'var(--bg-surface)',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-color)',
                position: 'relative'
            }}>
                {/* Cart Header */}
                <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-app)' }}>
                    <div>
                        <h3 style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2px' }}>Current Order</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>
                            Next Bill #{nextBillId}
                        </p>
                    </div>
                    {cart.length > 0 && (
                        <button
                            onClick={clearCart}
                            title="Clear Cart"
                            style={{
                                background: 'white', color: '#ef4444', border: '1px solid #fee2e2',
                                width: '32px', height: '32px', borderRadius: '10px', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(239, 68, 68, 0.1)'
                            }}
                            onMouseOver={e => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                            onMouseOut={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'scale(1)'; }}
                        >
                            <Trash2 size={15} />
                        </button>
                    )}
                </div>

                {/* Items List */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }} className="custom-scrollbar">
                    {cart.length === 0 ? (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <ShoppingBag size={28} color="var(--text-muted)" />
                            </div>
                            <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Cart is empty</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Select items to start user bill</div>
                        </div>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={item.id} style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                marginBottom: idx === cart.length - 1 ? '0' : '16px',
                                paddingBottom: idx === cart.length - 1 ? '0' : '16px',
                                borderBottom: idx === cart.length - 1 ? 'none' : '1px dashed var(--border-color)'
                            }}>
                                <div style={{ flex: 1, paddingRight: '12px' }}>
                                    <div style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '0.85rem', marginBottom: '4px' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '500' }}>₹{item.base_price} / unit</div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Stepper */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', background: 'var(--bg-app)',
                                        borderRadius: '8px', padding: '2px', border: '1px solid var(--border-color)'
                                    }}>
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            style={{
                                                width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                border: 'none', background: 'white', borderRadius: '6px', cursor: 'pointer',
                                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)', color: 'var(--text-main)'
                                            }}
                                        >
                                            <Minus size={12} strokeWidth={3} />
                                        </button>
                                        <span style={{ width: '28px', textAlign: 'center', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            style={{
                                                width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                border: 'none', background: 'var(--color-primary)', borderRadius: '6px', cursor: 'pointer',
                                                boxShadow: '0 2px 4px rgba(242, 116, 33, 0.3)', color: 'white'
                                            }}
                                        >
                                            <Plus size={12} strokeWidth={3} />
                                        </button>
                                    </div>

                                    <div style={{ minWidth: '48px', textAlign: 'right', fontWeight: '800', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                                        ₹{item.base_price * item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Checkout */}
                <div style={{ padding: '20px 24px', background: 'var(--bg-app)', borderTop: '2px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.8rem' }}>Subtotal</span>
                        <span style={{ color: 'var(--text-main)', fontWeight: '700', fontSize: '0.9rem' }}>₹{getTotal()}</span>
                    </div>
                    {/* Dashed Separator */}
                    <div style={{ borderBottom: '1px dashed var(--border-color)', marginBottom: '12px' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'baseline' }}>
                        <h4 style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.2rem', margin: 0 }}>Total</h4>
                        <h4 style={{ fontWeight: '900', color: 'var(--color-primary)', fontSize: '1.4rem', margin: 0 }}>₹{getTotal()}</h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                            onClick={handlePrintBill}
                            disabled={cart.length === 0}
                            className="bg-gradient-primary"
                            style={{
                                width: '100%', padding: '12px', borderRadius: '14px', border: 'none',
                                color: 'white', fontWeight: '800', fontSize: '0.9rem',
                                cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                                opacity: cart.length === 0 ? 0.7 : 1, transition: 'all 0.3s',
                                boxShadow: '0 8px 16px -4px rgba(37, 82, 103, 0.4)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}
                        >
                            <ShoppingCart size={16} /> Print & Checkout
                        </button>

                        {lastOrder && (
                            <button
                                onClick={handleReprint}
                                style={{
                                    width: '100%', padding: '8px', borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-surface)', color: 'var(--text-secondary)',
                                    fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer',
                                    transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                                }}
                            >
                                Reprint Last Receipt
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--border-color);
                    border-radius: 10px;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Billing;
