'use strict';
const prompt = require("prompt-sync")();
let topping1 = "";
let order_of_toppings1 = "";
let burger_patty = "";
let game_running = false
//Game principle, deciding if it should be ran or not
function game(){
    let game = prompt("It's your first day working at Momo's burgers! Are you ready to work today?  y or n| ");
    if (game == "y" || "Y" || "yea" || "Yes"){;
        let  game_running = true
        console.log("Welcome to Fast Burgers, new hire! Your our new employee so please do well.");
    }
    else if (game == "n"){;
        return("Fine then, your fired.");
    }
    else {
        return("Please do as instructed, and enter in y or n.");
    }
}
while (game_running == true){
    order_of_toppings1()
    burgercomponents()
    order()
}
// Customer order configeration, deciding what patty to get
function burgercomponents(){;
    let randompatty = randInt(1,3);
    if (randompatty == 1){;
        burger_patty = "Regular Patty";
    }
    else if (randompatty == 2){
        burger_patty = "Tofu Patty"
    }
    else if (randompatty == 3){
        burger_patty = "Mystery patty"
    }
}


//Topping function
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
}

//Deciding what topping is what

//Order function, printing what the final topping will be
function order(){
    console.log("A customer came! They ordered a " + burger_patty + " with " + order_of_toppings1 + ". Please serve them at the kitchen")
}
function kitchen(){

}

//Randomly generated number function
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


game()
burgercomponents()
toppings()
order()
