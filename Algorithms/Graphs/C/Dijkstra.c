#include <stdio.h>
#include <stdbool.h>
#include <limits.h>

#define V 6 // Number of vertices

int minDistance(int dist[], bool visited[])
{
    int min = INT_MAX;
    int min_index = -1;

    for (int v = 0; v < V; v++)
    {
        if (!visited[v] && dist[v] < min)
        {
            min = dist[v];
            min_index = v;
        }
    }

    return min_index;
}

void printSolution(int dist[])
{
    printf("Vertex\tDistance from Source\n");
    for (int i = 0; i < V; i++)
    {
        printf("%d\t%d\n", i, dist[i]);
    }
}

void dijkstra(int graph[V][V], int source)
{
    int dist[V];
    bool visited[V];

    for (int i = 0; i < V; i++)
    {
        dist[i] = INT_MAX;
        visited[i] = false;
    }

    dist[source] = 0;

    for (int count = 0; count < V - 1; count++)
    {
        int u = minDistance(dist, visited);
        visited[u] = true;

        for (int v = 0; v < V; v++)
        {
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    printSolution(dist);
}

int main()
{
    int graph[V][V] = {
        {0, 1, 4, 0, 0, 0},
        {1, 0, 2, 7, 0, 0},
        {4, 2, 0, 1, 5, 0},
        {0, 7, 1, 0, 3, 2},
        {0, 0, 5, 3, 0, 6},
        {0, 0, 0, 2, 6, 0}};

    int source = 0;

    dijkstra(graph, source);

    return 0;
}
