function solution(inputString) {
  // Iterate over the characters of the inputString
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    // Check if the character is a digit
    if (/[0-9]/.test(char)) {
      return char; // Return the leftmost digit
    }
  }
}
