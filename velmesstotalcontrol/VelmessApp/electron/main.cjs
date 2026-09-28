const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const db = require('./db.cjs');
const initDB = require('./init_db.cjs');

let dbReady = false;
let dbError = null;

// Auto-run DB migration/init
const startup = async () => {
  try {
    await initDB();
    dbReady = true;
  } catch (err) {
    dbError = err.message;
    console.error("Startup DB Error:", err);
  }
};
startup();

// Helper to wrap async IPC handlers safely
const handleIpc = (channel, handler) => {
  ipcMain.handle(channel, async (event, ...args) => {
    try {
      return await handler(event, ...args);
    } catch (err) {
      console.error(`Error in ${channel}:`, err);
      return { error: true, message: err.message, data: [] };
    }
  });
};

handleIpc('check-db-ready', async () => {
  if (dbReady) return { ready: true };
  if (dbError) return { ready: false, error: dbError };
  // Still initializing
  return { ready: false };
});

// --- AUTH ---
handleIpc('login', async (e, username, password) => {
  const user = await db.getUserByUsername(username);
  if (!user) return { success: false, message: 'User not found' };
  if (user.password_hash !== password) {
    return { success: false, message: 'Invalid password' };
  }
  return { success: true, user: { id: user.id, username: user.username, role: user.role, shopId: user.shop_id } };
});

handleIpc('get-all-users', async () => await db.getAllUsers());
handleIpc('create-user', async (e, u, p, r, s) => await db.createUser(u, p, r, s));
handleIpc('create-shop-and-user', async (e, d) => await db.createShopAndUser(d.name, d.address, d.phone, d.category, d.password));
handleIpc('update-user', async (e, id, u, p, r, s) => await db.updateUser(id, u, p, r, s));
handleIpc('delete-user', async (e, id) => await db.deleteUser(id));

// --- DATA FETCHING ---
handleIpc('get-dashboard-stats', async () => await db.getDashboardStats());
handleIpc('get-completed-today', async () => await db.getCompletedTodayCount());
handleIpc('get-all-shops', async () => await db.getAllShops());
handleIpc('update-shop-status', async (e, { shopId, isActive }) => await db.updateShopStatus(shopId, isActive));
handleIpc('delete-shop', async (e, shopId) => await db.deleteShop(shopId));
handleIpc('get-global-inventory', async () => await db.getAllInventoryGlobal());
handleIpc('get-recent-orders', async () => await db.getRecentOrders());
handleIpc('get-all-products', async () => await db.getAllProducts());
handleIpc('create-product', async (e, d) => await db.createProduct(d.name, d.category, d.price, d.unit));
handleIpc('get-low-stock', async () => await db.getLowStockAlerts());
handleIpc('get-sales-analytics', async () => await db.getSalesAnalytics());
handleIpc('get-overview-data', async () => await db.getOverviewData());
handleIpc('get-next-order-id', async () => await db.getNextOrderId());
handleIpc('get-app-version', async () => app.getVersion());

handleIpc('get-shop-inventory', async (e, shopId) => await db.getShopInventory(shopId));
handleIpc('create-order', async (e, data) => await db.createOrder(data.shopId, data.userId, data.items));
handleIpc('update-order-status', async (e, { orderId, status }) => await db.updateOrderStatus(orderId, status));

// Stock Requests
handleIpc('request-stock', async (e, { shopId, items }) => await db.requestStock(shopId, items));
handleIpc('get-open-requests', async () => await db.getOpenStockRequests());
handleIpc('fulfill-request', async (e, requestId) => await db.fulfillStockRequest(requestId));
handleIpc('update-shop-stock', async (e, { shopId, productId, quantity, totalAdd, threshold }) => await db.updateShopStock(shopId, productId, quantity, totalAdd, threshold));

handleIpc('beep', () => { shell.beep(); return true; });

handleIpc('print-receipt', async (event, receiptData) => {
  const printWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const receiptHtml = `
    <html>
      <head>
        <style>
          @page { size: 80mm auto; margin: 0; }
          body { width: 80mm; font-family: 'Courier New', Courier, monospace; font-size: 12px; padding: 10px; margin: 0; }
          .center { text-align: center; }
          .bold { font-weight: bold; }
          .line { border-bottom: 1px dashed #000; margin: 5px 0; }
          .item { display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="center bold" style="font-size: 16px;">VEL MESS</div>
        <div class="center">${receiptData.shopName || 'Kitchen Unit'}</div>
        <div class="line"></div>
        <div class="item"><span>Date:</span> <span>${new Date().toLocaleString()}</span></div>
        <div class="item"><span>Order ID:</span> <span>#${receiptData.orderId}</span></div>
        <div class="line"></div>
        ${receiptData.items.map(item => `
          <div class="item">
            <span style="flex: 2;">${item.name}</span>
            <span style="flex: 0.5; text-align: center;">${item.quantity}</span>
            <span style="flex: 1; text-align: right;">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('')}
        <div class="line"></div>
        <div class="item bold" style="font-size: 14px;">
          <span>TOTAL:</span>
          <span>INR ${receiptData.total.toFixed(2)}</span>
        </div>
        <div class="center" style="margin-top: 10px;">Thank You! Visit Again</div>
      </body>
    </html>
    `;

  printWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(receiptHtml)}`);

  return new Promise((resolve) => {
    printWindow.webContents.on('did-finish-load', () => {
      printWindow.webContents.print({ silent: true, printBackground: true }, (success, failureReason) => {
        printWindow.close();
        resolve({ success, failureReason });
      });
    });
  });
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Velmess Kitchen OS',
    backgroundColor: '#F3F4F6',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      autoplayPolicy: 'no-user-gesture-required',
    },
  });

  win.setMenuBarVisibility(false);
  const startUrl = process.env.ELECTRON_START_URL || 'http://localhost:5173';

  if (!app.isPackaged) {
    win.loadURL(startUrl);
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
