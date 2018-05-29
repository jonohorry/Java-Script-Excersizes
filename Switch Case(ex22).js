function checkCar() {
  var text;
  var favCar = prompt("input a car");

  switch(favCar) {
  
    case "BMW":
      text = "German car";
      break;
    case "Ford":
      text = "American car";
      break;
    case "Peugeot":
      text = "French car";
      break;
    case "default":
      text = "Unknown car name";
      break;
    
      
  }
  return text;
}
console.log(checkCar());
