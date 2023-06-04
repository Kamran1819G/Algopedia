def rabin_karp(pattern, text):
    # Define the prime number to be used in the hashing function
    prime = 101

    # Calculate the hash value of the pattern and the first substring of the same length from the text
    pattern_hash = calculate_hash(pattern, prime)
    text_hash = calculate_hash(text[:len(pattern)], prime)

    # Iterate through each substring of the text with the same length as the pattern
    for i in range(len(text) - len(pattern) + 1):
        # Check if the hash values of the current substring and the pattern match
        if pattern_hash == text_hash and pattern == text[i:i+len(pattern)]:
            return i

        # Calculate the hash value of the next substring using the previous hash value
        if i < len(text) - len(pattern):
            text_hash = recalculate_hash(
                text_hash, text[i], text[i + len(pattern)], prime)

    return -1


def calculate_hash(string, prime):
    # Initialize the hash value
    hash_value = 0

    # Calculate the hash value using the ASCII values of the characters
    for char in string:
        hash_value = (hash_value * 256 + ord(char)) % prime

    return hash_value


def recalculate_hash(old_hash, old_char, new_char, prime):
    # Recalculate the hash value using the previous hash value, the old character, and the new character
    new_hash = (old_hash - ord(old_char) * pow(256, len(pattern) - 1)) % prime
    new_hash = (new_hash * 256 + ord(new_char)) % prime

    return new_hash


# Example usage
pattern = "abc"
text = "abracadabra"
result = rabin_karp(pattern, text)
if result != -1:
    print("Pattern found at index", result)
else:
    print("Pattern not found in the text.")
