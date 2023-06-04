#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void build_lps(char *pattern, int *lps)
{
    int len = 0;
    int i = 1;
    int m = strlen(pattern);

    lps[0] = 0;

    while (i < m)
    {
        if (pattern[i] == pattern[len])
        {
            len++;
            lps[i] = len;
            i++;
        }
        else
        {
            if (len != 0)
            {
                len = lps[len - 1];
            }
            else
            {
                lps[i] = 0;
                i++;
            }
        }
    }
}

int *kmp_search(char *text, char *pattern)
{
    int n = strlen(text);
    int m = strlen(pattern);

    int *lps = (int *)malloc(sizeof(int) * m);
    int *occurrences = (int *)malloc(sizeof(int) * n);

    build_lps(pattern, lps);

    int i = 0;
    int j = 0;
    int count = 0;

    while (i < n)
    {
        if (pattern[j] == text[i])
        {
            i++;
            j++;

            if (j == m)
            {
                occurrences[count] = i - j;
                count++;
                j = lps[j - 1];
            }
        }
        else
        {
            if (j != 0)
            {
                j = lps[j - 1];
            }
            else
            {
                i++;
            }
        }
    }

    occurrences = (int *)realloc(occurrences, sizeof(int) * count);
    occurrences[count] = -1;

    free(lps);
    return occurrences;
}

int main()
{
    char text[] = "ABABDABACDABABCABAB";
    char pattern[] = "ABABCABAB";

    int *result = kmp_search(text, pattern);

    printf("Pattern found at indices: ");
    for (int i = 0; result[i] != -1; i++)
    {
        printf("%d ", result[i]);
    }
    printf("\n");

    free(result);
    return 0;
}
