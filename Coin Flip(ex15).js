function coinFlip(num){
  var tailsCount = 0;
  var headsCount = 0;
  var flips = prompt("How many flips");
  for(let i = 1; i < flips;i++){
    var coin = Math.floor(Math.random()*2)
    if(coin == 1){
      headsCount++;
    }
    else{
      tailsCount++;
    }
  }
  return `Tails : ${tailsCount}, Heads : ${headsCount}`;
}
console.log(coinFlip());
