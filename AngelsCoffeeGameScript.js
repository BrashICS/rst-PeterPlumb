'use strict';
/**document.getElementById("WhippedCream").addEventListener("DragEvent", userdrink)/*
/**document.getElementById("UserCupInput").addEventListener("Drop", userdrink)*/
 /**document.getElementById("Layer1ID").addEventListener("Drop", layer)*/
/**document.getElementById("Layer2ID").addEventListener("Drop", changeImage)*/
document.getElementById('Checker').addEventListener("onclick", FoodCheck)
document.getElementById('ResetButton').addEventListener("onclick", Reset)
document.getElementById('WhippedCream').addEventListener('click', WhippedLayer3Function)

if (topping1 == document.getElementById("Whipped")) {

}

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

let Score = 0

function Layer1Function() {

}

function Layer2Function() {

}

let UserInputLayer3 = 0
function WhippedLayer3Function() {
  document.getElementById('Layer3').src= document.getElementById("WhippedCream")
  UserInputLayer3 = WhippedCream1
}

let UserInputLayer2 = 0

let UserInputLayer1 = 0

function FoodCheck() {
/**
  if { (document.getElementById(Layer1 == CoffeeStyle;)
  }
  (document.getElementById(Layer1 == CoffeeStyle, Layer2 == topping1, Layer3 == topping2)){
    Score = Score + 1
    NofGuests = NofGuests - 1
    document.getElementById('Guest').hidden = true
  }
  else {
    NofGuests = NofGuests - 1
    document.getElementById('Guest').hidden = true
  }
  */
}

function Reset() {
  document.getElementById('Layer1').hiddend
  document.getElementById('Layer2').hidden
  document.getElementById('Layer3').hidden
}

let CreamG = document.getElementById("Cream")
let ColdbrewG = document.getElementById("ColdBrew")

let Cream1 = CreamG
let Coldbrew1 = ColdbrewG

let CoffeeT = 0


function CoffeeType(){;
  let randomflavour = randInt(1,2);
  if (randomflavour == 1){;
      CoffeeT = Coldbrew1;
  }
  else if (randomflavour == 2){
      CoffeeT = Cream1
  }
  return CoffeeT
}

let WhippedCreamG = document.getElementById("WhippedCream")
let CinnamonG = document.getElementById("")
let ChocaloteChipsG = document.getElementById("")
let WafersG = document.getElementById("")
let NutsG = document.getElementById("")
let NutmegG = document.getElementById("")


let WhippedCream1 = WhippedCreamG
let Cinnamon1 = CinnamonG
let ChocaloteChips1 = ChocaloteChipsG
let Wafers1 = WafersG
let Nuts1 = NutsG
let Nutmeg1 = NutmegG

let topping = randInt(1, 3)
let order_of_toppings1 = 0
function toppings() {
  let topping = randInt(1, 3)
  if (topping == 1){;
  order_of_toppings1 = Wafers1
  }
  else if(topping == 2){;
  order_of_toppings1 = Nuts1
  }
  else if (topping == 3){;
  order_of_toppings1 = Nutmeg1
  }

  return order_of_toppings1
}

let topping2 = randInt(1, 3)
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
  return order_of_toppings2
}

function order(){
  let topping1 = order_of_toppings1
  let topping2 = order_of_toppings2
  let CoffeeStyle = CoffeeT
  let GuestsOrder1 = (CoffeeStyle + topping1 + topping2)
  document.getElementById('Guest').hidden = false
  NofGuests = NofGuests + 1
  return GuestsOrder1
}


let toppings1G = 0
let toppings2G = 0
let CoffeeStyleG = 0
function GuestsOrder() {
  if(topping1 == Wafers1){
    toppings1G =="Wafers"
  }
  else if(topping1 == Nuts1){
    toppings1G =="Nuts"
  }
  else if(topping1 == Nutmeg1){
    toppings1G =="Nutmeg"
  }
  else if(topping2 == WhippedCream1){
    toppings2G =="Whipped Cream"
  }
  else if(topping2 == Cinnamon1){
    toppings2G =="Cinnamon"
  }
  else if(topping2 == ChocaloteChips1){
    toppings2G =="Chocalote Chips"
  }
  else if(CoffeeStyle == Coldbrew1){
    CoffeeStyleG == "Coldbrew"
  }
  else if(CoffeeStyle == Cream1){
    CoffeeStyleG == "Cream"
  }
  return(CoffeeStyleG + " " + toppings1G + " " + toppings2G)
}


function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

while (NofGuests == 0){
  order()
}

CoffeeType()
toppings2()
toppings()
console.log(GuestsOrder())



