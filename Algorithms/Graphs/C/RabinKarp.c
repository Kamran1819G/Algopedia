#include <stdio.h>
#include <string.h>

#define PRIME 101

int rabin_karp(char *pattern, char *text)
{
    int pattern_len = strlen(pattern);
    int text_len = strlen(text);

    // Calculate the hash value of the pattern and the first substring of the same length from the text
    int pattern_hash = calculate_hash(pattern, pattern_len);
    int text_hash = calculate_hash(text, pattern_len);

    // Iterate through each substring of the text with the same length as the pattern
    for (int i = 0; i <= text_len - pattern_len; i++)
    {
        // Check if the hash values of the current substring and the pattern match
        if (pattern_hash == text_hash && strncmp(pattern, &text[i], pattern_len) == 0)
        {
            return i;
        }

        // Calculate the hash value of the next substring using the previous hash value
        if (i < text_len - pattern_len)
        {
            text_hash = recalculate_hash(text_hash, text[i], text[i + pattern_len], pattern_len);
        }
    }

    return -1;
}

int calculate_hash(char *str, int length)
{
    int hash_value = 0;

    // Calculate the hash value using the ASCII values of the characters
    for (int i = 0; i < length; i++)
    {
        hash_value = (hash_value * 256 + str[i]) % PRIME;
    }

    return hash_value;
}

int recalculate_hash(int old_hash, char old_char, char new_char, int pattern_len)
{
    // Recalculate the hash value using the previous hash value, the old character, and the new character
    int new_hash = (old_hash - old_char * pow(256, pattern_len - 1)) % PRIME;
    new_hash = (new_hash * 256 + new_char) % PRIME;

    return new_hash;
}

int main()
{
    char pattern[] = "abc";
    char text[] = "abracadabra";

    int result = rabin_karp(pattern, text);

    if (result != -1)
    {
        printf("Pattern found at index %d\n", result);
    }
    else
    {
        printf("Pattern not found in the text.\n");
    }

    return 0;
}
