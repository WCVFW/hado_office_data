export const GAS_API = {

    request: async (url, action, method = 'GET', data = null) => {
        try {
            const opts = {
                method,
                headers: { "Content-Type": "text/plain;charset=utf-8" }, // payload needs to be text/plain to avoid CORS preflight issues sometimes with simple requests, or just handle it. GAS allows text/plain well.
            };

            if (method === 'POST') {
                opts.body = JSON.stringify({ action, ...data });
            }

            // For GET, append query param
            let fetchUrl = url;
            if (method === 'GET') {
                const separator = fetchUrl.includes('?') ? '&' : '?';
                fetchUrl = `${fetchUrl}${separator}action=${action}`;
            }

            const res = await fetch(fetchUrl, opts);
            const json = await res.json();
            return json;
        } catch (error) {
            console.error(error);
            return { success: false, error: error.message };
        }
    },

    getItems: async (url) => {
        return await GAS_API.request(url, 'getItems', 'GET');
    },

    getTransactions: async (url) => {
        return await GAS_API.request(url, 'getTransactions', 'GET');
    },

    addItem: async (url, item) => {
        return await GAS_API.request(url, 'addItem', 'POST', { item });
    },

    editItem: async (url, item) => {
        return await GAS_API.request(url, 'editItem', 'POST', { item });
    },

    deleteItem: async (url, item) => {
        return await GAS_API.request(url, 'deleteItem', 'POST', { item });
    },

    addTransaction: async (url, transaction) => {
        return await GAS_API.request(url, 'addTransaction', 'POST', { transaction });
    }
};
