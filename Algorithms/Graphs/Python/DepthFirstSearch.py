class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, vertex, edges):
        self.graph[vertex] = edges

    def dfs(self, start_vertex):
        visited = set()
        stack = [start_vertex]

        while stack:
            vertex = stack.pop()
            if vertex not in visited:
                visited.add(vertex)
                print(vertex, end=" ")  # Process the current vertex

                if vertex in self.graph:
                    neighbors = self.graph[vertex]
                    stack.extend(neighbors)


# Example usage:
if __name__ == "__main__":
    # Create a graph
    g = Graph()
    g.add_edge('A', ['B', 'C'])
    g.add_edge('B', ['D', 'E'])
    g.add_edge('C', ['F'])
    g.add_edge('D', [])
    g.add_edge('E', ['F'])
    g.add_edge('F', [])

    # Perform DFS starting from vertex 'A'
    print("Depth-First Search (DFS):")
    g.dfs('A')
