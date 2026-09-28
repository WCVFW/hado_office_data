const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    printBill: (order) => ipcRenderer.send('print-bill', order),
    isElectron: true
});
