"""
PROJECT PROMETHEUS - DATA PARSER MODULE

This module handles parsing various data formats for the Prometheus system.
Supports JSON, XML, CSV, and custom formats.

Author: Dr. Elena Vimsworth
Last Modified: 2024-03-15
Version: 2.1.0
"""

import json
import xml.etree.ElementTree as ET
import csv
import re
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging

# [TOKEN-BETA-1] "Grep through the errors, find the pattern in chaos"

logger = logging.getLogger(__name__)

class ParseError(Exception):
    """Custom exception for parsing errors"""
    pass


class DataParser:
    """
    Main parser class for handling multiple data formats.

    Supports:
    - JSON (standard and JSONL)
    - XML (with namespace support)
    - CSV (with custom delimiters)
    - Custom Prometheus format (.prom files)
    """

    def __init__(self, strict_mode: bool = False):
        """
        Initialize parser with optional strict mode.

        Args:
            strict_mode: If True, raises exceptions on malformed data.
                        If False, logs warnings and attempts recovery.
        """
        self.strict_mode = strict_mode
        self.parsed_count = 0
        self.error_count = 0

    def parse_json(self, data: str) -> Dict[str, Any]:
        """
        Parse JSON data with error handling.

        Args:
            data: JSON string to parse

        Returns:
            Parsed dictionary

        Raises:
            ParseError: If JSON is malformed and strict_mode is True
        """
        try:
            result = json.loads(data)
            self.parsed_count += 1
            return result
        except json.JSONDecodeError as e:
            self.error_count += 1
            logger.error(f"JSON parse error at line {e.lineno}: {e.msg}")

            if self.strict_mode:
                raise ParseError(f"Invalid JSON: {e.msg}") from e
            else:
                # Attempt to recover by fixing common issues
                return self._attempt_json_recovery(data)

    def _attempt_json_recovery(self, data: str) -> Dict[str, Any]:
        """
        Attempt to recover from common JSON formatting errors.

        This is a best-effort function and may not catch all issues.
        """
        # Fix trailing commas (common mistake)
        data = re.sub(r',(\s*[}\]])', r'\1', data)

        # Fix single quotes (should be double quotes)
        data = data.replace("'", '"')

        try:
            return json.loads(data)
        except json.JSONDecodeError:
            logger.error("JSON recovery failed")
            return {}

    def parse_xml(self, data: str) -> Dict[str, Any]:
        """
        Parse XML data into dictionary format.

        Args:
            data: XML string to parse

        Returns:
            Dictionary representation of XML
        """
        try:
            root = ET.fromstring(data)
            result = self._xml_to_dict(root)
            self.parsed_count += 1
            return result
        except ET.ParseError as e:
            self.error_count += 1
            logger.error(f"XML parse error: {e}")

            if self.strict_mode:
                raise ParseError(f"Invalid XML: {e}") from e
            return {}

    def _xml_to_dict(self, element: ET.Element) -> Dict[str, Any]:
        """
        Recursively convert XML element to dictionary.

        NOTE: This is a simplified version. Production code should
        handle namespaces, attributes, and mixed content better.
        """
        result = {}

        # Handle attributes
        if element.attrib:
            result['@attributes'] = element.attrib

        # Handle text content
        if element.text and element.text.strip():
            if len(element) == 0:  # No children
                return element.text.strip()
            result['#text'] = element.text.strip()

        # Handle children
        for child in element:
            child_data = self._xml_to_dict(child)
            if child.tag in result:
                # Multiple children with same tag
                if not isinstance(result[child.tag], list):
                    result[child.tag] = [result[child.tag]]
                result[child.tag].append(child_data)
            else:
                result[child.tag] = child_data

        return result

    def parse_csv(self, data: str, delimiter: str = ',',
                  has_header: bool = True) -> List[Dict[str, str]]:
        """
        Parse CSV data into list of dictionaries.

        Args:
            data: CSV string to parse
            delimiter: Column delimiter (default: comma)
            has_header: Whether first row is header

        Returns:
            List of dictionaries (one per row)
        """
        lines = data.strip().split('\n')

        if not lines:
            return []

        if has_header:
            reader = csv.DictReader(lines, delimiter=delimiter)
            result = list(reader)
        else:
            reader = csv.reader(lines, delimiter=delimiter)
            result = [{"col_" + str(i): val
                      for i, val in enumerate(row)}
                     for row in reader]

        self.parsed_count += len(result)
        return result

    def parse_prometheus_format(self, data: str) -> Dict[str, Any]:
        """
        Parse custom Prometheus format files.

        Format specification:
        - Lines starting with # are comments
        - Lines starting with @ are metadata
        - Format: key = value
        - Supports nested sections with [section_name]

        Example:
            # This is a comment
            @version = 1.0
            [database]
            host = localhost
            port = 5432
        """
        result = {}
        current_section = result
        metadata = {}

        for line_num, line in enumerate(data.split('\n'), 1):
            line = line.strip()

            # Skip empty lines and comments
            if not line or line.startswith('#'):
                continue

            # Handle metadata
            if line.startswith('@'):
                key, value = self._parse_key_value(line[1:])
                metadata[key] = value
                continue

            # Handle sections
            if line.startswith('[') and line.endswith(']'):
                section_name = line[1:-1]
                current_section = {}
                result[section_name] = current_section
                continue

            # Handle key-value pairs
            try:
                key, value = self._parse_key_value(line)
                current_section[key] = value
            except ValueError as e:
                logger.warning(f"Line {line_num}: {e}")
                if self.strict_mode:
                    raise ParseError(f"Invalid format at line {line_num}") from e

        if metadata:
            result['@metadata'] = metadata

        self.parsed_count += 1
        return result

    def _parse_key_value(self, line: str) -> tuple:
        """
        Parse a key=value line.

        Returns:
            Tuple of (key, value)

        Raises:
            ValueError: If line doesn't contain '='
        """
        if '=' not in line:
            raise ValueError(f"No '=' found in line: {line}")

        key, value = line.split('=', 1)
        key = key.strip()
        value = value.strip()

        # Try to convert to appropriate type
        if value.lower() == 'true':
            value = True
        elif value.lower() == 'false':
            value = False
        elif value.isdigit():
            value = int(value)
        elif self._is_float(value):
            value = float(value)

        return key, value

    def _is_float(self, value: str) -> bool:
        """Check if string represents a float"""
        try:
            float(value)
            return True
        except ValueError:
            return False

    def get_statistics(self) -> Dict[str, int]:
        """
        Get parsing statistics.

        Returns:
            Dictionary with parsed_count and error_count
        """
        return {
            'parsed_count': self.parsed_count,
            'error_count': self.error_count,
            'success_rate': (self.parsed_count /
                           (self.parsed_count + self.error_count) * 100
                           if (self.parsed_count + self.error_count) > 0
                           else 0)
        }

    def reset_statistics(self):
        """Reset parsing statistics to zero"""
        self.parsed_count = 0
        self.error_count = 0


