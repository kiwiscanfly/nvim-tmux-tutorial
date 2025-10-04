// Dr. Vimsworth's Evidence Timeline Processor
// Last modified: 3 days before disappearance
// Purpose: Process forensic evidence from multiple sources

class EvidenceProcessor {
  constructor() {
    this.evidenceLog = [];
    this.processedCount = 0;
  }

  // Process incoming evidence entries
  processEvidence(entry) {
    if (!entry || !entry.timestamp) {
      throw new Error('Invalid evidence entry');
    }

    const processed = {
      ...entry,
      processedAt: new Date().toISOString(),
      verified: this.verifyIntegrity(entry),
    };

    this.evidenceLog.push(processed);
    this.processedCount++;

    return processed;
  }

  // Verify evidence integrity
  verifyIntegrity(entry) {
    // Check for required fields
    const requiredFields = ['timestamp', 'source', 'data'];
    const hasAllFields = requiredFields.every(field => entry[field] !== undefined);

    if (!hasAllFields) {
      return false;
    }

    // Verify timestamp format
    const timestampValid = !isNaN(Date.parse(entry.timestamp));

    return hasAllFields && timestampValid;
  }

  // Filter evidence by time range
  filterByTimeRange(startTime, endTime) {
    return this.evidenceLog.filter(entry => {
      const entryTime = new Date(entry.timestamp);
      return entryTime >= new Date(startTime) && entryTime <= new Date(endTime);
    });
  }

  // Generate forensic report
  generateReport() {
    const verified = this.evidenceLog.filter(e => e.verified).length;
    const failed = this.evidenceLog.length - verified;

    return {
      totalProcessed: this.processedCount,
      verified,
      failed,
      successRate: (verified / this.processedCount * 100).toFixed(2) + '%',
    };
  }

  // Export timeline to JSON
  exportTimeline(filepath) {
    const timeline = {
      generatedAt: new Date().toISOString(),
      evidenceCount: this.evidenceLog.length,
      entries: this.evidenceLog,
    };

    // In real implementation, would write to file
    console.log(`Timeline exported to ${filepath}`);
    return timeline;
  }
}

// Test data
const processor = new EvidenceProcessor();

processor.processEvidence({
  timestamp: '2022-03-15T23:45:00Z',
  source: 'Workstation Logs',
  data: 'Git commit detected',
});

processor.processEvidence({
  timestamp: '2022-03-15T23:47:00Z',
  source: 'File System Monitor',
  data: 'Config files modified',
});

const report = processor.generateReport();
console.log('Forensic Report:', report);

// Practice Instructions:
// 1. Make several small edits throughout this file (change variable names, add comments, modify logic)
// 2. Save the file
// 3. Use ]h to jump to your first change
// 4. Continue pressing ]h to jump through all changes
// 5. Use [h to jump backwards through changes
// 6. Toggle diff overlay: :lua MiniDiff.toggle_overlay()
// 7. Review what you changed before staging
