# Water Jug Problem

This is a Python program that solves the Water Jug problem, also known as the Die Hard problem. The problem involves two jugs of different capacities and a target volume of water to be measured. The goal is to determine a sequence of jug fillings and pourings that will result in obtaining the desired target volume.

## Problem Description

Given two jugs, Jug1 and Jug2, with capacities `jug1_capacity` and `jug2_capacity` respectively, and a target volume `target`, the program finds a sequence of operations to reach the target volume by using the jugs. The operations include filling each jug to its maximum capacity, emptying each jug, and pouring water from one jug to another.

## Usage

1. Set the capacity of `jug1_capacity`, `jug2_capacity`, and the `target` volume in the example usage section of the program.

2. Run the program using a Python interpreter.

3. The program will output the sequence of operations required to reach the target volume. If no solution is found, it will display a message indicating that no solution exists.

## Example

```python
jug1_capacity = 5
jug2_capacity = 3
target = 4

problem = WaterJugProblem(jug1_capacity, jug2_capacity, target)
solution_exists = problem.solve()

if not solution_exists:
    print("No solution found.")
```

In this example, the jug capacities are set to 5 and 3 for Jug1 and Jug2 respectively, and the target volume is set to 4. The program will find a sequence of operations to obtain 4 units of water using the given jugs.

## Implementation Details

The program uses a depth-first search (DFS) algorithm to explore all possible states and operations until the target volume is reached or all states are visited. It keeps track of visited states to avoid revisiting them. The DFS algorithm is implemented in the dfs method of the WaterJugProblem class.

The program prints the sequence of operations required to reach the target volume. It checks all possible operations: filling each jug, emptying each jug, and pouring water from one jug to another. The operations are stored in a list and iterated recursively until the target volume is reached.
