const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    login: (u, p) => ipcRenderer.invoke('login', u, p),
    checkDBReady: () => ipcRenderer.invoke('check-db-ready'),

    // User Management
    getAllUsers: () => ipcRenderer.invoke('get-all-users'),
    createUser: (u, p, r, s) => ipcRenderer.invoke('create-user', u, p, r, s),
    createShopAndUser: (data) => ipcRenderer.invoke('create-shop-and-user', data), // Added
    updateUser: (id, u, p, r, s) => ipcRenderer.invoke('update-user', id, u, p, r, s),
    deleteUser: (id) => ipcRenderer.invoke('delete-user', id),

    // Dashboard & Stats
    getDashboardStats: () => ipcRenderer.invoke('get-dashboard-stats'),
    getCompletedToday: () => ipcRenderer.invoke('get-completed-today'),
    getOverviewData: () => ipcRenderer.invoke('get-overview-data'), // Added
    getAllShops: () => ipcRenderer.invoke('get-all-shops'),
    updateShopStatus: (data) => ipcRenderer.invoke('update-shop-status', data),
    deleteShop: (shopId) => ipcRenderer.invoke('delete-shop', shopId),
    getGlobalInventory: () => ipcRenderer.invoke('get-global-inventory'),
    getRecentOrders: () => ipcRenderer.invoke('get-recent-orders'),
    getLowStock: () => ipcRenderer.invoke('get-low-stock'),
    getShopInventory: (id) => ipcRenderer.invoke('get-shop-inventory', id),
    getAllProducts: () => ipcRenderer.invoke('get-all-products'),
    createProduct: (data) => ipcRenderer.invoke('create-product', data), // Added
    getSalesAnalytics: () => ipcRenderer.invoke('get-sales-analytics'),
    getOverviewData: () => ipcRenderer.invoke('get-overview-data'), // Added

    // Writes
    createOrder: (data) => ipcRenderer.invoke('create-order', data),
    updateOrderStatus: (orderId, status) => ipcRenderer.invoke('update-order-status', { orderId, status }),

    // Stock Requests
    requestStock: (shopId, items) => ipcRenderer.invoke('request-stock', { shopId, items }),
    getOpenRequests: () => ipcRenderer.invoke('get-open-requests'),
    fulfillRequest: (requestId) => ipcRenderer.invoke('fulfill-request', requestId),
    updateShopStock: (data) => ipcRenderer.invoke('update-shop-stock', data),
    beep: () => ipcRenderer.invoke('beep'),
    printReceipt: (data) => ipcRenderer.invoke('print-receipt', data),
});
