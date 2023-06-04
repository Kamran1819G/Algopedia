def build_lps(pattern):
    lps = [0] * len(pattern)
    i = 0
    j = 1

    while j < len(pattern):
        if pattern[i] == pattern[j]:
            i += 1
            lps[j] = i
            j += 1
        else:
            if i != 0:
                i = lps[i - 1]
            else:
                lps[j] = 0
                j += 1

    return lps


def kmp_search(text, pattern):
    m = len(pattern)
    n = len(text)

    lps = build_lps(pattern)

    i = 0
    j = 0
    occurrences = []

    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

            if j == m:
                occurrences.append(i - j)
                j = lps[j - 1]
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return occurrences


# Example usage:
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
result = kmp_search(text, pattern)
print("Pattern found at indices:", result)
