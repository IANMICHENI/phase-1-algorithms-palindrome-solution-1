function isPalindrome(word) {
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const cleanedWord = word.replace(/[^a-z]/g, '').toLowerCase();
  const reversedWord = reverseString(cleanedWord);
  return cleanedWord === reversedWord;
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
