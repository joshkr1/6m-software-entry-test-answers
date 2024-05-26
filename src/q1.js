/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
def swap_values(x, y):
    # Check if x and y are numeric
    if not (isinstance(x, (int, float)) and isinstance(y, (int, float))):
        return -1
    
    # Swap the values
    x, y = y, x
    
    # Print the swapped values
    print("Swapped values: x =", x, "y =", y)
    
    # Returning the swapped values as a tuple
    return x, y

# Example usage:
result = swap_values(10, 20)
if result == -1:
    print("One or both values are not numeric")

}

// Task 2: Add code here
def swap_values(x, y):
    # Check if x and y are numeric
    if not (isinstance(x, (int, float)) and isinstance(y, (int, float))):
        return -1
    
    # Swap the values
    x, y = y, x
    
    # Print the swapped values
    print("Swapped values: x =", x, "y =", y)
    
    # Returning the swapped values as a tuple
    return x, y

# Scenario 1: "Apple", 10
result1 = swap_values("Apple", 10)
if result1 == -1:
    print("One or both values are not numeric for scenario 1")

# Scenario 2: 9, 17
result2 = swap_values(9, 17)
if result2 == -1:
    print("One or both values are not numeric for scenario 2")

