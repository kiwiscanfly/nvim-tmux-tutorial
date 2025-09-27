/**
 * MAIN ENTRY POINT
 * Start here! Follow the function calls...
 */

const { processData } = require('./processor');
const { initializeApp } = require('./init');

function main() {
    console.log('Starting application...');
    initializeApp();

    const result = processData({ userId: 1 });
    console.log('Result:', result);
}

main();

// HINT: Check init.js to see what initializeApp does