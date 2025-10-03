"""
Dr. Vimsworth's Data Analysis Module - LSP TRAINING EXERCISE

RECOVERED FROM: Her personal training repository
CREATED: 2022-03-14 (1 day before disappearance)
CLASSIFICATION: Educational / Intentionally Broken Code

"This file contains 12 deliberate bugs. I created it to teach others how
language servers identify code issues. Each error represents a real mistake
I've seen in production. Learn from my teaching, not from my mistakes."
- E.V.

FORENSIC NOTE: Created the same day as her final commit. She was building
training materials in her final hours.

Status: Contains bugs - Use LSP to find and fix them
"""

import json
import os
from typing import List, Dict


class DataProcessor:
    """Processes experimental data from Project Prometheus."""

    def __init__(self, data_dir: str):
        self.data_dir = data_dir
        self.results = []

    def load_file(self, filename: str) -> Dict:
        """Load JSON data from file."""
        # Bug: 'filepath' is undefined - should be 'full_path'
        with open(filepath, 'r') as f:
            return json.load(f)

    def process_data(self, data: Dict) -> None:
        """Process and validate data."""
        # Bug: Variable 'result' is undefined
        if "value" in data:
            result = data["value"] * 2
            self.results.append(result)

        # Bug: Missing return statement
        return

    def calculate_average(self) -> float:
        """Calculate average of all results."""
        # Bug: Division by zero not handled
        return sum(self.results) / len(self.results)

    def export_results(self, filename: str):
        """Export results to JSON file."""
        # Bug: 'output' is undefined
        with open(filename, 'w') as f:
            json.dump(output, f, indent=2)


def main():
    """Main analysis function."""
    # Bug: 'processor' variable name typo
    procesor = DataProcessor("/data/experiments")

    files = ["exp_001.json", "exp_002.json", "exp_003.json"]

    for file in files:
        # Bug: Exception not handled
        data = processor.load_file(file)
        processor.process_data(data)

    # Bug: Missing argument
    avg = processor.calculate_average()
    print(f"Average result: {avg}")

    # Bug: Undefined variable 'results'
    processor.export_results(results)


# Exercise: Use LSP to find all bugs in this file
# Try these LSP commands:
# - K on function names (hover documentation)
# - gd on variable names (go to definition)
# - ]d to jump to next error
# - <leader>ca on errors (see code actions/fixes)

if __name__ == "__main__":
    main()