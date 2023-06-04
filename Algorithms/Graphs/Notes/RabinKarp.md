# Rabin-Karp Algorithm

The Rabin-Karp algorithm is a string searching algorithm that finds occurrences of a pattern within a text. It uses hashing to efficiently compare the pattern with substrings of the text. The algorithm has an average-case time complexity of O(n+m), where n is the length of the text and m is the length of the pattern.

## Algorithm Steps

1. Calculate the hash value of the pattern and the first substring of the same length from the text.
2. Iterate through each substring of the text with the same length as the pattern:
    - Check if the hash values of the current substring and the pattern match.
    - If the hash values match, perform an additional check to verify the substring and the pattern are actually equal.
    - If a match is found, return the index of the starting position of the pattern in the text.
    - If no match is found, recalculate the hash value for the next substring using the previous hash value.
3. If no match is found in the entire text, return -1 to indicate that the pattern is not present.

## Code Explanation

The provided Python code implements the Rabin-Karp algorithm:

- The rabin_karp function takes the pattern and text as inputs and returns the index of the first occurrence of the pattern in the text, or -1 if the pattern is not found.
- The calculate_hash function calculates the hash value of a string using the ASCII values of its characters and the prime number 101.
- The recalculate_hash function updates the hash value when moving to the next substring by subtracting the contribution of the old character and adding the contribution of the new character.

- In the main code:
    - The pattern and text variables are initialized with example values.
    - The rabin_karp function is called with the pattern and text.
    - If a match is found, it prints the index of the first occurrence of the pattern in the text. Otherwise, it prints that the pattern was not found.

- To use this code, you can modify the pattern and text variables with your own values and run the program. It will output the index of the first occurrence of the pattern in the text or indicate if the pattern is not present.

- Please note that the code assumes that the pattern and text consist of ASCII characters only. Also, keep in mind that the prime number used for hashing can affect the efficiency and collision probability of the algorithm. Choosing a suitable prime number is crucial for optimal performance.