function flipPairs(input){
  var split = input.split("");
  var array = [];
  for(var i = 0; i < split.length; i += 2){
    array.push(split[i+1]);
    array.push(split[i]);
  }
  return array.join("");
}
var input = 'check out how interesting this problem is, it\'s insanely interesting!';

var output = flipPairs(input);

console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
