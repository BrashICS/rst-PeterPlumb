'use strict';
document.getElementById("WhippedCream").addEventListener("DragEvent"), userdrink
document.getElementById("UserCupInput").addEventListener("Drop"), userdrink
document.getElementById("Layer1").addEventListener("Drop"), layer
document.getElementById("Layer1").addEventListener("Drop"), changeImage
let NofGuests = 0

function Play() {
  document.getElementById()
}

function WhippedCream {

}
while (actualgame == true) {
  game()
}

function userdrink () {
  if (document.getElementById("WhippedCream")) {
    
  }
}
function game() {

}

function changeImage(Image) {
  document.getElementById("Layer1").src
}
function layer() {
  if (document.getElementById == ("Layer1")) {
    document.getElementById("Layer1").hidden = false
  }
  else if (document.getElementById == ("Layer2")) {
    document.getElementById("Layer2").hidden = false
  }
  else if (document.getElementById == ("Layer3")) {
    document.getElementById("Layer3").hidden = false
  }

}

function CoffeeType(){;
  let randomflavour = randInt(1,3);
  if (randomflavour == 1){;
      CoffeeT = "Milk";
  }
  else if (randomflavour == 2){
      CoffeeT = "Cream"
  }
  else if (randomflavour == 3){
      CoffeeT = "Coldbrew"
  }
  return CoffeeT
}

function toppings() {
  let topping = randInt(1, 5)
  if (topping == 1){;
  order_of_toppings1 = WhippedCream
  }
  else if(topping == 2){;
  order_of_toppings1 = Cinnamon
  }
  else if (topping == 3){;
  order_of_toppings1 = ChocaloteChips
  }
  else if(topping == 4){;
  order_of_toppings1 = Wafers
  }
  else if(topping == 5){;
  order_of_toppings1 = Nuts
  }
  return order_of_toppings1
}


let WhippedCream = 0
let Cinnamon = 0
let ChocaloteChips = 0
let Wafers = 0
let Nuts = 0
function toppings2() {
  let topping2 = randInt(1, 5)
  if (topping2 == 1){;
  order_of_toppings2 = WhippedCream
  }
  else if(topping2 == 2){;
  order_of_toppings2 = Cinnamon
  }
  else if (topping2 == 3){;
  order_of_toppings2 = ChocaloteChips
  }
  else if(topping2 == 4){;
  order_of_toppings2 = Wafers
  }
  else if(topping == 5){;
  order_of_toppings2 = Cookie
  }
  return order_of_toppings2
}

function order(){
  let topping1 = order_of_toppings1
  let topping2 = order_of_toppings2
  let GuestsOrder = (CoffeeT + topping1 + topping2)
  NofGuests = NofGuests + 1
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

if (NofGuests < 0) {
  order()
}
console.log(order())
console.log(order())
console.log(order())

