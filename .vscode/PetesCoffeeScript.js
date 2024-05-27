'use strict';
const prompt = require("prompt-sync")();
document.getElementById("PlayButton").addEventListener("click", game_running)
actualgame = false;
document.getElementById("PlayButton").innerText = game_running() = true

let NofGuests = 0
function game_running() {
  actualgame = true;
}

while (actualgame == true) {
  game()
}

function game() {
  
}

function CoffeeType(){;
  let randomflavour = randInt(1,3);
  if (randomflavour == 1){;
      CoffeeT = "Regular Patty";
  }
  else if (randomflavour == 2){
      CoffeeT = "Tofu Patty"
  }
  else if (randomflavour == 3){
      burger_patty = "Mystery patty"
  }
}

function toppings() {
  let topping = randInt(1, 5)
  if (topping == 1){;
  order_of_toppings1 = "tomato"
  }
  else if(topping == 2){;
  order_of_toppings1 = "lettuce"
  }
  else if (topping == 3){;
  order_of_toppings1 = "onions"
  }
  else if(topping == 4){;
  order_of_toppings1 = "cheese"
  }
  else if(topping == 5){;
  order_of_toppings1 = "No topping"
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

