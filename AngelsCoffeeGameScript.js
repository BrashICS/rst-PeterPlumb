'use strict';
document.getElementById('Checker').addEventListener("click", Checker)
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

function Checker() {
  if (topping1 == UserInputLayer3 && topping2 == UserInputLayer2 && CoffeeStyle == UserInputLayer1) {
    Score + 1
     NofGuests - 1
      document.getElementById('Guest').hidden = true
}

else {
  NofGuests - 1
  document.getElementById('Guest').hidden = true
}

}


let UserInputLayer3 = 0
function WhippedLayer3Function() {
  document.getElementById('Layer3').src= document.getElementById("WhippedCream")
  UserInputLayer3 = WhippedCream1
}
function ChocaloteChipLayer3Function() {
  document.getElementById('Layer3').src= document.getElementById("ChocaloteChip")
  UserInputLayer3 = ChocaloteChips1
}
function CinnamonLayer3Function() {
  document.getElementById('Layer3').src= document.getElementById("Cinnamon")
  UserInputLayer3 = Cinnamon1
}

let UserInputLayer2 = 0

function WaferLayer2Function() {
  document.getElementById('Layer2').src = "Images/WaferImg.png"
  UserInputLayer2 = Wafers1
}

function NutsLayer2Function() {
  document.getElementById('Layer2').src = "Images/Nuts.png"
  UserInputLayer2 = Nuts1
}

function NutmegLayer2Function() {
  document.getElementById('Layer2').src = "Images/Nutmeg.png"
  UserInputLayer2 = Nuts1
}

let UserInputLayer1 = 0

function ColdBrewLayer1Function() {
  document.getElementById('Layer1').src = "Images/ColdBrew.png"
  UserInputLayer1 = Coldbrew1
}

function CreamLayer1Function() {
  document.getElementById('Layer1').src = "Images/Cream.png"
  UserInputLayer1 = Cream1
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
let CinnamonG = document.getElementById("Cinnamon")
let ChocaloteChipG = document.getElementById("ChocaloteChip")
let WafersG = document.getElementById("Wafer")
let NutsG = document.getElementById("Nuts")
let NutmegG = document.getElementById("Nutmeg")


let WhippedCream1 = WhippedCreamG
let Cinnamon1 = CinnamonG
let ChocaloteChips1 = ChocaloteChipG
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


let order_of_toppings2 = 0
function toppings2() {
  let topping2 = randInt(1, 3)
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

let topping1 = 0
let topping3 = 0
let CoffeeStyle = 0
let toppings1G = 0
let toppings2G = 0
let CoffeeStyleG = 0
function order(){
   topping1 = order_of_toppings1
   topping3 = order_of_toppings2
  let CoffeeStyle = CoffeeT
  let GuestsOrder1 = (CoffeeStyle + topping1 + topping3)
  document.getElementById('Guest').hidden = false
  NofGuests = NofGuests + 1
  return GuestsOrder1
}


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
  else if(topping3 == WhippedCream1){
    toppings2G =="Whipped Cream"
  }
  else if(topping3 == Cinnamon1){
    toppings2G =="Cinnamon"
  }
  else if(topping3 == ChocaloteChips1){
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

console.log(randInt(1,3))
console.log(order())
CoffeeType()
toppings2()
toppings()
GuestsOrder()
console.log(GuestsOrder())
console.log(order_of_toppings1)
console.log(order_of_toppings2)



