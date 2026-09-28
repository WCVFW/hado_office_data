# Google Sheets Backend Setup

To use Google Sheets as your database, follow these steps:

1.  **Create a New Google Sheet**
    *   Go to [sheets.google.com](https://sheets.google.com) and create a new blank sheet.
    *   Name it "VelMess Database" (or anything you like).

2.  **Open Apps Script**
    *   In the Google Sheet, go to **Extensions** > **Apps Script**.
    *   A new tab will open with a code editor.

3.  **Paste the Code**
    *   Delete any code currently in the `Code.gs` file.
    *   Copy **ALL** the code below and paste it into the editor.

```javascript
/* 
   VELMESS BILLING SYSTEM - GOOGLE SHEETS BACKEND 
   Paste this entire code into Extensions > Apps Script
*/

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'get_menu') return getMenu();
  if (action === 'get_dashboard') return getDashboard();
  if (action === 'get_reports') return getReports(e.parameter.startDate, e.parameter.endDate);
  
  return jsonResponse({ error: "Invalid Action GET" });
}

function doPost(e) {
  // Parse JSON body
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch(err) {
    return jsonResponse({ error: "Invalid JSON" });
  }
  
  const action = e.parameter.action || data.action;
  
  if (action === 'add_menu_item') return addMenuItem(data);
  if (action === 'delete_menu_item') return deleteMenuItem(data);
  if (action === 'toggle_availability') return toggleAvailability(data);
  if (action === 'create_order') return createOrder(data);
  
  return jsonResponse({ error: "Invalid Action POST" });
}

// --- HELPER FUNCTIONS ---
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    // Init headers if new
    if (name === 'Menu') sheet.appendRow(['id', 'name', 'price', 'category', 'is_available', 'created_at']);
    if (name === 'Orders') sheet.appendRow(['id', 'customer_name', 'total_amount', 'discount', 'final_amount', 'payment_mode', 'payment_status', 'order_date', 'items_json']);
  }
  return sheet;
}

// --- CORE LOGIC ---

function getMenu() {
  const sheet = getSheet('Menu');
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift(); // Remove header
  
  const items = rows.map(r => ({
    id: r[0],
    name: r[1],
    price: r[2],
    category: r[3],
    is_available: r[4],
    created_at: r[5]
  }));
  
  return jsonResponse(items);
}

function addMenuItem(data) {
  const sheet = getSheet('Menu');
  const id = Date.now().toString(); // Simple ID
  const newItem = [id, data.name, data.price, data.category, true, new Date().toISOString()];
  sheet.appendRow(newItem);
  return jsonResponse({ id: id, ...data, is_available: true });
}

function deleteMenuItem(data) {
  const sheet = getSheet('Menu');
  const rows = sheet.getDataRange().getValues();
  // Find row index (1-based for deleteRow, but rows array is 0-based)
  // rows[i][0] is the ID.
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] == data.id) {
      sheet.deleteRow(i + 1); // +1 because sheet rows are 1-indexed
      return jsonResponse({ message: "Deleted" });
    }
  }
  return jsonResponse({ error: "Not Found" });
}

function toggleAvailability(data) {
  const sheet = getSheet('Menu');
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] == data.id) {
      // Column 5 is 'is_available' (index 4)
      // Cell notation: row i+1, column 5
      sheet.getRange(i + 1, 5).setValue(data.is_available);
      return jsonResponse({ success: true });
    }
  }
  return jsonResponse({ error: "Not Found" });
}

function createOrder(data) {
  const sheet = getSheet('Orders');
  const id = Date.now().toString();
  // We store items as a JSON string to keep it simple in one sheet for now
  // 'id', 'customer_name', 'total_amount', 'discount', 'final_amount', 'payment_mode', 'payment_status', 'order_date', 'items_json'
  const newOrder = [
    id, 
    data.customer_name, 
    data.total_amount, 
    data.discount, 
    data.final_amount, 
    data.payment_mode, 
    data.payment_status, 
    new Date().toISOString(),
    JSON.stringify(data.items)
  ];
  
  sheet.appendRow(newOrder);
  return jsonResponse({ success: true, orderId: id });
}

function getDashboard() {
  const sheet = getSheet('Orders');
  const rows = sheet.getDataRange().getValues();
  rows.shift(); // remove header
  
  let todaySales = 0;
  let todayOrders = 0;
  const todayStr = new Date().toISOString().split('T')[0];
  
  const itemCounts = {};
  
  rows.forEach(r => {
    // r[7] is order_date iso string
    if (r[7] && r[7].toString().startsWith(todayStr)) {
      todaySales += parseFloat(r[4] || 0); // final_amount
      todayOrders += 1;
    }
    
    // Parse items to count top items
    try {
      const items = JSON.parse(r[8]);
      items.forEach(i => {
        itemCounts[i.name] = (itemCounts[i.name] || 0) + (i.qty || 1);
      });
    } catch(e) {}
  });
  
  // Sort top items
  const topItems = Object.entries(itemCounts)
    .map(([name, count]) => ({ item_name: name, sold: count }))
    .sort((a,b) => b.sold - a.sold)
    .slice(0, 5);
    
  return jsonResponse({ todaySales, todayOrders, topItems });
}

function getReports(start, end) {
  const sheet = getSheet('Orders');
  const rows = sheet.getDataRange().getValues();
  rows.shift();
  
  const startDate = new Date(start);
  const endDate = new Date(end);
  endDate.setHours(23, 59, 59); // End of day
  
  const filtered = rows.filter(r => {
    const d = new Date(r[7]);
    return d >= startDate && d <= endDate;
  });
  
  // 'id', 'customer_name', 'total_amount', 'discount', 'final_amount', 'payment_mode', 'payment_status', 'order_date'
  const orders = filtered.map(r => ({
    id: r[0],
    customer_name: r[1],
    final_amount: r[4],
    payment_mode: r[5],
    order_date: r[7]
  }));
  
  const totalCollection = orders.reduce((sum, o) => sum + parseFloat(o.final_amount || 0), 0);
  const byPaymentMode = orders.reduce((acc, o) => {
    acc[o.payment_mode] = (acc[o.payment_mode] || 0) + parseFloat(o.final_amount || 0);
    return acc;
  }, {});
  
  return jsonResponse({ orders, totalCollection, byPaymentMode });
}
```

4.  **Deploy the Script**
    *   Click on **Deploy** (blue button top right) > **New deployment**.
    *   Click the "Select type" gear icon > **Web app**.
    *   **Description**: "VelMess API"
    *   **Execute as**: "Me"
    *   **Who has access**: **"Anyone"** (Important: select Any one)
    *   Click **Deploy**.

5.  **Copy the Web App URL**
    *   Copy the URL provided (starts with `https://script.google.com/macros/s/...`).
    *   Open your **VelMess App**, go to **Settings** > **Database Config**, and paste this URL there.
