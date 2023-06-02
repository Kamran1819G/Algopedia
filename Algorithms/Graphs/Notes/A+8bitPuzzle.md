# A* Algorithm for 8-Puzzle Problem

This code demonstrates the implementation of the A* algorithm to solve the 8-puzzle problem. The 8-puzzle is a sliding puzzle consisting of a 3x3 grid with eight numbered tiles and one empty tile. The goal is to rearrange the tiles from a given start state to a specified goal state by sliding them into the empty space.

The Node class represents a state in the puzzle. It contains the state configuration, a reference to the parent node, the cost from the start node (g), the heuristic value (h), and the total cost (f). The distance function calculates the distance between two states, which serves as the heuristic estimate for the A* algorithm.

The get_successors function generates all possible successor states by moving the empty tile up, down, left, or right within the grid. The find_position function helps find the position of a tile in a given state.

The astar function performs the A* search algorithm. It initializes the open list with the start node and continues until the open list is empty. In each iteration, it selects the node with the lowest total cost (f) from the open list, checks if it is the goal state, and if not, generates successors and evaluates them. The function keeps track of the visited states in the closed list to avoid revisiting them.

The main program demonstrates the usage of the A* algorithm by solving a specific 8-puzzle problem. It defines a start state and a goal state represented as 2D lists. It then calls the astar function, passing the start state, goal state, and the distance heuristic function. If a path is found, it prints each state in the path, showing the sequence of moves required to reach the goal. Otherwise, it prints "No path found!"

To visualize the puzzle states, the program represents each state as a grid of numbers. The number 0 represents the empty tile, and other numbers represent the numbered tiles. The program displays the puzzle states as they change during the search process.

Please note that the code assumes that the start state and goal state are valid and solvable configurations of the 8-puzzle.

```lua
[[1, 2, 3], [4, 5, 6], [0, 7, 8]]   # Start state
[[1, 2, 3], [4, 5, 6], [7, 0, 8]]   # Intermediate state 1
[[1, 2, 3], [4, 5, 6], [7, 8, 0]]   # Goal state
```

The output shows the start state, an intermediate state, and the goal state. Each state represents the configuration of the 8-puzzle grid. The numbers in the grid indicate the position of the tiles, and 0 represents the empty tile. The program successfully finds a path from the start state to the goal state using the A* algorithm.

## Time Complexity

- The time complexity of the A* algorithm depends on the branching factor of the search tree, the depth of the optimal solution, and the quality of the heuristic function used.
- In the worst case, where the optimal solution requires exploring all possible states, the time complexity of the A* algorithm is exponential, specifically O(b^d), where b is the branching factor and d is the depth of the solution.
- However, a well-designed heuristic function that provides an accurate estimate of the remaining cost can significantly reduce the number of states to explore, leading to faster search times.
- In practice, the A* algorithm often performs efficiently and finds optimal solutions quickly for the 8-puzzle problem.

## Space Complexity

- The space complexity of the A* algorithm depends on the maximum number of nodes stored in memory during the search.
- In the worst case, where all states need to be stored in memory, the space complexity is also exponential, specifically O(b^d), where b is the branching factor and d is the depth of the search tree.
- However, in many cases, the A* algorithm uses much less space than the worst case, especially when an effective pruning strategy is implemented or when the search is guided by a good heuristic function.
- The space complexity can be further reduced by using optimizations such as iterative deepening or transposition tables to avoid redundant storage of states.
