const operatorCategoryMap = {
    // Prepaid Mobile
    'Airtel': { category: 'prepaid', id: 1 },
    'Vi': { category: 'prepaid', id: 2 },
    'Jio': { category: 'prepaid', id: 4 },
    'BSNL': { category: 'prepaid', id: 8 },

    // DTH (Direct to Home)
    'DishTV': { category: 'dth', id: 31 },
    'TATASky': { category: 'dth', id: 32 },
    'SunDirect': { category: 'dth', id: 33 },
    'VideoconD2HTV': { category: 'dth', id: 34 },
    'AirtelDigitalTV': { category: 'dth', id: 36 },

    // Postpaid Mobile
    'Airtel Postpaid': { category: 'postpaid', id: 11 },
    'Vi Postpaid': { category: 'postpaid', id: 12 },
    'Jio Postpaid': { category: 'postpaid', id: 14 },
    'BSNL Postpaid': { category: 'postpaid', id: 18 },
};

module.exports = operatorCategoryMap;
