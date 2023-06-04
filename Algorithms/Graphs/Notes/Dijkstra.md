# Dijkstra's Algorithm

Dijkstra's algorithm is a popular algorithm used to find the shortest path between two nodes in a graph. It works on graphs with non-negative edge weights and provides the shortest path from a source node to all other nodes in the graph.

The algorithm maintains a set of "visited" nodes and their tentative distances from the source node. Initially, the distance to all nodes is set to infinity except for the source node, which is set to 0. The algorithm then iteratively selects the node with the smallest tentative distance among the unvisited nodes and updates the distances of its neighboring nodes.

## Pseudocode

Create a set of unvisited nodes and initialize the distances to all nodes as infinity, except the source node which is set to 0.
While the set of unvisited nodes is not empty:
Select the node with the smallest tentative distance from the set of unvisited nodes.
Mark the selected node as visited.
For each neighboring node of the selected node:
Calculate the tentative distance from the source node to the neighboring node through the selected node.
If the tentative distance is smaller than the current distance, update the distance.
Output the distances from the source node to all other nodes.

## Implementation

In implementation, we have a Graph class that represents the graph and provides the necessary methods to perform Dijkstra's algorithm. The print_solution method displays the shortest distances from the source node to all other nodes. The min_distance method finds the node with the smallest tentative distance among the unvisited nodes. The dijkstra method implements the Dijkstra's algorithm using these helper methods.

To use the algorithm, create an instance of the Graph class, set up the graph connections and weights, and call the dijkstra method with the desired source node.

Please note that this implementation assumes a 0-based indexing for the nodes in the graph. You can modify the graph connections and weights to suit your specific requirements.

## Graphs Representation

```css
            1
       (0)------(1)
      / | \     | \
     4  |  2    |  7
    /   |   \   |   \
   /    |    \  |    \
(2)----(3)----(4)----(5)
  \    / \   5 |   6 /
   \  /    \   |   /
    1       \  |  /  2
     \       \ | /
      \       (6)
       \_____/
         3
```

In this representation, each node is labeled with its index in parentheses, and the edge weights are displayed next to the corresponding edges. The arrows indicate the direction of the edges, and the graph is undirected, meaning you can travel in both directions along the edges.

This visualization should help you better understand the structure of the graph and the connections between the nodes.

I hope this explanation helps! Let me know if you have any further questions.
