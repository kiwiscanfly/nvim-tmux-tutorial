"""
CODE EXTRACTION SIMULATION - Project Prometheus Evidence

RECOVERED FROM: Dr. Vimsworth's final commit
FILE PURPOSE: Training exercise that doubled as evidence extraction
CLASSIFICATION: Dual-use file (training + covert operation)

"This 'refactoring exercise' was actually my method for extracting
sensitive algorithm patterns. I'd select the repeated code blocks using
visual mode, copy them to encrypted storage, then refactor the originals.
Anyone watching my screen just saw normal code cleanup.

The repeated error handling you see here? That was real - taken from
the authentication bypass code I discovered in Project Prometheus.
Master these visual selection techniques. They're not just for clean code."
- E.V., March 12, 2022

DETECTIVE'S NOTE: The 'error handling pattern' she mentions matches
code found in the leaked Prometheus authentication logs. This wasn't
just practice - it was evidence gathering in plain sight.

This code has repeated patterns. Use visual mode to select
and refactor the duplicate logic into reusable functions.
"""

def process_user_data():
    data = fetch_data()
    if data is None:
        print("Error: No data")
        return None
    if not validate_data(data):
        print("Error: Invalid data")
        return None
    return transform_data(data)

def process_order_data():
    data = fetch_orders()
    if data is None:
        print("Error: No data")
        return None
    if not validate_data(data):
        print("Error: Invalid data")
        return None
    return transform_data(data)

def process_product_data():
    data = fetch_products()
    if data is None:
        print("Error: No data")
        return None
    if not validate_data(data):
        print("Error: Invalid data")
        return None
    return transform_data(data)

# TODO: Extract the common error handling pattern
# Use visual mode to select repeated blocks!