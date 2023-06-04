# Prim's Algorithm

Prim's algorithm is a greedy algorithm that finds the minimum spanning tree of a connected, undirected graph. The algorithm starts with a single vertex and repeatedly adds the minimum-weight edge that connects the explored vertices to the unexplored vertices until all vertices are included in the MST.

1. Create a Graph class that represents the graph using an adjacency matrix.

2. Initialize an array key with maximum values for all vertices. The key array will store the minimum weight of the edge that connects each vertex to the MST.

3. Initialize an array parent to store the parent of each vertex in the MST.

4. Initialize an array mstSet to keep track of explored vertices. Initially, all values are set to False.

5. Set the key value of the first vertex as 0 to ensure it is picked first.

6. Repeat the following steps until all vertices are included in the MST:

    - Find the vertex u with the minimum key value from the set of vertices not yet included in the MST.
    - Mark u as explored by setting mstSet[u] to True.
    - Update the key values of all adjacent vertices of u if they are not yet included in the MST and the weight of the edge between u and the adjacent vertex is smaller than the current key value.

7. Finally, print the edges and their weights in the minimum spanning tree using the printMST function.

## Graph Representation

```css
         2       3
    (0)------(1)------(2)
     |       /| \       |
     |      / |  \      |
   6 |     /  |   \ 7   | 9
     |    /   |    \    |
     |   /    |     \   |
    (3)------(4)------(5)
         6       5
```
