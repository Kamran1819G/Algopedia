class Node:
    def __init__(self, state, parent=None, g=0, h=0):
        self.state = state
        self.parent = parent
        self.g = g  # cost from start node to current node
        # heuristic value (estimated cost from current node to goal node)
        self.h = h
        self.f = g + h  # total cost (g + h)


def distance(state, goal_state):
    n = len(state)
    total_distance = 0
    for i in range(n):
        for j in range(n):
            value = state[i][j]
            if value != 0:
                goal_pos = find_position(goal_state, value)
                total_distance += abs(i - goal_pos[0]) + abs(j - goal_pos[1])
    return total_distance


def get_successors(state):
    successors = []
    n = len(state)
    for i in range(n):
        for j in range(n):
            if state[i][j] == 0:
                # Move blank space up
                if i > 0:
                    new_state = [row[:] for row in state]
                    new_state[i][j], new_state[i -
                                               1][j] = new_state[i - 1][j], new_state[i][j]
                    successors.append(new_state)
                # Move blank space down
                if i < n - 1:
                    new_state = [row[:] for row in state]
                    new_state[i][j], new_state[i +
                                               1][j] = new_state[i + 1][j], new_state[i][j]
                    successors.append(new_state)
                # Move blank space left
                if j > 0:
                    new_state = [row[:] for row in state]
                    new_state[i][j], new_state[i][j -
                                                  1] = new_state[i][j - 1], new_state[i][j]
                    successors.append(new_state)
                # Move blank space right
                if j < n - 1:
                    new_state = [row[:] for row in state]
                    new_state[i][j], new_state[i][j +
                                                  1] = new_state[i][j + 1], new_state[i][j]
                    successors.append(new_state)
    return successors


def find_position(matrix, value):
    n = len(matrix)
    for i in range(n):
        for j in range(n):
            if matrix[i][j] == value:
                return i, j
    return None


def astar(start_state, goal_state, heuristic_func):
    open_list = []
    closed_list = set()

    # Create start node
    start_node = Node(tuple(map(tuple, start_state)))
    start_node.g = 0
    start_node.h = heuristic_func(start_state, goal_state)
    start_node.f = start_node.g + start_node.h

    # Add start node to open list
    open_list.append(start_node)

    while open_list:
        open_list.sort(key=lambda node: node.f)
        current_node = open_list.pop(0)

        # Check if goal state is reached
        if current_node.state == tuple(map(tuple, goal_state)):
            path = []
            while current_node:
                path.append(list(map(list, current_node.state)))
                current_node = current_node.parent
            return list(reversed(path))

        closed_list.add(current_node.state)

        # Generate successors and process them
        successors = get_successors(list(map(list, current_node.state)))
        for successor_state in successors:
            successor_node = Node(
                tuple(map(tuple, successor_state)), current_node)
            successor_node.g = current_node.g + 1
            successor_node.h = heuristic_func(successor_state, goal_state)
            successor_node.f = successor_node.g + successor_node.h

            if successor_node.state in closed_list:
                continue

            for open_node in open_list:
                if open_node.state == successor_node.state and open_node.f <= successor_node.f:
                    break
            else:
                open_list.append(successor_node)

    return None


# Example usage:
start_state = [[1, 2, 3], [4, 5, 6], [0, 7, 8]]
goal_state = [[1, 2, 3], [4, 5, 6], [7, 8, 0]]
path = astar(start_state, goal_state, distance)
if path:
    for state in path:
        print(state)
else:
    print("No path found!")
