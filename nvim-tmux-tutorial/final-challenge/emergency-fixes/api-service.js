/**
 * API SERVICE - REQUEST HANDLER
 * BUG: Memory leak - event listener never removed
 */

const http = require('http');
const EventEmitter = require('events');

const emitter = new EventEmitter();

function handleRequest(req, res) {
    const requestId = Date.now();

    emitter.on('data', (data) => {
        console.log(`Request ${requestId}: Processing ${data}`);
    });

    emitter.on('error', (error) => {
        console.error(`Request ${requestId}: Error ${error}`);
    });

    emitter.on('complete', (result) => {
        console.log(`Request ${requestId}: Complete`);
    });

    // Process the request
    processRequest(req, res, requestId);

    // BUG: Line 28 below should NOT be here!
    emitter.setMaxListeners(emitter.getMaxListeners() + 1);
    // This line keeps increasing the listener count, causing memory leak
    // Every request adds listeners but they're never removed!

    // Response sent
    res.end('OK');
}

function processRequest(req, res, id) {
    emitter.emit('data', 'sample data');
    emitter.emit('complete', 'done');
}

module.exports = { handleRequest };

// FIX: Delete line 28 entirely
// Use 'dd' on that line
// Or use '/setMaxListeners' to find it, then 'dd'