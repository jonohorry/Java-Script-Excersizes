function userName(str){
  var c = /^\b[a-z]+_\d{2}$/;
  var x = c.test(str);
  
  return x;
}
console.log(userName("george_68"));


//--------------------------------------------------------------------


function searchPrice(str){
  var p = /\$\d+/
  var x = p.exec(str);
  
  return x[0];
}
console.log(searchPrice("The raspberry pi cost $35 at the store."));
