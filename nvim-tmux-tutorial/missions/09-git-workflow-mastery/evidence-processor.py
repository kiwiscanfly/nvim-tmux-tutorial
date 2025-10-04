# Evidence Data Processor
# Dr. Vimsworth's data analysis pipeline
# Critical for cross-referencing forensic findings

import json
from datetime import datetime
from typing import List, Dict, Optional

class DataAnalyzer:
    """Analyzes evidence data for patterns and anomalies."""

    def __init__(self):
        self.data_points = []
        self.anomalies = []

    def add_data_point(self, timestamp: str, value: float, source: str) -> None:
        """Add a data point to the analysis set."""
        data_point = {
            'timestamp': timestamp,
            'value': value,
            'source': source,
            'analyzed_at': datetime.now().isoformat()
        }
        self.data_points.append(data_point)

    def detect_anomalies(self, threshold: float = 2.0) -> List[Dict]:
        """Detect statistical anomalies in the dataset."""
        if len(self.data_points) < 3:
            return []

        values = [dp['value'] for dp in self.data_points]
        mean = sum(values) / len(values)

        # Calculate standard deviation
        variance = sum((x - mean) ** 2 for x in values) / len(values)
        std_dev = variance ** 0.5

        # Find outliers
        anomalies = []
        for dp in self.data_points:
            deviation = abs(dp['value'] - mean) / std_dev if std_dev > 0 else 0
            if deviation > threshold:
                anomalies.append({
                    **dp,
                    'deviation': deviation,
                    'severity': 'high' if deviation > 3.0 else 'medium'
                })

        self.anomalies = anomalies
        return anomalies

    def generate_summary(self) -> Dict:
        """Generate analysis summary report."""
        if not self.data_points:
            return {'status': 'no_data'}

        values = [dp['value'] for dp in self.data_points]
        return {
            'total_points': len(self.data_points),
            'min_value': min(values),
            'max_value': max(values),
            'mean_value': sum(values) / len(values),
            'anomaly_count': len(self.anomalies),
            'analysis_complete': True
        }

# Test execution
if __name__ == "__main__":
    analyzer = DataAnalyzer()

    # Add sample data
    analyzer.add_data_point('2022-03-15T10:00:00Z', 42.5, 'Sensor A')
    analyzer.add_data_point('2022-03-15T11:00:00Z', 43.1, 'Sensor A')
    analyzer.add_data_point('2022-03-15T12:00:00Z', 98.7, 'Sensor A')  # Anomaly

    anomalies = analyzer.detect_anomalies()
    summary = analyzer.generate_summary()

    print(f"Analysis Summary: {summary}")
    print(f"Anomalies Detected: {len(anomalies)}")

# Practice Instructions:
# 1. Add some debug print statements (print("DEBUG:", variable)) throughout the code
# 2. Also add some real improvements (better error handling, documentation, etc.)
# 3. Save the file
# 4. Use :!git add -p % to stage changes interactively
# 5. When prompted for each hunk:
#    - Press 'n' to skip debug statements
#    - Press 'y' to stage real improvements
# 6. Verify staged changes: :!git diff --staged %
# 7. Verify unstaged changes: :!git diff %
# 8. Only production code should be staged, debug code should remain unstaged
