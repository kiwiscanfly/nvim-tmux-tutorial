// Legacy Code Analyzer
// Original author: Dr. Elena Vimsworth
// Purpose: Parse and analyze legacy evidence formats

interface EvidenceEntry {
  id: string;
  timestamp: string;
  content: string;
  verified: boolean;
}

class LegacyParser {
  private entries: EvidenceEntry[] = [];

  /**
   * Parse evidence from legacy format
   * Added by: Dr. Vimsworth, 2022-03-10
   */
  parseEvidence(rawData: string): EvidenceEntry[] {
    const lines = rawData.split('\n');
    const parsed: EvidenceEntry[] = [];

    for (const line of lines) {
      if (!line.trim()) continue;

      const parts = line.split('|');
      if (parts.length < 3) continue;

      const entry: EvidenceEntry = {
        id: parts[0].trim(),
        timestamp: parts[1].trim(),
        content: parts[2].trim(),
        verified: false,
      };

      parsed.push(entry);
    }

    this.entries = parsed;
    return parsed;
  }

  /**
   * Verify evidence integrity
   * Modified by: Dr. Vimsworth, 2022-03-12 (added checksum validation)
   */
  verifyEntries(): number {
    let verifiedCount = 0;

    for (const entry of this.entries) {
      // Basic validation
      if (entry.id && entry.timestamp && entry.content) {
        entry.verified = true;
        verifiedCount++;
      }
    }

    return verifiedCount;
  }

  /**
   * Export to modern JSON format
   * Added by: Dr. Vimsworth, 2022-03-14
   */
  exportToJSON(): string {
    const output = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      totalEntries: this.entries.length,
      entries: this.entries,
    };

    return JSON.stringify(output, null, 2);
  }

  /**
   * Filter entries by date range
   * Added by: System Administrator, 2022-01-05
   */
  filterByDateRange(start: Date, end: Date): EvidenceEntry[] {
    return this.entries.filter(entry => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= start && entryDate <= end;
    });
  }
}

// Usage example
const parser = new LegacyParser();
const testData = `
E001 | 2022-03-15T10:00:00Z | Git commit detected
E002 | 2022-03-15T11:30:00Z | File modification logged
E003 | 2022-03-15T14:20:00Z | Config change recorded
`;

parser.parseEvidence(testData);
const verified = parser.verifyEntries();
console.log(`Verified ${verified} evidence entries`);

// Practice Instructions:
// 1. Run :!git blame % to see authorship of each line
// 2. Identify which functions were written by Dr. Vimsworth
// 3. Note the commit SHAs (first column in blame output)
// 4. Run :!git log -p % to see full file history with diffs
// 5. Find Dr. Vimsworth's original commit for the parseEvidence function
// 6. Use :!git show <SHA> to see a specific commit's details
// 7. Understand the forensic timeline of this code's evolution
