function solution(s) {
  const uniqueChars = new Set();

  // Iterate over the characters of the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    uniqueChars.add(char); // Add character to the set
  }

  return uniqueChars.size; // Return the size of the set
}
