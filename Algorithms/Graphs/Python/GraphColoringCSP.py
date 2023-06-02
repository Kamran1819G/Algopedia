class GraphColoringCSP:
    def __init__(self, graph, colors):
        self.graph = graph
        self.colors = colors
        self.assignment = {}

    def solve(self):
        return self.backtrack()

    def backtrack(self):
        if self.is_complete():
            return self.assignment

        variable = self.select_unassigned_variable()
        for color in self.colors:
            if self.is_consistent(variable, color):
                self.assignment[variable] = color
                result = self.backtrack()
                if result is not None:
                    return result
                del self.assignment[variable]
        return None

    def is_complete(self):
        return len(self.assignment) == len(self.graph)

    def select_unassigned_variable(self):
        for variable in self.graph:
            if variable not in self.assignment:
                return variable

    def is_consistent(self, variable, color):
        for neighbor in self.graph[variable]:
            if neighbor in self.assignment and self.assignment[neighbor] == color:
                return False
        return True


# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B', 'D'],
    'D': ['B', 'C']
}

colors = ['Red', 'Green', 'Blue']

csp = GraphColoringCSP(graph, colors)
solution = csp.solve()

if solution is None:
    print("No solution exists.")
else:
    for variable, color in solution.items():
        print(f"{variable}: {color}")
