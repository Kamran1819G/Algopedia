# Depth-First Search (DFS) Algorithm

The Depth-First Search (DFS) is a graph traversal algorithm that explores the graph by visiting nodes in a depthward motion before backtracking. It starts from a given source vertex and visits as far as possible along each branch before backtracking.

## Implementation

The DFS algorithm can be implemented using the following steps:

1. Create a graph representation: The graph can be represented using an adjacency list or an adjacency matrix. In this implementation, we use an adjacency list.

2. Initialize data structures: Create an empty set to track visited vertices and a stack to store the vertices to be explored.

3. Perform DFS: Start from the source vertex and follow these steps:
    - Push the source vertex onto the stack.
    - While the stack is not empty, do the following:
        - Pop a vertex from the stack.
        - If the vertex has not been visited, mark it as visited and process it.
        - Push its unvisited neighbors onto the stack.

4. Repeat until all vertices have been visited.

Here's an example graph represented as an adjacency list:

```python
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}
```

Here is the visual representation of the graph:

```css
         A
       /   \
      B     C
     / \     \
    D   E     F
```

## Time Complexity

`The time complexity of the DFS algorithm is O(V + E)`, where V is the number of vertices and E is the number of edges in the graph. This is because in the worst-case scenario, each vertex and each edge will be visited once.

## Space Complexity

`The space complexity of the DFS algorithm is O(V)`, where V is the number of vertices. This is because we use a stack to store the vertices, and in the worst-case scenario, the stack can contain all the vertices of the graph.

## Applications

DFS has several applications, including:

- Finding connected components in a graph.
- Detecting cycles in a graph.
- Solving puzzles such as mazes.
- Topological sorting of a graph.
- Generating spanning trees.
