# Kruskal Algorithm

1. The Graph class represents a graph and provides methods to add edges and find the MST using Kruskal's algorithm.

2. The `__init__` method initializes the graph with the specified number of vertices.

3. The add_edge method is used to add an edge to the graph. It takes the source vertex (u), destination vertex (v), and weight (w) as parameters.

4. The kruskal_mst method performs the main steps of Kruskal's algorithm. It initializes the result list to store the edges of the MST. It sorts the edges of the graph based on their weights using the sorted function and a lambda function as the key.

5. The parent list is initialized such that each vertex is its own parent. The find method is used to find the parent of a vertex. It uses the path compression technique to optimize the search.

6. The union method is used to perform the union of two sets. It uses the union by rank technique to optimize the operation.

7. The kruskal_mst method iterates through the sorted edges. For each edge, it finds the parent of the source and destination vertices. If the parents are different, it means they belong to different sets and can be added to the MST. The union operation is performed to merge the sets.

8. The resulting MST is printed by iterating over the result list.

9. In the example usage, a Graph object is created with 5 vertices. Edges are added to the graph using the add_edge method. Finally, the kruskal_mst method is called to find and print the minimum spanning tree.
