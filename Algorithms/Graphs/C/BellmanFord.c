#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

struct Edge
{
    int source, destination, weight;
};

struct Graph
{
    int V, E;
    struct Edge *edge;
};

struct Graph *createGraph(int V, int E)
{
    struct Graph *graph = (struct Graph *)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
    graph->edge = (struct Edge *)malloc(E * sizeof(struct Edge));
    return graph;
}

void printDistances(int dist[], int V)
{
    printf("Vertex\tDistance from Source\n");
    for (int i = 0; i < V; ++i)
        printf("%d\t%d\n", i, dist[i]);
}

void BellmanFord(struct Graph *graph, int src)
{
    int V = graph->V;
    int E = graph->E;
    int dist[V];

    // Step 1: Initialize distances from source to all other vertices as infinity
    for (int i = 0; i < V; ++i)
        dist[i] = INT_MAX;
    dist[src] = 0;

    // Step 2: Relax all edges V - 1 times
    for (int i = 1; i < V; ++i)
    {
        for (int j = 0; j < E; ++j)
        {
            int u = graph->edge[j].source;
            int v = graph->edge[j].destination;
            int weight = graph->edge[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    // Step 3: Check for negative-weight cycles
    for (int i = 0; i < E; ++i)
    {
        int u = graph->edge[i].source;
        int v = graph->edge[i].destination;
        int weight = graph->edge[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
        {
            printf("Graph contains negative-weight cycle\n");
            return;
        }
    }

    // Step 4: Print the calculated distances
    printDistances(dist, V);
}

int main()
{
    int V = 5; // Number of vertices
    int E = 8; // Number of edges
    struct Graph *graph = createGraph(V, E);

    // Add edges to the graph
    graph->edge[0].source = 0;
    graph->edge[0].destination = 1;
    graph->edge[0].weight = -1;

    graph->edge[1].source = 0;
    graph->edge[1].destination = 2;
    graph->edge[1].weight = 4;

    graph->edge[2].source = 1;
    graph->edge[2].destination = 2;
    graph->edge[2].weight = 3;

    graph->edge[3].source = 1;
    graph->edge[3].destination = 3;
    graph->edge[3].weight = 2;

    graph->edge[4].source = 1;
    graph->edge[4].destination = 4;
    graph->edge[4].weight = 2;

    graph->edge[5].source = 3;
    graph->edge[5].destination = 2;
    graph->edge[5].weight = 5;

    graph->edge[6].source = 3;
    graph->edge[6].destination = 1;
    graph->edge[6].weight = 1;

    graph->edge[7].source = 4;
    graph->edge[7].destination = 3;
    graph->edge[7].weight = -3;

    int source_vertex = 0;
    BellmanFord(graph, source_vertex);

    return 0;
}
