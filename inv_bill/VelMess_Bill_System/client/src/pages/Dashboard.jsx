import { useState, useEffect } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { CaretLeft, CaretRight, Printer } from 'phosphor-react';
import { fetchDashboardStats, fetchReports, fetchPendingPrints, markOrderAsPrinted, sendPrinterHeartbeat } from '../api';

const Dashboard = () => {
    const [realStats, setRealStats] = useState({ todaySales: 0, todayOrders: 0, topItems: [] });
    // Decorative low-fi data for mini sparklines
    const smallChartData = [{ uv: 10 }, { uv: 30 }, { uv: 20 }, { uv: 50 }, { uv: 40 }, { uv: 70 }, { uv: 60 }];
    const [graphData, setGraphData] = useState([]);
    const [paymentStats, setPaymentStats] = useState([]);
    const [categoryStats, setCategoryStats] = useState([]);
    const [calendarDate, setCalendarDate] = useState(new Date());

    useEffect(() => {
        loadData();
        const interval = setInterval(_checkPendingPrints, 5000);
        const heartbeat = setInterval(() => sendPrinterHeartbeat().catch(e => {}), 10000);
        return () => { clearInterval(interval); clearInterval(heartbeat); };
    }, []);

    const _checkPendingPrints = async () => {
        try {
            const { data: pending } = await fetchPendingPrints();
            if (pending && pending.length > 0) {
                for (const order of pending) {
                    console.log("Printing new mobile order:", order.id);
                    // Trigger the print logic via Electron
                    if (window.electronAPI && window.electronAPI.print) {
                        // Custom payload formatting for the printer
                        // Note: Our shared print listener expects the current DOM to have the receipt
                        // but since we are in background, we might need a dedicated hidden print helper.
                        // For now, we'll try to trigger a re-draw or a direct print command.
                        window.electronAPI.print(order); 
                        await markOrderAsPrinted(order.id);
                    }
                }
            }
        } catch (err) { console.error("AutoPrint Error:", err); }
    };

    const loadData = async () => {
        try {
            // 2. Fetch Detailed Reports for Current Month (to build graphs)
            const today = new Date();
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
            const endOfMonth = today.toISOString().split('T')[0];
            const todayStr = today.toISOString().split('T')[0];

            const { data: reportData } = await fetchReports(startOfMonth, endOfMonth);
            let todayRevenue = 0;
            let todayOrderCount = 0;
            let topItemsList = [];

            // Process Report Data for Graphs
            if (reportData && reportData.orders) {
                // A. Sales Analytics (Daily)
                const dailyMap = {};

                // Track item sales for top items (simple approximation from month data if real endpoint fails, 
                // but ideally we'd want per-day. For now, we'll calc today's revenue from the orders list)
                const itemFrequency = {};

                reportData.orders.forEach(o => {
                    const orderDateStr = o.order_date.split('T')[0];
                    const amount = parseFloat(o.final_amount) || 0;

                    // Daily Map for Graph
                    const date = new Date(o.order_date).getDate(); // 1-31
                    dailyMap[date] = (dailyMap[date] || 0) + amount;

                    // Calculate Today's Revenue manually
                    if (orderDateStr === todayStr) {
                        todayRevenue += amount;
                        todayOrderCount++;

                        // Parse items if available in order (assuming checking structure)
                        // This might be complex if items aren't in report summary, but let's stick to revenue first.
                    }
                });

                const newGraphData = [];
                const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
                for (let i = 1; i <= daysInMonth; i++) {
                    newGraphData.push({
                        name: i.toString(),
                        sales: dailyMap[i] || 0
                    });
                }
                setGraphData(newGraphData);

                // B. Payment Stats (as proxy for Platform/Type for now)
                const pStats = [
                    { name: 'Cash', value: reportData.byPaymentMode.Cash || 0, color: '#0d9488' },
                    { name: 'UPI', value: reportData.byPaymentMode.UPI || 0, color: '#5eead4' }
                ];
                setPaymentStats(pStats);
            }

            // Fallback: Use calculated today's stats if the basic stats endpoint is returning 0
            // Fetch basic stats just for topItems (if they work)
            const { data: stats } = await fetchDashboardStats();

            setRealStats({
                ...stats,
                todaySales: todayRevenue, // Override with our calculated value
                todayOrders: todayOrderCount // Override with our calculated count
            });


        } catch (err) { console.error("Failed to load dashboard data", err); }
    };

    // Calendar Logic
    const handlePrevMonth = () => {
        setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
    };

    const generateCalendar = () => {
        const year = calendarDate.getFullYear();
        const month = calendarDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const daysInMonth = lastDay.getDate();

        // Grid is Mon-Sun. 
        // getDay(): 0=Sun, 1=Mon... 6=Sat.
        // We need: 0=Mon, 1=Tue... 6=Sun.
        let startingDay = firstDay.getDay();
        startingDay = startingDay === 0 ? 6 : startingDay - 1;

        const days = [];
        const today = new Date();

        // Padding
        for (let i = 0; i < startingDay; i++) {
            days.push(<div key={`empty-${i}`} style={{ height: '30px' }}></div>);
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday =
                i === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

            days.push(
                <div key={i} style={{
                    padding: '8px', textAlign: 'center', fontSize: '0.8rem',
                    color: isToday ? 'white' : 'var(--text-main)',
                    background: isToday ? 'var(--primary)' : 'transparent',
                    borderRadius: '50%', width: '30px', height: '30px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '2px auto', cursor: 'pointer',
                    ':hover': { background: isToday ? 'var(--primary)' : 'var(--bg-hover)' }
                }}>
                    {i}
                </div>
            );
        }
        return days;
    };

    // Calculate Monthly Progress (Target: ₹50,000)
    const monthlyTarget = 50000;
    const currentMonthSales = graphData.reduce((acc, curr) => acc + curr.sales, 0);
    const progressPercent = Math.min(100, Math.round((currentMonthSales / monthlyTarget) * 100));

    const pieData = [
        { name: 'Completed', value: currentMonthSales, color: '#f97316' },
        { name: 'Remaining', value: Math.max(0, monthlyTarget - currentMonthSales), color: 'var(--bg-input)' }
    ];

    return (
        <div className="content-area dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>

            {/* TOP STATS ROW */}
            <div className="stats-grid">
                {/* Card 1 */}
                <div className="stat-card-v2">
                    <div>
                        <h3>Total Revenue</h3>
                        <div className="value" style={{ color: 'var(--primary)' }}>₹ {realStats.todaySales?.toLocaleString() || "0"}</div>
                    </div>
                    <div style={{ height: '60px', width: '100%', minHeight: '60px' }}>
                        <ResponsiveContainer width="100%" height="100%" debounce={100}>
                            <AreaChart data={smallChartData}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="uv" stroke="#f97316" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="stat-card-v2">
                    <div>
                        <h3>Total Orders</h3>
                        <div className="value" style={{ color: 'var(--text-main)' }}>{realStats.todayOrders || "0"}</div>
                    </div>
                    <div style={{ height: '60px', width: '100%', minHeight: '60px' }}>
                        <ResponsiveContainer width="100%" height="100%" debounce={100}>
                            <AreaChart data={smallChartData}>
                                <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#e0f2f1" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="stat-card-v2">
                    <div>
                        <h3>Growth Rate</h3>
                        <div className="value" style={{ color: 'var(--text-main)' }}>94.2%</div>
                    </div>
                    <div style={{ height: '60px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={smallChartData}>
                                <Area type="monotone" dataKey="uv" stroke="#ffc658" fill="#fff8e1" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Card 4 - List */}
                <div className="stat-card-v2">
                    <h3>Top Categories</h3>
                    <div style={{ marginTop: '10px' }}>
                        <div className="widget-list-item">
                            <span style={{ color: 'var(--text-muted)' }}>Meals</span>
                            <div className="progress-bg" style={{ width: '60px', background: 'var(--bg-input)' }}><div className="progress-fill" style={{ width: '80%', background: '#f97316' }}></div></div>
                        </div>
                        <div className="widget-list-item">
                            <span style={{ color: 'var(--text-muted)' }}>Drinks</span>
                            <div className="progress-bg" style={{ width: '60px', background: 'var(--bg-input)' }}><div className="progress-fill" style={{ width: '40%', background: '#82ca9d' }}></div></div>
                        </div>
                        <div className="widget-list-item">
                            <span style={{ color: 'var(--text-muted)' }}>Snacks</span>
                            <div className="progress-bg" style={{ width: '60px', background: 'var(--bg-input)' }}><div className="progress-fill" style={{ width: '60%', background: '#ffc658' }}></div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MIDDLE SECTION - Main Chart & Calendar */}
            <div className="middle-section">
                <div className="main-chart-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>Sales Analytics</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily Sales for Current Month</p>
                        </div>
                    </div>

                    <div style={{ height: '300px', width: '100%' }}>
                        {graphData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={graphData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-light)" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)' }} />
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)', color: 'var(--text-main)' }} />
                                    <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                No sales data found for this month.
                            </div>
                        )}
                    </div>
                </div>

                <div className="calendar-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div onClick={handlePrevMonth} style={{ cursor: 'pointer', padding: '4px' }}>
                            <CaretLeft size={16} color="var(--text-main)" />
                        </div>
                        <span style={{ fontWeight: 600, color: 'var(--primary)' }}>
                            {calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <div onClick={handleNextMonth} style={{ cursor: 'pointer', padding: '4px' }}>
                            <CaretRight size={16} color="var(--text-main)" />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                        <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                        {generateCalendar()}
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="bottom-section">
                {/* 1. Pie Chart */}
                <div className="info-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ width: '100%', textAlign: 'left', marginBottom: '10px', color: 'var(--text-main)' }}>Target</h3>
                    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={60}
                                    outerRadius={70}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>{progressPercent}%</div>
                        </div>
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monthly Sales Goal</p>
                    <button style={{ marginTop: '10px', background: '#9c27b0', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
                </div>

                {/* 2. Top Items List */}
                <div className="info-card">
                    <h3 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Top Items</h3>
                    <div>
                        {realStats.topItems && realStats.topItems.length > 0 ? (
                            realStats.topItems.slice(0, 5).map((item, i) => (
                                <div key={i} className="widget-list-item">
                                    <span style={{ color: 'var(--text-muted)' }}>{item.item_name}</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{item.sold}</span>
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                No sales recorded today.
                            </div>
                        )}
                    </div>
                </div>

                {/* 3. Stats Bars (Payment Modes) */}
                <div className="info-card">
                    <h3 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Payment Mode Stats</h3>
                    {paymentStats.length > 0 && paymentStats.some(s => s.value > 0) ? (
                        paymentStats.map((s, i) => {
                            // Calculate percentage
                            const total = paymentStats.reduce((sum, item) => sum + item.value, 0);
                            const percent = total > 0 ? Math.round((s.value / total) * 100) : 0;
                            return (
                                <div key={i} style={{ marginBottom: '16px' }}>
                                    <div className="widget-list-item" style={{ marginBottom: '4px' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>{s.name}</span>
                                        <span style={{ color: 'var(--text-main)' }}>{percent}% (₹ {s.value.toLocaleString()})</span>
                                    </div>
                                    <div className="progress-bg" style={{ marginTop: '0', background: 'var(--bg-input)' }}>
                                        <div className="progress-fill" style={{ width: `${percent}%`, background: s.color }}></div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            No payment data available.
                        </div>
                    )}
                </div>

                {/* 4. Text / Notifications */}
                <div className="info-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Notes</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        <strong style={{ color: 'var(--text-main)' }}>Upcoming Event:</strong><br />
                        Festival Special Menu launch on 15th Jan. Ensure stock for special ingredients.
                    </p>
                    <div style={{ marginTop: 'auto', borderLeft: '3px solid #e91e63', paddingLeft: '10px' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            "Quality is the best business plan."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
