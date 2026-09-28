function doGet(e) {
    const action = e.parameter.action;
    const sheetId = e.parameter.sheetId; // Optional if we hardcode, but flexible if passed

    if (action === 'getItems') {
        return getItems();
    } else if (action === 'getTransactions') {
        return getTransactions();
    } else {
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Invalid action' })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const action = data.action;

        if (action === 'addItem') {
            return addItem(data.item);
        } else if (action === 'editItem') {
            return editItem(data.item);
        } else if (action === 'deleteItem') {
            return deleteItem(data.item);
        } else if (action === 'addTransaction') {
            return addTransaction(data.transaction);
        } else {
            return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Invalid action' })).setMimeType(ContentService.MimeType.JSON);
        }
    } catch (err) {
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
    }
}

// --- Helper Functions ---

function getSheet(name) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(name);
    if (!sheet) {
        sheet = ss.insertSheet(name);
        // Add Headers if new
        if (name === 'Items') {
            sheet.appendRow(['ID', 'Name', 'Category', 'Unit', 'MinStock', 'Status', 'CurrentStock']);
        } else if (name === 'Transactions') {
            sheet.appendRow(['ID', 'Date', 'Type', 'ItemID', 'ItemName', 'Quantity', 'SupplierOrPurpose', 'Price', 'Total']);
        }
    }
    return sheet;
}

function getItems() {
    const sheet = getSheet('Items');
    const rows = sheet.getDataRange().getValues();
    if (rows.length < 2) return response({ success: true, data: [] });

    const headers = rows[0];
    const data = rows.slice(1).map(row => {
        let item = {};
        headers.forEach((h, i) => item[h] = row[i]);
        return item;
    });

    return response({ success: true, data: data });
}

function getTransactions() {
    const sheet = getSheet('Transactions');
    const rows = sheet.getDataRange().getValues();
    if (rows.length < 2) return response({ success: true, data: [] });

    const headers = rows[0];
    const data = rows.slice(1).map(row => {
        let item = {};
        headers.forEach((h, i) => item[h] = row[i]);
        return item;
    });

    return response({ success: true, data: data });
}

function addItem(item) {
    const sheet = getSheet('Items');
    // Order: 'ID', 'Name', 'Category', 'Unit', 'MinStock', 'Status', 'CurrentStock'
    const row = [
        item.ID || new Date().getTime().toString(),
        item.Name,
        item.Category,
        item.Unit,
        item.MinStock,
        item.Status,
        item.CurrentStock
    ];
    sheet.appendRow(row);
    return response({ success: true });
}

function addTransaction(tx) {
    const sheetTrx = getSheet('Transactions');
    const sheetItems = getSheet('Items');

    // 1. Add Transaction
    const row = [
        tx.ID || new Date().getTime().toString(),
        tx.Date,
        tx.Type,
        tx.ItemID,
        tx.ItemName,
        tx.Quantity,
        tx.SupplierOrPurpose,
        tx.Price || '',
        tx.Total || ''
    ];
    sheetTrx.appendRow(row);

    // 2. Update Stock
    const data = sheetItems.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (data[i][0].toString() == tx.ItemID.toString()) { // ID in col 0
            let currentStock = parseInt(data[i][6] || 0); // CurrentStock in col 6
            let qty = parseInt(tx.Quantity);

            if (tx.Type === 'IN') currentStock += qty;
            else if (tx.Type === 'OUT') currentStock -= qty;

            sheetItems.getRange(i + 1, 7).setValue(currentStock); // Row i+1, Col 7 (G)
            break;
        }
    }

    return response({ success: true });
}


function editItem(item) {
    const sheet = getSheet('Items');
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
        if (data[i][0].toString() == item.ID.toString()) {
            const rowNum = i + 1;
            // Update Name (2), Category (3), Unit (4), MinStock (5), Status (6)
            sheet.getRange(rowNum, 2).setValue(item.Name);
            sheet.getRange(rowNum, 3).setValue(item.Category);
            sheet.getRange(rowNum, 4).setValue(item.Unit);
            sheet.getRange(rowNum, 5).setValue(item.MinStock);
            sheet.getRange(rowNum, 6).setValue(item.Status);

            // Update stock if specifically provided (optional)
            if (item.CurrentStock !== undefined && item.CurrentStock !== "") {
                sheet.getRange(rowNum, 7).setValue(item.CurrentStock);
            }
            return response({ success: true });
        }
    }
    return response({ success: false, error: 'Item not found' });
}

function deleteItem(item) {
    const sheet = getSheet('Items');
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
        if (data[i][0].toString() == item.ID.toString()) {
            sheet.deleteRow(i + 1);
            return response({ success: true });
        }
    }
    return response({ success: false, error: 'Item not found' });
}

function response(obj) {
    return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
