'use strict';
/**document.getElementById("WhippedCream").addEventListener("DragEvent", userdrink)/*
/**document.getElementById("UserCupInput").addEventListener("Drop", userdrink)*/
 /**document.getElementById("Layer1ID").addEventListener("Drop", layer)*/
/**document.getElementById("Layer2ID").addEventListener("Drop", changeImage)*/
const WhippedCream = document.querySelector('WhippedCream')

document.getElementById("WhippedCream").addEventListener('dragstart', dragstart)


function dragstart(e) {
  console.log("drag starts")
}

/**

function userdrink () {
  if (document.getElementById("WhippedCream")) {

  }
}
*
 */
/**
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
*/
let Milk = "Coldbrew + Milk"
let Cream = "Coldbrew + Cream"
let Coldbrew = "Coldbrew"
let CoffeeT = 0
function CoffeeType(){;
  let randomflavour = randInt(1,3);
  if (randomflavour == 1){;
      CoffeeT = Milk;
  }
  else if (randomflavour == 2){
      CoffeeT = Cream
  }
  else if (randomflavour == 3){
      CoffeeT = Coldbrew
  }
  return CoffeeT
}



let WhippedCream1 = "WhippedCream"
let Cinnamon1 = "Cinnamon"
let ChocaloteChips1 = "ChocaloteChips"
let Wafers1 = "Wafers"
let Nuts1 = "Nuts"

let topping = randInt(1, 5)
let order_of_toppings1 = 0
function toppings() {
  let topping = randInt(1, 5)
  if (topping == 1){;
  order_of_toppings1 = WhippedCream1
  }
  else if(topping == 2){;
  order_of_toppings1 = Cinnamon1
  }
  else if (topping == 3){;
  order_of_toppings1 = ChocaloteChips1
  }
  else if(topping == 4){;
  order_of_toppings1 = Wafers1
  }
  else if(topping == 5){;
  order_of_toppings1 = Nuts1
  }
  return order_of_toppings1
}

let topping2 = randInt(1, 5)
let order_of_toppings2 = 0
function toppings2() {
  let topping2 = randInt(1, 5)
  if (topping2 == 1){;
  order_of_toppings2 = WhippedCream1
  }
  else if(topping2 == 2){;
  order_of_toppings2 = Cinnamon1
  }
  else if (topping2 == 3){;
  order_of_toppings2 = ChocaloteChips1
  }
  else if(topping2 == 4){;
  order_of_toppings2 = Wafers1
  }
  else if(topping == 5){;
  order_of_toppings2 = Cookie1
  }
  return order_of_toppings2
}

function order(){
  let topping1 = order_of_toppings1
  let topping2 = order_of_toppings2
  let CoffeeStyle = CoffeeT
  let GuestsOrder = (CoffeeStyle + topping1 + topping2)
  NofGuests = NofGuests + 1
  return GuestsOrder
}


function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let NofGuests = 0
if (NofGuests < 0) {
  order()
}

CoffeeType()
toppings2()
toppings()

console.log(order())
console.log(order())
console.log(order())

