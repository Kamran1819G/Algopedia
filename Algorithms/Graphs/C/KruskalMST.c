#include <stdio.h>
#include <stdlib.h>

// Structure to represent an edge in the graph
struct Edge
{
    int src, dest, weight;
};

// Structure to represent a graph
struct Graph
{
    int V, E;
    struct Edge *edge;
};

// Creates a graph with V vertices and E edges
struct Graph *createGraph(int V, int E)
{
    struct Graph *graph = (struct Graph *)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
    graph->edge = (struct Edge *)malloc(E * sizeof(struct Edge));
    return graph;
}

// Find function used in disjoint set
int find(int parent[], int i)
{
    if (parent[i] == i)
        return i;
    return find(parent, parent[i]);
}

// Union function used in disjoint set
void unionSet(int parent[], int rank[], int x, int y)
{
    int xroot = find(parent, x);
    int yroot = find(parent, y);

    if (rank[xroot] < rank[yroot])
        parent[xroot] = yroot;
    else if (rank[xroot] > rank[yroot])
        parent[yroot] = xroot;
    else
    {
        parent[yroot] = xroot;
        rank[xroot]++;
    }
}

// Compare function used for sorting the edges
int compare(const void *a, const void *b)
{
    struct Edge *aEdge = (struct Edge *)a;
    struct Edge *bEdge = (struct Edge *)b;
    return aEdge->weight - bEdge->weight;
}

// Kruskal's algorithm to find MST
void kruskalMST(struct Graph *graph)
{
    int V = graph->V;
    struct Edge result[V]; // Stores the edges of the MST
    int e = 0;             // An index variable to track the edges of MST
    int i = 0;             // An index variable for sorted edges array

    qsort(graph->edge, graph->E, sizeof(struct Edge), compare); // Sort edges by weight

    int parent[V];
    int rank[V];

    for (int v = 0; v < V; v++)
    {
        parent[v] = v;
        rank[v] = 0;
    }

    while (e < V - 1)
    {
        struct Edge next_edge = graph->edge[i++];
        int x = find(parent, next_edge.src);
        int y = find(parent, next_edge.dest);

        if (x != y)
        {
            result[e++] = next_edge;
            unionSet(parent, rank, x, y);
        }
    }

    printf("Edges in the MST:\n");
    for (i = 0; i < e; i++)
    {
        printf("%d -- %d \t %d\n", result[i].src, result[i].dest, result[i].weight);
    }
}

int main()
{
    int V = 5; // Number of vertices in the graph
    int E = 7; // Number of edges in the graph
    struct Graph *graph = createGraph(V, E);

    // Add edges to the graph
    graph->edge[0].src = 0;
    graph->edge[0].dest = 1;
    graph->edge[0].weight = 2;

    graph->edge[1].src = 0;
    graph->edge[1].dest = 3;
    graph->edge[1].weight = 6;

    graph->edge[2].src = 1;
    graph->edge[2].dest = 2;
    graph->edge[2].weight = 3;

    graph->edge[3].src = 1;
    graph->edge[3].dest = 3;
    graph->edge[3].weight = 8;

    graph->edge[4].src = 1;
    graph->edge[4].dest = 4;
    graph->edge[4].weight = 5;

    graph->edge[5].src = 2;
    graph->edge[5].dest = 4;
    graph->edge[5].weight = 7;

    graph->edge[6].src = 3;
    graph->edge[6].dest = 4;
    graph->edge[6].weight = 9;

    kruskalMST(graph);

    return 0;
}
