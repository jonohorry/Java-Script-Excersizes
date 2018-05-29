function getLongestWordOfMixedElements(arr) {
  // your code here
  var longestword = ' ';
  var wordCount = 0;
  var wordArray = [];
  
  for (var element = 0; element < arr.length; element++){
    if (typeof arr[element] === 'string'){
      wordCount++;
      wordArray.push(arr[element]);
    }
  }
  
  if (arr.length < 1 || wordCount < 1){
    return '';
  }
  
  longestword = wordArray[0];
  
  for (var word = 0; word < wordArray.length; word++){
    if (wordArray[word].length > longestword.length){
      longestword = wordArray[word]
    }
  }
  return longestword;
}
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
