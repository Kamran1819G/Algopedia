# Knuth-Morris-Pratt (KMP) Algorithm

The Knuth-Morris-Pratt (KMP) algorithm is an efficient pattern matching algorithm that finds occurrences of a given pattern within a larger text. It works by utilizing the information in the pattern itself to avoid unnecessary character comparisons.

## How it works

The algorithm preprocesses the pattern to construct the Longest Proper Prefix which is also a Suffix (LPS) array. The LPS array contains the length of the longest prefix of the pattern that is also a suffix. This information is used to skip unnecessary comparisons during the search phase.

The KMP algorithm performs the search by iterating through the text and the pattern simultaneously. It maintains two pointers, i for the text and j for the pattern. If the characters at i and j match, both pointers are incremented. When a complete match is found (i.e., j reaches the end of the pattern), an occurrence of the pattern is recorded, and j is reset to the value of the LPS at index j-1.

If there is a mismatch between characters at i and j, the algorithm utilizes the LPS array to determine the next position to compare in the pattern. It updates the j pointer to the value stored in the LPS array at index j-1, effectively skipping unnecessary comparisons. If j is already at the start of the pattern, i is incremented to move to the next character in the text.

## Implementation

build_lps(pattern): This function constructs the LPS array for the given pattern. It iterates through the pattern, comparing characters to determine the length of the longest proper prefix that is also a suffix. The LPS array is built iteratively using two pointers, i and j. It returns the constructed LPS array.

kmp_search(text, pattern): This function performs the actual pattern search using the KMP algorithm. It takes the text and pattern as input and returns a list of indices where the pattern is found in the text. It initializes the pointers i and j to zero and maintains a list, occurrences, to store the indices where the pattern is found. It iterates through the text, comparing characters at i and j. If a match is found, the pointers are incremented, and if a complete match is found, the index of the occurrence is recorded, and the j pointer is reset using the LPS array. In case of a mismatch, the j pointer is updated using the LPS array to skip unnecessary comparisons.

That's it! You can now use the kmp_search function to find occurrences of a pattern within a given text using the Knuth-Morris-Pratt algorithm.
