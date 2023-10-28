//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example: eat -> tea, cat -> act

function isAnagram(str1, str2)
{
    if(str1.length !== str2.length) return false;

    return str1.split('').sort().toString() === str2.split('').sort().toString()
};

console.log(isAnagram("cat", "act"));
console.log(isAnagram("rat", "car"));
