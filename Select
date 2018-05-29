function select(arr, obj) {
  // your code here
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    if(obj.hasOwnProperty(arr[i])){
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
