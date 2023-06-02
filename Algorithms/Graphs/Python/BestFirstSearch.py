def best_first_search(graph, start_node, goal_node):
    visited = set()
    priority_queue = [(0, start_node)]

    while priority_queue:
        priority_queue.sort()
        cost, current_node = priority_queue.pop(0)

        if current_node == goal_node:
            return True

        visited.add(current_node)

        for neighbor, neighbor_cost in graph[current_node]:
            if neighbor not in visited:
                priority = heuristic(neighbor, goal_node)
                priority_queue.append((priority, neighbor))

    return False


# Example graph representation (adjacency list)
graph = {
    'A': [('B', 5), ('C', 10)],
    'B': [('D', 8)],
    'C': [('E', 15)],
    'D': [],
    'E': [('F', 3)],
    'F': []
}

# Example heuristic function (can be customized for specific problems)


def heuristic(node, goal_node):
    heuristic_values = {
        'A': 12,
        'B': 7,
        'C': 5,
        'D': 4,
        'E': 10,
        'F': 0
    }
    return heuristic_values[node]


start_node = 'A'
goal_node = 'F'

if best_first_search(graph, start_node, goal_node):
    print("Goal node found!")
else:
    print("Goal node not reachable!")
