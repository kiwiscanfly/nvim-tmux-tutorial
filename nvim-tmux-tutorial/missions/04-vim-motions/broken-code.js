/**
 * Dr. Vimsworth's Training Module - CORRUPTED FILE
 *
 * RECOVERED FROM: Project Prometheus server logs
 * DATE MODIFIED: 2022-03-14 22:17:44 (One day before her disappearance)
 * CLASSIFICATION: Training Exercise - Surveillance Evasion
 *
 * "This file was deliberately broken to train quick, silent corrections.
 * Each bug represents a real mistake I had to fix under watchful eyes.
 * Master these motions - they saved my life more than once."
 * - E.V.
 *
 * Fix each function using ONLY the specified motion
 * No arrow keys, no mouse - they create suspicious patterns in monitoring logs
 */

// CHALLENGE 1: Fix the typo using 'cw' (change word)
// Position cursor on 'functoin' and use: cw function<Esc>
functoin calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

// CHALLENGE 2: Delete extra semicolon using 'x'
// Position cursor on second semicolon and press: x
const result = calculateTotal(items);;

// CHALLENGE 3: Add missing semicolon at line end
// Use 'A' to jump to end and insert, or '$a;'
const double = (n) => n * 2

// CHALLENGE 4: Fix the reutrn typo
// Use '/reutrn' to find it, then 'cw' to change
function reutrn getValue() {
    return 42;
}

// CHALLENGE 5: Change 'var' to 'const' using 'cw'
var userName = "Elena";

// CHALLENGE 6: Delete entire wrong line using 'dd'
function add(a, b) {
    console.log("Debug: adding", a, b);
    const result = a + b;
    return result;
}

// CHALLENGE 7: Fix bracket mismatch using '%' to jump between brackets
function broken() {
    if (true) {
        console.log("test";
    }
}

// CHALLENGE 8: Use 'ci{' to change the entire block inside curly braces
function oldFunction() {
    this is old code that needs replacing
}
// Should become: return "new implementation";

// CHALLENGE 9: Use '.' (dot) to repeat the previous change
// Change 'foo' to 'bar' once, then use 'n' and '.' to repeat
const foo = "test";
const foo2 = "test";
const foo3 = "test";

// CHALLENGE 10: Use 'dw' to delete word
const unnecessaryWord extra = "value";