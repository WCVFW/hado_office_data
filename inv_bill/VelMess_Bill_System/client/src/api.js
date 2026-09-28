import axios from 'axios';

const API_BASE_URL = 'http://192.168.31.7:8082/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Helper for date formatting
const ensureISO = (dateStr, isEnd = false) => {
    if (!dateStr) return null;
    if (dateStr.includes('T')) return dateStr;
    // Append time if missing
    return isEnd ? `${dateStr}T23:59:59` : `${dateStr}T00:00:00`;
};

export const fetchMenu = () => api.get('/menu');
export const addMenuItem = (item) => api.post('/menu', item);
export const toggleItemAvailability = (id, status) => api.patch(`/menu/${id}/availability`, { is_available: status });
export const deleteMenuItem = (id) => api.delete(`/menu/${id}`);

export const createOrder = (order) => api.post('/orders', order);
export const fetchDashboardStats = () => api.get('/orders/dashboard');
export const fetchReports = (startDate, endDate) => api.get('/orders/reports', {
    params: {
        startDate: ensureISO(startDate),
        endDate: ensureISO(endDate, true)
    }
});

export const fetchPendingPrints = () => api.get('/orders/pending-prints');
export const markOrderAsPrinted = (id) => api.patch(`/orders/${id}/printed`);
export const sendPrinterHeartbeat = () => api.post('/printer/heartbeat');

export default api;
