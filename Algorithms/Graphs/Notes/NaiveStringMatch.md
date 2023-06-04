# Naive String Matching Algorithm

1. We start by defining the naive_string_matching function, which takes two parameters: text and pattern.

2. We initialize variables n and m to store the lengths of the text and pattern, respectively.

3. We create an empty list called occurrences to store the starting indices of the pattern matches.

4. We use a loop to iterate over the text from the beginning until the last possible position where the pattern can fit entirely in the text (i.e., n - m + 1).

5. Inside the loop, we set a variable j to 0 to represent the current position in the pattern.

6. We use another loop to compare each character of the pattern with the corresponding character in the text, starting from the current position i.

7. Within this loop, we check two conditions: whether j is less than m (to ensure we haven't reached the end of the pattern) and whether the characters at the corresponding positions i + j in the text and j in the pattern match.

8. If both conditions are satisfied, we increment j by 1 and continue checking the next characters.

9. If we reach the end of the pattern (i.e., j == m), it means we have found a match. We append the starting index i to the occurrences list.

10. Once the loop ends, we have checked all possible positions of the pattern in the text. We return the occurrences list.

11. In the example usage, we define a text string and a pattern string.

12. We call the naive_string_matching function with the text and pattern as arguments, and store the result in the occurrences variable.

13. Finally, we print the list of starting indices where the pattern was found in the text.

In the given example, the pattern "ABABC" occurs at index 10 in the text "ABABDABACDABABCABAB". Therefore, the output is [10].
