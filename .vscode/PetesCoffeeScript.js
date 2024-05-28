'use strict';
const prompt = require("prompt-sync")();
document.getElementById("PlayButton").addEventListener("click", game_running)
actualgame = false;
document.getElementById("PlayButton").innerText = game_running() = true
document.getElementById("Instructions").addEventListener("click", )
let NofGuests = 0

function Play() {
  document.getElementById()
}

while (actualgame == true) {
  game()
}

function game() {

}

function CoffeeType(){;
  let randomflavour = randInt(1,3);
  if (randomflavour == 1){;
      CoffeeT = "Espresso";
  }
  else if (randomflavour == 2){
      CoffeeT = "Mocha"
  }
  else if (randomflavour == 3){
      burger_patty = "Housebrewed Coffee"
  }
}

function toppings() {
  let topping = randInt(1, 5)
  if (topping == 1){;
  order_of_toppings1 = "Whipped Cream"
  }
  else if(topping == 2){;
  order_of_toppings1 = "Cinnamon"
  }
  else if (topping == 3){;
  order_of_toppings1 = "Chocalote Chips"
  }
  else if(topping == 4){;
  order_of_toppings1 = "Wafers"
  }
  else if(topping == 5){;
  order_of_toppings1 = "Cookie"
  }
  return order_of_toppings1
}


function order(){
  let GuestsOrder = ("I'd like a " + CoffeeT + " with " + toppings() + " with " + toppings() + ", thank you!")
  NofGuests = NofGuests + 1
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

