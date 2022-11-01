const input = require('sync-input')

let waterHas = 400;
let milkHas = 540;
let beansHas = 120;
let cups = 9;
let money = 550;

let userInput = "";

const espresso = {number: 1, water:250, beans:16, money:4};
const latte = {number: 2, water:350, milk: 75, beans:20, money:7};
const cappuccino = {number: 3, water:200, milk:100, beans:12, money:6};

function remaining() {
    console.log("The coffee machine has:");
    console.log(waterHas + " ml of water");
    console.log(milkHas + " ml of milk");
    console.log(beansHas + " g of coffee beans");
    console.log(cups + " disposable cups");
    console.log("$" + money + " of money");
}

function calcResources(coffeeType) {
    let freeCoffee = Math.random() > 0.5;
    if (freeCoffee) {
        console.log("You won a free cup of coffee");
    }
    switch(coffeeType) {
        case "1":
            if (waterHas < espresso.water || beansHas < espresso.beans || cups < 1) {
                console.log("Sorry, the machine is out of supplies");
                break;
            } else {
                waterHas -= espresso.water;
                beansHas -= espresso.beans;
                cups -= 1;
                if (freeCoffee === false) {
                    money += espresso.money;
                }
                console.log("I have enough resources, making you a coffee!")
            }
            break;
        case "2":
            if (waterHas < latte.water || milkHas < latte.milk || beansHas < latte.beans || cups < 1) {
                console.log("Sorry, the machine is out of supplies");
            } else {
                waterHas -= latte.water;
                milkHas -= latte.milk;
                beansHas -= latte.beans;
                cups -= 1;
                if (freeCoffee === false) {
                    money += latte.money;
                }
                console.log("I have enough resources, making you a coffee!")
            }
            break;
        case "3":
            if (waterHas < cappuccino.water || milkHas < cappuccino.milk || beansHas < cappuccino.beans || cups < 1) {
                console.log("Sorry, the machine is out of supplies");
            } else {
                waterHas -= cappuccino.water;
                milkHas -= cappuccino.milk;
                beansHas -= cappuccino.beans;
                cups -= 1;
                if (freeCoffee === false) {
                    money += cappuccino.money;
                }
                console.log("I have enough resources, making you a coffee!")
            }
            break;
    }
}

function fill() {
    let waterAdd = +input("Write how many ml of water you want to add:");
    let milkAdd = +input("Write how many ml of milk you want to add:");
    let beansAdd = +input("Write how many grams of coffee beans you want to add:");
    let cupsAdd = +input("Write how many disposable cups you want to add: ");
    waterHas += waterAdd;
    milkHas += milkAdd;
    beansHas += beansAdd;
    cups += cupsAdd;
}


while (userInput !== "exit") {
    userInput = input("Write action (buy, fill, take, remaining, exit): ");
    switch(userInput) {
        case "buy":
            let coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back: ");
            if (coffeeType === 'back') {
                break;
            } else {
                calcResources(coffeeType);
            }
            break;
        case "fill":
            fill();
            break;
        case "take":
            console.log(`I gave you $${money}`);
            money = 0;
            break;
        case "remaining":
            remaining();
            break;
    }
}
