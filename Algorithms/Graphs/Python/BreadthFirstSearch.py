def bfs(graph, start):
    visited = set()  # Set to keep track of visited nodes
    queue = [start]  # Queue for BFS traversal
    visited.add(start)

    while queue:
        node = queue.pop(0)  # Dequeue the first element in the queue
        print(node)  # Process the node (in this example, we are simply printing it)

        # Visit all neighbors of the current node that haven't been visited
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append(neighbor)  # Enqueue the neighbor
                visited.add(neighbor)  # Mark it as visited


# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Starting node for the BFS traversal
start_node = 'A'

# Call the BFS function
bfs(graph, start_node)
