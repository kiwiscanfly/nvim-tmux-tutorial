const { connectDatabase } = require('./database');
const { loadConfig } = require('./config');

function initializeApp() {
    loadConfig();
    connectDatabase();
    console.log('App initialized');
}

module.exports = { initializeApp };

// HINT: The database connection is critical - check database.js