class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = [[0] * vertices for _ in range(vertices)]

    def print_solution(self, dist):
        print("Vertex \t Distance from Source")
        for node in range(self.V):
            print(node, "\t\t", dist[node])

    def min_distance(self, dist, visited):
        min_dist = float("inf")
        min_dist_index = None
        for v in range(self.V):
            if dist[v] < min_dist and not visited[v]:
                min_dist = dist[v]
                min_dist_index = v
        return min_dist_index

    def dijkstra(self, source):
        dist = [float("inf")] * self.V
        dist[source] = 0
        visited = [False] * self.V

        for _ in range(self.V):
            u = self.min_distance(dist, visited)
            visited[u] = True
            for v in range(self.V):
                if (
                    self.graph[u][v] > 0
                    and not visited[v]
                    and dist[v] > dist[u] + self.graph[u][v]
                ):
                    dist[v] = dist[u] + self.graph[u][v]

        self.print_solution(dist)


# Example usage:
# Create a graph with 6 vertices
g = Graph(6)

# Set up the graph connections and weights
g.graph = [
    [0, 1, 4, 0, 0, 0],
    [1, 0, 2, 7, 0, 0],
    [4, 2, 0, 1, 5, 0],
    [0, 7, 1, 0, 3, 2],
    [0, 0, 5, 3, 0, 6],
    [0, 0, 0, 2, 6, 0],
]

# Perform Dijkstra's algorithm starting from vertex 0
g.dijkstra(0)
