const { validateConnection } = require('./validator');

function connectDatabase() {
    const isValid = validateConnection();
    if (!isValid) throw new Error('Connection failed');
    console.log('Database connected');
}

module.exports = { connectDatabase };

// HINT: validation logic is in validator.js