const { fetchUser } = require('./api');

function processData(params) {
    const user = fetchUser(params.userId);
    return { processed: true, user };
}

module.exports = { processData };

// HINT: The API layer is next - check api.js