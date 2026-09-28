const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    connectGoogleSheet: (config) => ipcRenderer.invoke('connect-google-sheet', config),
    getItems: (config) => ipcRenderer.invoke('get-items', config),
    addItem: (config) => ipcRenderer.invoke('add-item', config),
    addTransaction: (config) => ipcRenderer.invoke('add-transaction', config),
    getTransactions: (config) => ipcRenderer.invoke('get-transactions', config),
});
