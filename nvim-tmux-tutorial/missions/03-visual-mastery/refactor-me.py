"""
REFACTORING CHALLENGE

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