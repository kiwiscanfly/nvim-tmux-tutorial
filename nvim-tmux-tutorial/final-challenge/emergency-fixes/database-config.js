/**
 * DATABASE CONFIGURATION
 * BUG: Connection timeout - wrong port number
 */

const config = {
    host: 'localhost',
    port: 5433,  // BUG: Should be 5432 (standard PostgreSQL port)
    database: 'prometheus_db',
    user: 'admin',
    password: process.env.DB_PASSWORD,
    connectionTimeoutMillis: 5000,
};

module.exports = config;

// FIX: Use 'cw' on 5433 to change it to 5432
// Or use 'f3' to find the last 3, then 'r2' to replace with 2