import random


def calculate_distance(city1, city2):
    # Calculate Euclidean distance between two cities
    x1, y1 = city1
    x2, y2 = city2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5


def calculate_total_distance(cities, order):
    # Calculate the total distance for a given order of cities
    total_distance = 0
    num_cities = len(order)
    for i in range(num_cities):
        city1 = cities[order[i]]
        city2 = cities[order[(i + 1) % num_cities]]
        total_distance += calculate_distance(city1, city2)
    return total_distance


def generate_initial_solution(cities):
    # Generate a random initial solution
    num_cities = len(cities)
    order = list(range(num_cities))
    random.shuffle(order)
    return order


def get_neighboring_solutions(order):
    # Generate neighboring solutions by swapping two cities
    neighboring_solutions = []
    num_cities = len(order)
    for i in range(num_cities):
        for j in range(i + 1, num_cities):
            new_order = order.copy()
            new_order[i], new_order[j] = new_order[j], new_order[i]
            neighboring_solutions.append(new_order)
    return neighboring_solutions


def hill_climbing(cities):
    # Perform the hill climbing algorithm
    current_order = generate_initial_solution(cities)
    current_distance = calculate_total_distance(cities, current_order)

    while True:
        neighboring_solutions = get_neighboring_solutions(current_order)
        best_order = current_order
        best_distance = current_distance

        for neighbor in neighboring_solutions:
            neighbor_distance = calculate_total_distance(cities, neighbor)
            if neighbor_distance < best_distance:
                best_order = neighbor
                best_distance = neighbor_distance

        if best_distance < current_distance:
            current_order = best_order
            current_distance = best_distance
        else:
            break

    return current_order


# Example usage
cities = [(0, 0), (1, 5), (3, 2), (4, 6), (7, 3)]
optimal_order = hill_climbing(cities)
optimal_distance = calculate_total_distance(cities, optimal_order)

print("Optimal order:", optimal_order)
print("Optimal distance:", optimal_distance)
