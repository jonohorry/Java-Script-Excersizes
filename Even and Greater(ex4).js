//detects if a number is even and greater than 10
function isEvenAndGreaterThanTen(num) {
  // your code here
  if (num % 2 === 0 && num >= 10){
    return true
  }
  else{
    return false
  }
}
var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
