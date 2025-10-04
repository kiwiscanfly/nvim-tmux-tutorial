# Practice file for testing vim motions
# Try: w, b, e, $, 0, gg, G, ciw, daw

def process_data(data):
    """Process incoming data and return results."""
    results = []
    for item in data:
        if item > 0:
            results.append(item * 2)
        else:
            results.append(0)
    return results

# Test your motions here:
