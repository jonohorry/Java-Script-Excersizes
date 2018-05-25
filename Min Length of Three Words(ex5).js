function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var min = 0
  if (word1.length < word2.length && word1.length < word3.length){
      min = word1.length;
  }
  else if (word2.length < word1.length && word2.length < word3.length){
    min = word2.length;
  }
  else if (word3.length < word1.length && word3.length < word2.length){
    min = word3.length;
  }
  else if (word1 == word2){
    min = word1.length;
  }
  else if (word2 == word3){
    min = word2.length
  }
  return min
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
