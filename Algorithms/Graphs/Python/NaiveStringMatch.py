def naive_string_matching(text, pattern):
    n = len(text)
    m = len(pattern)

    occurrences = []

    for i in range(n - m + 1):
        j = 0
        while j < m and text[i+j] == pattern[j]:
            j += 1

        if j == m:
            occurrences.append(i)

    return occurrences


text = "ABABDABACDABABCABAB"
pattern = "ABABC"

occurrences = naive_string_matching(text, pattern)
print("Occurrences found at indices:", occurrences)
