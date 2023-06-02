# Graph Coloring CSP Algorithm

This Python program demonstrates the Graph Coloring algorithm using Constraint Satisfaction Problem (CSP) approach. The algorithm solves the problem of assigning colors to the nodes of a graph in such a way that no adjacent nodes have the same color.

## Usage

1. Define the graph: Create a dictionary representing the graph, where each key represents a node, and the corresponding value is a list of its neighboring nodes. For example:

```python
   graph = {
       'A': ['B', 'C'],
       'B': ['A', 'C', 'D'],
       'C': ['A', 'B', 'D'],
       'D': ['B', 'C']
   }
```

2. Define the colors: Create a list of available colors. For example:

```python
colors = ['Red', 'Green', 'Blue']
```

3. Create a GraphColoringCSP instance: Pass the graph and colors to the constructor of the GraphColoringCSP class. For example:

```python
csp = GraphColoringCSP(graph, colors)
```

4. Solve the CSP problem: Call the solve() method on the GraphColoringCSP instance to obtain the solution. The method returns a dictionary mapping each node to its assigned color. If no solution exists, it returns None. For example:

```python
solution = csp.solve()
```

5. Process the solution: Check if a valid solution exists by verifying if solution is not None. If a solution exists, iterate over the items in the solution dictionary to access each node and its assigned color. For example:

```python
if solution is None:
    print("No solution exists.")
else:
    for variable, color in solution.items():
        print(f"{variable}: {color}")
```

## Class: GraphColoringCSP

### Methods

- _ _ _init_ _ _(self, graph, colors): Initializes the CSP problem instance with the provided graph and colors.
- solve(self): Solves the CSP problem and returns the solution if it exists, or None otherwise.
- backtrack(self): Performs a recursive depth-first search with backtracking to find a valid solution.
- is_complete(self): Checks if the assignment is complete, i.e., all nodes have been assigned a color.
- select_unassigned_variable(self): Selects an unassigned variable (node) from the graph.
- is_consistent(self, variable, color): Checks if assigning a specific color to a variable is consistent with the colors assigned to its neighbors.
