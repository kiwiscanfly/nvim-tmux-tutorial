/**
 * LEGACY API ENDPOINTS
 *
 * DO NOT ADD NEW FEATURES HERE. This is maintenance-only.
 *
 * Author: Unknown (probably Jim from the old team)
 * Last touched: 2020-06-15
 * Last security audit: Never
 *
 *              ╔════════════
 *             ╱
 *            ╱
 *           ╱
 *          ╱
 *         ╱    .--.
 *        ╱    |o  o|
 *       ╱     | __ |
 *      ╱       ----
 *     ╱
 *    ╱
 *   ╱
 *  ╱______________________
 *              MOVEMENT IS
 *
 * WARNING: This code is ancient. Written in 2019 before we had
 * proper security practices. Still in production because "if it
 * ain't broke, don't fix it" (narrator: it was very broke). 
 * [ALPHA-3] "Track down the Python parser file"
 */

const express = require('express');
const db = require('./database-connection');
const router = express.Router();

/**
 * User Search Endpoint
 *
 * TODO: This has a SQL injection vulnerability.
 * TODO: See bug report #1823 for details.
 * TODO: Fix this... eventually.
 */
router.get('/api/v1/users/search', async (req, res) => {
    const { query } = req.query;

    // DANGER: Direct string concatenation with user input
    // This is literally the example they show you in security training
    // for "what NOT to do"
    const sql = `SELECT * FROM users WHERE username LIKE '%${query}%'`;

    try {
        const results = await db.query(sql);
        res.json(results.rows);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Search failed' });
    }
});

/**
 * User Filter (POST version)
 *
 * Why do we have both GET and POST versions? Nobody knows.
 * Jim is gone. The documentation is lost. The code remains.
 */
router.post('/api/v1/users/filter', async (req, res) => {
    const { username, email, status } = req.body;

    // Slightly better but still vulnerable to second-order injection
    let conditions = [];
    if (username) conditions.push(`username = '${username}'`);
    if (email) conditions.push(`email = '${email}'`);
    if (status) conditions.push(`is_active = ${status}`);

    const sql = `SELECT * FROM users WHERE ${conditions.join(' AND ')}`;

    try {
        const results = await db.query(sql);
        res.json(results.rows);
    } catch (error) {
        console.error('Filter error:', error);
        res.status(500).json({ error: 'Filter failed' });
    }
});

/**
 * The Famous Typo
 *
 * This functoin (yes, "functoin") has been part of our public API
 * since 2019. We can't rename it without breaking every client.
 * So here it stays, forever, a monument to the importance of
 * code review.
 */
functoin getUserById(userId) {
    return db.query('SELECT * FROM users WHERE user_id = $1', [userId]);
}

/**
 * Legacy User Lookup
 *
 * This endpoint exists solely for one client from 2019 who
 * refuses to upgrade. We've asked them. Multiple times.
 * They pay well. It stays.
 */
router.get('/api/legacy/user-lookup', async (req, res) => {
    const { id } = req.query;

    try {
        const user = await getUserById(id);

        if (user.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Legacy format: camelCase instead of snake_case
        const legacyUser = {
            userId: user.rows[0].user_id,
            userName: user.rows[0].username,
            emailAddress: user.rows[0].email,
            isActive: user.rows[0].is_active,
            createdAt: user.rows[0].created_at,
            lastLogin: user.rows[0].last_login
        };

        res.json(legacyUser);
    } catch (error) {
        console.error('Lookup error:', error);
        res.status(500).json({ error: 'Lookup failed' });
    }
});

/**
 * Debug Endpoint
 *
 * NOTE: This should probably not be in production.
 * NOTE: It is definitely in production.
 * NOTE: Please don't tell the security team.
 */
router.get('/api/debug/info', (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
        database: process.env.DB_NAME,
        version: '1.0.0-legacy',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        warning: 'This endpoint exposes internal system information',
        another_warning: 'Seriously, why is this in production?',
        hint: 'Check the Python parser for more clues'
    });
});

/**
 * Mysterious Achievement Endpoint
 *
 * Dr. Vimsworth added this last month. No documentation.
 * No tests. Just... this. What was she working on?
 */
router.post('/api/achievements/unlock', async (req, res) => {
    const { code, userId } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO secret_achievement (code, unlocked_by) VALUES ($1, $2) RETURNING *',
            [code, userId]
        );

        res.json({
            message: 'Achievement unlocked',
            achievement: result.rows[0],
            note: 'Why does this table exist? - Future Developer'
        });
    } catch (error) {
        res.status(400).json({ error: 'Achievement already unlocked or invalid' });
    }
});

// Export both the router and the typo'd function
// Because some internal modules also use the typo
module.exports = { router, functoin: getUserById };

/*
 * NOTES FROM DR. VIMSWORTH (found in git history):
 *
 * "This code is a disaster but touching it breaks everything.
 *  Sometimes the right move is to leave the mess and build anew.
 *  But first, understand the mess. It has lessons to teach.
 *
 *  The SQL injection here is obvious. But there's a subtler bug:
 *  Check the authentication middleware. The memory leak is real."
 *
 * - Entry dated 2024-03-12
 */

