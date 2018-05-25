//converts celsius to fahrenheit and viceverca
function cToF(celsius) {
  // this is celsius to Fahrenheit
  
  var cTemp = celsius; 
  CtF = cTemp * 1.8 + 32;
  var message = cTemp+'\xB0C is ' + CtF + '\xB0F.';
  console.log(message);
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  var fTemp = fahrenheit; 
  FtC = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + FtC + '\xB0C.';
  console.log(message);
  
  
}

cToF(60);
fToC(45);
