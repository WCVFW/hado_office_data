import { useState, useEffect } from 'react';
import { FloppyDisk, Storefront, Receipt, Database, ToggleLeft, ToggleRight, Eye } from 'phosphor-react';

const Settings = () => {
    const [settings, setSettings] = useState({
        shopName: 'VEL MESS',
        address: '12/4, Anna Nagar, Madurai',
        phone: '98765 43210',
        taxRate: '0',
        gstEnabled: false,
        printLogo: true,
        scriptUrl: 'https://script.google.com/macros/s/AKfycbwQWYCAZYa3GSlemQglURZQBPnuYKP2u5IZFdsX2oGuNs8mGB5WekYyz6TjsO5-Jm10iw/exec'
    });

    const [saved, setSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        const savedSettings = localStorage.getItem('velmess_settings');
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            // Ensure we don't overwrite the default valid URL with an empty one from old save
            if (!parsed.scriptUrl && settings.scriptUrl) {
                parsed.scriptUrl = settings.scriptUrl;
            }
            setSettings({ ...settings, ...parsed });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    const handleToggle = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('velmess_settings', JSON.stringify(settings));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const [showPreview, setShowPreview] = useState(false);

    // Mock Receipt Component for Preview
    const ReceiptPreview = () => (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'var(--bg-card)', padding: '24px', width: '320px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', color: 'var(--text-main)' }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontWeight: 'bold' }}>{settings.shopName || 'SHOP NAME'}</h3>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap' }}>{settings.address || 'Address Line 1\nCity, State'}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tel: {settings.phone || '000-000-0000'}</p>
                </div>

                <hr style={{ border: 'none', borderBottom: '1px dashed var(--text-muted)', margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <span>Date: {new Date().toLocaleDateString()}</span>
                    <span>Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 'bold' }}>
                    <span>Order #1001</span>
                    <span>Dine-in</span>
                </div>

                <hr style={{ border: 'none', borderBottom: '1px dashed var(--text-muted)', margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <span>Item Name x1</span>
                    <span>0.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <span>Item Name x1</span>
                    <span>0.00</span>
                </div>

                <hr style={{ border: 'none', borderBottom: '1px dashed var(--text-muted)', margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                    <span>0.00</span>
                </div>
                {settings.gstEnabled && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Tax ({settings.taxRate}%)</span>
                        <span>{(440 * (settings.taxRate || 0) / 100).toFixed(2)}</span>
                    </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <span>TOTAL</span>
                    <span>
                        {(440 + (settings.gstEnabled ? (440 * (settings.taxRate || 0) / 100) : 0)).toFixed(2)}
                    </span>
                </div>

                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <p>Thank you for visiting!</p>
                </div>

                <button
                    onClick={() => setShowPreview(false)}
                    className="modern-btn"
                    style={{ marginTop: '24px', width: '100%' }}
                >
                    Close Preview
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px', boxSizing: 'border-box' }}>
            {/* Header */}
            <div className="page-header" style={{ marginBottom: 0 }}>
                <h1>Settings</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Manage your shop configuration and preferences</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '24px', flex: 1, minHeight: 0 }}>

                {/* Left Sidebar Tabs */}
                <div className="feature-card" style={{ padding: '16px 0', height: 'fit-content' }}>
                    <div
                        className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
                        onClick={() => setActiveTab('general')}
                        style={tabStyle(activeTab === 'general')}
                    >
                        <Storefront size={20} />
                        General Shop Info
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="feature-card" style={{ padding: '32px', overflowY: 'auto' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-main)' }}>
                        Shop Configuration
                    </h2>

                    <form onSubmit={handleSave}>
                        {activeTab === 'general' && (
                            <div className="animate-fade-in">
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                                    <div className="form-group">
                                        <label className="form-label">Shop Name</label>
                                        <input
                                            name="shopName"
                                            className="modern-input"
                                            value={settings.shopName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            name="phone"
                                            className="modern-input"
                                            value={settings.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <textarea
                                        name="address"
                                        className="modern-input"
                                        rows="4"
                                        value={settings.address}
                                        onChange={handleChange}
                                        style={{ resize: 'none' }}
                                    />
                                </div>
                            </div>
                        )}

                        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                            <button type="submit" className="modern-btn" style={{ width: 'auto', padding: '12px 32px' }}>
                                <FloppyDisk size={18} weight="bold" />
                                {saved ? 'Saved!' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

const tabStyle = (isActive) => ({
    padding: '12px 24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
    background: isActive ? 'var(--bg-hover)' : 'transparent',
    fontWeight: isActive ? '600' : '400',
    borderRight: isActive ? '3px solid var(--primary)' : '3px solid transparent',
    transition: 'all 0.2s'
});

export default Settings;
