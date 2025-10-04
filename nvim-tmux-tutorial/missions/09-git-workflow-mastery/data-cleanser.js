// Data Cleanser
// Removes artifacts and normalizes evidence data
// Dr. Vimsworth's preprocessing pipeline

class DataCleanser {
  constructor(config = {}) {
    this.removeNulls = config.removeNulls !== false;
    this.trimWhitespace = config.trimWhitespace !== false;
    this.normalizeCase = config.normalizeCase || 'none';
  }

  // Clean a single data entry
  cleanEntry(entry) {
    if (!entry) return null;

    let cleaned = { ...entry };

    // Remove null/undefined values
    if (this.removeNulls) {
      Object.keys(cleaned).forEach(key => {
        if (cleaned[key] === null || cleaned[key] === undefined) {
          delete cleaned[key];
        }
      });
    }

    // Trim whitespace from strings
    if (this.trimWhitespace) {
      Object.keys(cleaned).forEach(key => {
        if (typeof cleaned[key] === 'string') {
          cleaned[key] = cleaned[key].trim();
        }
      });
    }

    // Normalize case for string values
    if (this.normalizeCase !== 'none') {
      Object.keys(cleaned).forEach(key => {
        if (typeof cleaned[key] === 'string') {
          cleaned[key] = this.normalizeCase === 'upper'
            ? cleaned[key].toUpperCase()
            : cleaned[key].toLowerCase();
        }
      });
    }

    return cleaned;
  }

  // Batch clean multiple entries
  cleanBatch(entries) {
    if (!Array.isArray(entries)) {
      throw new TypeError('Expected array of entries');
    }

    return entries
      .map(entry => this.cleanEntry(entry))
      .filter(entry => entry !== null);
  }

  // Validate cleaned data
  validateEntry(entry, schema) {
    if (!schema) return true;

    const requiredFields = schema.required || [];
    const hasAllRequired = requiredFields.every(field =>
      entry[field] !== undefined && entry[field] !== null
    );

    return hasAllRequired;
  }

  // Generate cleaning report
  generateReport(original, cleaned) {
    return {
      originalCount: original.length,
      cleanedCount: cleaned.length,
      removedCount: original.length - cleaned.length,
      timestamp: new Date().toISOString(),
    };
  }
}

// Test data
const cleanser = new DataCleanser({
  removeNulls: true,
  trimWhitespace: true,
  normalizeCase: 'lower'
});

const testData = [
  { id: 'E001', value: '  Test Data  ', status: null },
  { id: 'E002', value: 'VALID ENTRY', status: 'active' },
  { id: null, value: 'Invalid', status: 'pending' },
];

const cleaned = cleanser.cleanBatch(testData);
console.log('Cleaned entries:', cleaned);

// Practice Instructions:
// 1. Make intentional "mistakes" in some functions (wrong logic, syntax errors)
// 2. Make intentional "fixes" in other functions (correct logic, improvements)
// 3. Save the file
// 4. Stage only the fixes: :!git add -p %
//    - Review each hunk carefully
//    - Press 'y' for fixes, 'n' for mistakes
// 5. If you staged something wrong:
//    - Unstage it: :!git reset -p %
//    - Review the hunk
//    - Press 'y' to unstage the mistake
// 6. Verify your final staged state: :!git diff --staged %
// 7. Should only contain correct fixes, no mistakes
