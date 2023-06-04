#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

#define MAX_VERTICES 100

struct Graph
{
    int V;
    int graph[MAX_VERTICES][MAX_VERTICES];
};

struct Graph *createGraph(int V)
{
    struct Graph *graph = (struct Graph *)malloc(sizeof(struct Graph));
    graph->V = V;

    for (int i = 0; i < V; i++)
    {
        for (int j = 0; j < V; j++)
        {
            graph->graph[i][j] = 0;
        }
    }

    return graph;
}

void addEdge(struct Graph *graph, int src, int dest, int weight)
{
    graph->graph[src][dest] = weight;
    graph->graph[dest][src] = weight;
}

void printMST(int parent[], struct Graph *graph)
{
    printf("Edge \tWeight\n");
    for (int i = 1; i < graph->V; i++)
    {
        printf("%d - %d \t%d\n", parent[i], i, graph->graph[i][parent[i]]);
    }
}

int minKey(int key[], bool mstSet[], int V)
{
    int min_val = INT_MAX;
    int min_idx = -1;
    for (int v = 0; v < V; v++)
    {
        if (!mstSet[v] && key[v] < min_val)
        {
            min_val = key[v];
            min_idx = v;
        }
    }
    return min_idx;
}

void primMST(struct Graph *graph)
{
    int parent[MAX_VERTICES];
    int key[MAX_VERTICES];
    bool mstSet[MAX_VERTICES];

    for (int i = 0; i < graph->V; i++)
    {
        key[i] = INT_MAX;
        mstSet[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for (int count = 0; count < graph->V - 1; count++)
    {
        int u = minKey(key, mstSet, graph->V);
        mstSet[u] = true;

        for (int v = 0; v < graph->V; v++)
        {
            if (graph->graph[u][v] && !mstSet[v] && graph->graph[u][v] < key[v])
            {
                parent[v] = u;
                key[v] = graph->graph[u][v];
            }
        }
    }

    printMST(parent, graph);
}

int main()
{
    int V = 5;
    struct Graph *graph = createGraph(V);

    addEdge(graph, 0, 1, 2);
    addEdge(graph, 0, 3, 6);
    addEdge(graph, 1, 2, 3);
    addEdge(graph, 1, 3, 8);
    addEdge(graph, 1, 4, 5);
    addEdge(graph, 2, 4, 7);
    addEdge(graph, 3, 4, 9);

    primMST(graph);

    return 0;
}
