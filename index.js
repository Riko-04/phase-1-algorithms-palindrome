function isPalindrome(word) {
  // Convert the word to lowercase to ensure case insensitivity
  const lowerCaseWord = word.toLowerCase();
  
  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = lowerCaseWord.length - 1;
  
  // Iterate over the word until the pointers meet
  while (start < end) {
    // If the characters at the pointers don't match, return false
    if (lowerCaseWord[start] !== lowerCaseWord[end]) {
      return false;
    }
    // Move the pointers towards each other
    start++;
    end--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Pseudocode:
  1. Convert the word to lowercase.
  2. Initialize two pointers, one at the start of the word and one at the end.
  3. Iterate over the word using the pointers:
     - If the characters at the pointers don't match, return false.
     - Move the pointers towards each other.
  4. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here
*/

/*
  Solution Explanation:
  - This function checks if a given word is a palindrome.
  - It converts the word to lowercase to ensure case insensitivity.
  - It then uses two pointers starting from the beginning and end of the word, moving towards each other.
  - If the characters at the pointers don't match, it returns false.
  - If the loop completes without returning false, the word is a palindrome, and it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
