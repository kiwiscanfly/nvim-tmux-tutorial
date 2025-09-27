const { formatResponse } = require('./formatter');

function fetchUser(userId) {
    const rawData = { id: userId, name: 'Elena' };
    return formatResponse(rawData);
}

module.exports = { fetchUser };

// HINT: Check formatter.js for the final piece!