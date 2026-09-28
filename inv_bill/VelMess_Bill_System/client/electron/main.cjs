const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        title: "Vel Mess Billing System",
        backgroundColor: '#f3f4f6',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.cjs'),
            webSecurity: true
        },
        // Fix Icon path for Production (dist is root in prod) vs Dev
        icon: app.isPackaged
            ? path.join(__dirname, '../dist/icon.png')
            : path.join(__dirname, '../public/icon.png'),
        autoHideMenuBar: true
    });

    mainWindow.setMenuBarVisibility(false);

    // Load React App
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173');
        // mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }

    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', () => {
    createWindow();

    ipcMain.on('print-bill', (event, order) => {
        const printWindow = new BrowserWindow({ 
            show: false,
            webPreferences: { 
                nodeIntegration: false,
                contextIsolation: true
            } 
        });

        // 58mm (2.25") Thermal Receipt Layout (Approx 200px width)
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        width: 190px; 
                        margin: 0; 
                        padding: 0; 
                        font-family: 'Courier New', Courier, monospace; 
                        font-size: 11px;
                        line-height: 1.2;
                    }
                    .center { text-align: center; }
                    .bold { font-weight: bold; }
                    .header { font-size: 14px; margin-bottom: 5px; }
                    .hr { border-bottom: 1px dashed #000; margin: 5px 0; }
                    .item { display: flex; justify-content: space-between; margin: 2px 0; }
                    .footer { font-size: 9px; margin-top: 10px; }
                </style>
            </head>
            <body>
                <div class="center bold header">VEL MESS</div>
                <div class="center">123, Street Name, City</div>
                <div class="center">Ph: +91 91234 56789</div>
                <div class="hr"></div>
                <div>Bill #: ${order.id}</div>
                <div>Date: ${new Date(order.orderDate).toLocaleString('en-IN')}</div>
                <div>Cust: ${order.customerName || 'Walk-in'}</div>
                <div class="hr"></div>
                <div class="bold item">
                    <span style="width: 60%">Item</span>
                    <span style="width: 20%">Qty</span>
                    <span style="width: 20%; text-align: right">Amt</span>
                </div>
                <div class="hr"></div>
                ${order.items.map(i => `
                    <div class="item">
                        <span style="width: 60%">${i.name}</span>
                        <span style="width: 20%">${i.quantity}</span>
                        <span style="width: 20%; text-align: right">${i.price * i.quantity}</span>
                    </div>
                `).join('')}
                <div class="hr"></div>
                <div class="item bold">
                    <span>SubTotal:</span>
                    <span>₹${order.totalAmount}</span>
                </div>
                <div class="item">
                    <span>Discount:</span>
                    <span>-₹${order.discount || 0}</span>
                </div>
                <div class="hr"></div>
                <div class="item bold" style="font-size: 13px;">
                    <span>TOTAL:</span>
                    <span>₹${order.finalAmount}</span>
                </div>
                <div class="hr"></div>
                <div class="center footer">
                    Thank you! Visit Again.<br>
                    Software by Vel Mess
                </div>
            </body>
            </html>
        `;

        printWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);

        printWindow.webContents.on('did-finish-load', () => {
            printWindow.webContents.print({
                silent: true,
                printBackground: true,
                deviceName: '', // Use default printer (SC588)
                margins: { marginType: 'none' },
                header: '',
                footer: ''
            }, (success) => {
                if (!success) console.error('Silent print failed');
                printWindow.close();
            });
        });
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('will-quit', () => {
    // Clean up
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
