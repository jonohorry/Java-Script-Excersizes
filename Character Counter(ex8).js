function countCharacter(str, char) {
  // your code here
  var count = 0;
  str = str.toLowerCase();
  
  for (var i = 0; i < str.length; i++){
    if (str[i] == char){
      count += 1;
    }
  }
  return count
  
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
