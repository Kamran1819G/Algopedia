# Bellman-Ford Algorithm

The Bellman-Ford algorithm is used to find the shortest path from a source vertex to all other vertices in a weighted directed graph. It can handle graphs with negative-weight edges as well.

## Implementation

The implementation provided here is in Python.

### Graph Class

The `Graph` class represents a directed graph. It has the following methods:

- `__init__(self, vertices)`: Initializes the graph with the given number of vertices.
- `add_edge(self, u, v, w)`: Adds a directed edge from vertex `u` to vertex `v` with weight `w`.
- `bellman_ford(self, src)`: Applies the Bellman-Ford algorithm to find the shortest distances from the source vertex to all other vertices.

### Steps of the Algorithm

The Bellman-Ford algorithm consists of the following steps:

1. **Initialization**: Set the distance of the source vertex to 0, and all other distances to infinity.
2. **Relaxation**: Iterate `V-1` times, where `V` is the number of vertices in the graph. For each edge `(u, v)` with weight `w`, if the distance to vertex `u` plus `w` is smaller than the current distance to vertex `v`, update the distance to `v`.
3. **Negative Cycle Detection**: Perform an additional iteration. If any distance is updated in this iteration, it means there is a negative-weight cycle in the graph.
4. **Output**: Print the calculated distances for all vertices.

## Usage

Create a `Graph` object and add edges to it using the `add_edge` method. Then, call the `bellman_ford` method with the source vertex as the argument to calculate the shortest distances.

Example:

```python
g = Graph(5)  # Create a graph with 5 vertices
g.add_edge(0, 1, -1)
g.add_edge(0, 2, 4)
g.add_edge(1, 2, 3)
g.add_edge(1, 3, 2)
g.add_edge(1, 4, 2)
g.add_edge(3, 2, 5)
g.add_edge(3, 1, 1)
g.add_edge(4, 3, -3)

source_vertex = 0
g.bellman_ford(source_vertex)
```

The above code will find the shortest distances from vertex 0 to all other vertices in the graph.

Note: If there is a negative-weight cycle in the graph, the algorithm will not produce correct results. It will indicate the presence of a negative-weight cycle instead.

```csharp
Vertex   Distance from Source
0        0
1        -1
2        2
3        -2
4        1
```

If the graph contains a negative-weight cycle, the output for the vertices involved in the cycle will be `-inf`.

This is a basic implementation of the Bellman-Ford algorithm. It can be useful for finding shortest paths in small to medium-sized graphs. However, for larger graphs, more efficient algorithms like Dijkstra's algorithm or the A* algorithm are generally preferred.
