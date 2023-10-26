function naive_string_match(str, pattern)
{
    occurence = [];

    for(let i = 0; i <= str.length - pattern.length; i++)
    {
        j = 0;
        while(j < pattern.length && str[i+j] === pattern[j])  j+= 1;
        if (j == pattern.length) occurence.push(i);
    }
    return occurence;
}

str = "AABAACAADAABAABA"
pattern = "AABA"

console.log(naive_string_match(str, pattern))