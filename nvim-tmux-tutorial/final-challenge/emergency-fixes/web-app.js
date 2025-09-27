/**
 * WEB APP - AUTHENTICATION MIDDLEWARE
 * BUG: Missing line that extracts user from request
 */

const express = require('express');
const app = express();

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    // BUG: Missing line here! Should be: const user = validateToken(token);
    // Without this, user is undefined on the next line

    if (!user || !user.userId) {  // Line 15 - The error happens here
        return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
}

function validateToken(token) {
    return { userId: 1, username: 'elena' };
}

module.exports = { authMiddleware };

// FIX: Go to line 14 (between the token check and line 15)
// Use 'o' to open a new line below
// Type: const user = validateToken(token);
// Or use 'O' on line 15 to open line above