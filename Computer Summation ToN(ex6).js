function computeSummationToN(n) {
  // your code here
  var x = 0;
  for(i = n; i > 0; i--){
    x += i;
  }
  return x;
}
var output = computeSummationToN(6);
console.log(output); // --> 21
