class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = []

    def add_edge(self, u, v, w):
        self.graph.append([u, v, w])

    def kruskal_mst(self):
        result = []
        i = 0
        e = 0

        self.graph = sorted(self.graph, key=lambda item: item[2])

        parent = [i for i in range(self.V)]

        while e < self.V - 1:
            u, v, w = self.graph[i]
            i += 1
            x = self.find(parent, u)
            y = self.find(parent, v)

            if x != y:
                e += 1
                result.append([u, v, w])
                self.union(parent, x, y)

        print("Edges in the MST:")
        for u, v, weight in result:
            print(f"{u} -- {v} \t {weight}")

    def find(self, parent, i):
        if parent[i] == i:
            return i
        return self.find(parent, parent[i])

    def union(self, parent, x, y):
        xroot = self.find(parent, x)
        yroot = self.find(parent, y)

        parent[yroot] = xroot


# Example usage:
g = Graph(5)
g.add_edge(0, 1, 2)
g.add_edge(0, 3, 6)
g.add_edge(1, 2, 3)
g.add_edge(1, 3, 8)
g.add_edge(1, 4, 5)
g.add_edge(2, 4, 7)
g.add_edge(3, 4, 9)

g.kruskal_mst()
