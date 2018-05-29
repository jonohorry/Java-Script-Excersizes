function acronymMaker(str){
  return str
    .split(/\s/)
    .reduce(function(accumulator, word) {
      return accumulator + word.charAt(0);
    }, '');
}
output = acronymMaker("Portable Network Graphics");
console.log(output);
