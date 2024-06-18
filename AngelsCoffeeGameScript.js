'use strict';
document.getElementById('Checker').addEventListener("click", Checkers)
document.getElementById('ResetButton').addEventListener("click", Reset)

document.getElementById('WhippedCream').addEventListener('click', WhippedLayer3Function)
document.getElementById('ChocaloteChip').addEventListener('click', ChocaloteChipLayer3Function)
document.getElementById('Cinnamon').addEventListener('click', CinnamonLayer3Function)

document.getElementById('Wafer').addEventListener('click', WaferLayer2Function)
document.getElementById('Nuts').addEventListener('click', NutsLayer2Function)
document.getElementById('Nutmeg').addEventListener('click', NutmegLayer2Function)

document.getElementById('Cream').addEventListener('click', CreamLayer1Function)
document.getElementById('ColdBrew').addEventListener('click', ColdBrewLayer1Function)

let Score = 0
let NofGuests = 0

function Checkers() {

  document.getElementById('Layer2').src = "../Images/Transperant.png"


  if (topping1 == UserInputLayer2 && topping3 == UserInputLayer3 && CoffeeStyle == UserInputLayer1) {

    Score = Score + 1
    alert("Thank you for this drink!")
    Reset()

  }
  else {
    alert("You got my order wrong.")
  }

  new_guest()

}


let UserInputLayer3 = 0
function WhippedLayer3Function() {
  document.getElementById('Layer3').src = "../Images/WhippedCream.webp"
  UserInputLayer3 = "Whipped Cream"
}

function ChocaloteChipLayer3Function() {
  document.getElementById('Layer3').src = "../Images/ChocaloteChip.png"
  UserInputLayer3 = "Chocalote Chips"
}

function CinnamonLayer3Function() {
  document.getElementById('Layer3').src = "../Images/Cinnamon.png"
  UserInputLayer3 = "Cinnamon"
}

let UserInputLayer2 = 0

function WaferLayer2Function() {
  document.getElementById('Layer2').src = "../Images/WaferImg.png"
  UserInputLayer2 = "Wafer"
}

function NutsLayer2Function() {
  document.getElementById('Layer2').src = "../Images/Nuts.png"
  UserInputLayer2 = "Nuts"
}

function NutmegLayer2Function() {
  document.getElementById('Layer2').src = "../Images/Nutmeg.png"
  UserInputLayer2 = "Nutmeg"
}

let UserInputLayer1 = 0

function ColdBrewLayer1Function() {
  document.getElementById('Layer1').src = "../Images/ColdBrew.png"
  UserInputLayer1 = "ColdBrew"
}

function CreamLayer1Function() {
  document.getElementById('Layer1').src = "../Images/Cream.png"
  UserInputLayer1 = "Cream"
}

function Reset() {
  document.getElementById('Layer1').src = "../Images/Transperant.png"
  document.getElementById('Layer2').src = "../Images/Transperant.png"
  document.getElementById('Layer3').src = "../Images/Transperant.png"
}

let CreamG = document.getElementById("Cream")
let ColdbrewG = document.getElementById("ColdBrew")

let Cream1 = "Cream"
let Coldbrew1 = "ColdBrew"
let CoffeeT = 0


function CoffeeType() {
  ;
  let randomflavour = randInt(1, 2);
  if (randomflavour == 1) {
    ;
    CoffeeT = Coldbrew1;
  }
  else if (randomflavour == 2) {
    CoffeeT = Cream1
  }
  return CoffeeT
}



let WhippedCream1 = "Whipped Cream"
let Cinnamon1 = "Cinnamon"
let ChocaloteChips1 = "Chocalote Chips"
let Wafers1 = "Wafer"
let Nuts1 = "Nuts"
let Nutmeg1 = "Nutmeg"

let topping = randInt(1, 3)
let order_of_toppings1 = 0
function toppings() {
  let topping = randInt(1, 3)
  if (topping == 1) {
    ;
    order_of_toppings1 = Wafers1
  }
  else if (topping == 2) {
    ;
    order_of_toppings1 = Nuts1
  }
  else if (topping == 3) {
    ;
    order_of_toppings1 = Nutmeg1
  }

  return order_of_toppings1
}


let order_of_toppings2 = 0
function toppings2() {
  let topping2 = randInt(1, 3)
  if (topping2 == 1) {
    ;
    order_of_toppings2 = WhippedCream1
  }
  else if (topping2 == 2) {
    ;
    order_of_toppings2 = Cinnamon1
  }
  else if (topping2 == 3) {
    ;
    order_of_toppings2 = ChocaloteChips1
  }
  return order_of_toppings2
}

let topping1 = 0
let topping3 = 0
let CoffeeStyle = 0
let toppings1G = 0
let toppings2G = 0
let CoffeeStyleG = 0


function order() {
  topping1 = order_of_toppings1
  topping3 = order_of_toppings2
  CoffeeStyle = CoffeeT
  let GuestsOrder1 = (CoffeeStyle + " " + topping1 + " " + topping3)

  NofGuests = NofGuests + 1
  return GuestsOrder1
}

//alert(NofGuests);
//counter = 0
//while (counter < 3) {
let guestOrder = ""
function new_guest() {
  console.log("Guests served today:" + NofGuests)
  console.log("Score:" + Score)
  document.getElementById('Score').innerHTML = "Score:" + Score
  document.getElementById('NofGuests').innerHTML = "Number of guests: " + NofGuests

  if (NofGuests > 0) {
    console.log("Score per guest:" + Score / NofGuests)
  }
  CoffeeType()
  toppings2()
  toppings()
  guestOrder = order()
  console.log("I would like a " + guestOrder)
  document.getElementById('Order').innerHTML = "Please make me a:" + guestOrder

}



function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


new_guest()
//console.log(Score)
//console.log(order())
//console.log(order_of_toppings1)
//console.log(order_of_toppings2)
//console.log(UserInputLayer1)
//console.log(UserInputLayer2)
//console.log(UserInputLayer3)
//console.log(NofGuests)


