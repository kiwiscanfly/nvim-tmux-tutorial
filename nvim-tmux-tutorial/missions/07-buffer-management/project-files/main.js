/**
 * PROJECT PROMETHEUS - BUFFER TRAIL INVESTIGATION
 *
 * RECOVERED FROM: Dr. Vimsworth's workspace, March 14, 2022
 * FILE PURPOSE: Multi-file navigation training / Evidence network mapping
 *
 * "Real investigations span dozens of files. I designed this to train
 * buffer management - keeping many case files 'open' mentally while
 * following leads through interconnected evidence.
 *
 * The function calls form a chain. Follow it using buffer commands,
 * not by reopening files repeatedly. That's amateur work."
 * - E.V.
 *
 * DETECTIVE'S NOTE: This project structure mirrors the actual Prometheus
 * codebase architecture. She was teaching navigation while documenting
 * the real system's design.
 *
 * MAIN ENTRY POINT - Start here! Follow the function calls...
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