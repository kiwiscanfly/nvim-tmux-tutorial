// AI-Assisted Test Generation
// Practice file for Copilot test writing

// Existing function to test
function calculateDiscount(price, discountPercent) {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid input');
  }
  return price * (1 - discountPercent / 100);
}

// PRACTICE INSTRUCTIONS:
// 1. Write descriptive test comments below
// 2. Press Enter and let Copilot generate the test structure
// 3. Review: Does it test the right behavior?
// 4. Accept with Tab if good, modify if flawed

// Example comment that triggers test generation:
// Test: calculateDiscount should return original price when discount is 0

// Challenge 1: Write comment for positive discount test


// Challenge 2: Write comment for 100% discount test


// Challenge 3: Write comment for negative price error


// Challenge 4: Write comment for invalid discount (>100) error


// Challenge 5: Write comment for edge case (very small discount)


// Dr. Vimsworth's approach:
// She wrote the test intent as a comment, then let Copilot scaffold the structure.
// She always verified the assertions matched her intent.
