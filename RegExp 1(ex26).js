function zipCode(str){
  var num = /^\d{5}$/;
  var x = num.test(str);
  
  return x;
}
console.log(zipCode("74055"));

function whiteSpace(str){
  var ws = /\s/
  var x = ws.test(str)
  
  return x;
}
console.log(whiteSpace("owasso rams"))

function socialSecurityNumber(str){
  var  x = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
  return x.test(str);
}
console.log(socialSecurityNumber("542-85-7569"));