def parse_file(file_path: str, format_type: Optional[str] = None) -> Any:
    """
    Convenience function to parse a file.

    Args:
        file_path: Path to file to parse
        format_type: Force specific format (json, xml, csv, prom)
                    If None, infers from file extension

    Returns:
        Parsed data in appropriate format
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        data = f.read()

    parser = DataParser(strict_mode=False)

    # Infer format if not specified
    if format_type is None:
        if file_path.endswith('.json'):
            format_type = 'json'
        elif file_path.endswith('.xml'):
            format_type = 'xml'
        elif file_path.endswith('.csv'):
            format_type = 'csv'
        elif file_path.endswith('.prom'):
            format_type = 'prom'
        else:
            raise ValueError(f"Cannot infer format for {file_path}")

    # Parse based on format
    if format_type == 'json':
        return parser.parse_json(data)
    elif format_type == 'xml':
        return parser.parse_xml(data)
    elif format_type == 'csv':
        return parser.parse_csv(data)
    elif format_type == 'prom':
        return parser.parse_prometheus_format(data)
    else:
        raise ValueError(f"Unknown format type: {format_type}")


# Dr. Vimsworth's notes (from code review comments):
# "The parser is solid but there's a subtle bug in the XML namespace
#  handling that only manifests with deeply nested documents. See
#  the test cases in test_parser_edge_cases.py for details."
#
# TODO: Add support for YAML format
# TODO: Improve error messages with suggestions
# TODO: Add streaming parser for large files
# FIXME: Memory usage spikes with files > 100MB