function isPalindrome(word) {
  // Write your algorithm here
  const array = word.split("")
  const reversedArray = array.reverse()
  const reversedWord = reversedArray.join('')
  return reversedWord === word
}

isPalindrome('racecar')

/* 
  Add your pseudocode here
  Convert the word to an array
  reverse the rray
  convert the array to a string
  compare the reversed word to the passed in word
*/

/*
  Add written explanation of your solution here
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
