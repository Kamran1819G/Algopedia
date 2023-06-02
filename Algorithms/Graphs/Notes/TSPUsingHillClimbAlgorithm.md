# Traveling Salesman Problem (TSP) using Hill Climbing Algorithm

This Python program solves the Traveling Salesman Problem (TSP) using the Hill Climbing algorithm. The TSP is a classic optimization problem where the goal is to find the shortest possible route that visits a given set of cities and returns to the starting city.

## Algorithm Overview

The Hill Climbing algorithm used in this program follows these steps:

1. Generate a random initial solution by shuffling the order of cities.
2. Calculate the total distance for the initial solution.
3. Repeat until no better solution is found:
   - Generate neighboring solutions by swapping two cities in the current order.
   - Select the neighboring solution with the lowest distance.
   - If the distance of the selected solution is lower than the current distance, move to that solution.
4. Return the final order of cities as the optimal solution.

## Time Complexity

The time complexity of the Hill Climbing algorithm used in this program is dependent on the number of cities (N). The worst-case time complexity can be approximated as O(N^2 * M), where M is the number of iterations until convergence.

## Visual Representation

This program does not provide a visual representation of the optimal route. However, you can visualize the route by plotting the cities on a graph and connecting them in the order specified by the optimal order. There are several Python libraries, such as Matplotlib, that can help you create such visualizations.
