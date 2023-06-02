class WaterJugProblem:
    def __init__(self, jug1_capacity, jug2_capacity, target):
        self.jug1_capacity = jug1_capacity
        self.jug2_capacity = jug2_capacity
        self.target = target
        self.visited_states = set()

    def solve(self):
        initial_state = (0, 0)
        return self.dfs(initial_state)

    def dfs(self, state):
        jug1_level, jug2_level = state

        # Check if the target volume is reached
        if jug1_level == self.target or jug2_level == self.target:
            return True

        # Check if the current state has been visited before
        if state in self.visited_states:
            return False

        # Mark the current state as visited
        self.visited_states.add(state)

        # Try all possible operations: fill, empty, and pour
        operations = [
            ('Fill jug 1', self.jug1_capacity, jug2_level),
            ('Fill jug 2', jug1_level, self.jug2_capacity),
            ('Empty jug 1', 0, jug2_level),
            ('Empty jug 2', jug1_level, 0),
            ('Pour jug 1 into jug 2', max(0, jug1_level + jug2_level -
             self.jug2_capacity), min(self.jug2_capacity, jug1_level + jug2_level)),
            ('Pour jug 2 into jug 1', min(self.jug1_capacity, jug1_level +
             jug2_level), max(0, jug1_level + jug2_level - self.jug1_capacity))
        ]

        for operation, next_jug1_level, next_jug2_level in operations:
            if self.dfs((next_jug1_level, next_jug2_level)):
                print(operation)
                return True

        return False


# Example usage:
jug1_capacity = 5
jug2_capacity = 3
target = 4

problem = WaterJugProblem(jug1_capacity, jug2_capacity, target)
solution_exists = problem.solve()

if not solution_exists:
    print("No solution found.")
