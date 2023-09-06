function solution(s, t) {
  if (s.length !== t.length) {
    return -1; // Invalid input, strings must have the same length
  }

  const charCount = new Array(26).fill(0); // Array to store character frequencies

  // Count the frequencies of characters in string s
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - 65; // Convert character to index (A: 0, B: 1, ..., Z: 25)
    charCount[charCode]++;
  }

  // Subtract the frequencies of characters in string t
  for (let i = 0; i < t.length; i++) {
    const charCode = t.charCodeAt(i) - 65; // Convert character to index (A: 0, B: 1, ..., Z: 25)
    charCount[charCode]--;
  }

  // Sum the absolute differences in frequencies
  let replacements = 0;
  for (let i = 0; i < 26; i++) {
    replacements += Math.abs(charCount[i]);
  }

  // Divide the total replacements by 2 since each replacement affects both strings
  return replacements / 2;
}

console.log(solution("AABAA", "BBAAA")); // Output: 1
console.log(solution("OVGHK", "RPGUC")); // Output: 4
