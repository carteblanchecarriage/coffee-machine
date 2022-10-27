
const input = require('sync-input')

const waterHas = 400;
const milkHas = 540;
const beansHas = 120;
const cups = 9;
const money = 550;

const espresso = {water:250, beans:16, money:4};
const latte = {water:350, milk: 75, beans:20, money:7};
const cappuccino = {water:200, milk:100, beans:12, money:6};

function machineStart () {
    console.log("The coffee machine has:");
    console.log(waterHas + " ml of water");
    console.log(milkHas + " ml of milk");
    console.log(beansHas + " g of coffee beans");
    console.log(cups + " disposable cups");
    console.log("$" + money + " of money");
}

machineStart();

const userInput = input("Write action (buy, fill, take):");

switch(userInput) {
    case "buy":
        let coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        switch(coffeeType) {
            case "1":
                console.log(
                    "The coffee machine has:\n" +
                    (waterHas - espresso.water) + " ml of water\n" +
                    (milkHas) + " ml of milk\n" +
                    (beansHas - espresso.beans) + " g of coffee beans\n" +
                    (cups - 1) + " disposable cups\n" +
                    (money + espresso.money) + " of money\n");
            break;
            case "2":
                console.log(
                    "The coffee machine has:\n" +
                    (waterHas - latte.water) + " ml of water\n" +
                    (milkHas - latte.milk) + " ml of milk\n" +
                    (beansHas - latte.beans) + " g of coffee beans\n" +
                    (cups - 1) + " disposable cups\n" +
                    (money + latte.money) + " of money\n");
            break;
            case "3":
                console.log(
                    "The coffee machine has:\n" +
                    (waterHas - cappuccino.water) + " ml of water\n" +
                    (milkHas - cappuccino.milk) + " ml of milk\n" +
                    (beansHas - cappuccino.beans) + " g of coffee beans\n" +
                    (cups - 1) + " disposable cups\n" +
                    (money + cappuccino.money) + " of money\n");
            break;
        }
    break;
    case "fill":
        let waterAdd = +input("Write how many ml of water you want to add:");
        let milkAdd = +input("Write how many ml of milk you want to add:");
        let beansAdd = +input("Write how many grams of coffee beans you want to add:");
        let cupsAdd = +input("Write how many disposable cups you want to add: ");
        console.log(
            "The coffee machine has:\n" +
            (waterHas + waterAdd) + " ml of water\n" +
            (milkHas + milkAdd) + " ml of milk\n" +
            (beansHas + beansAdd) + " g of coffee beans\n" +
            (cups + cupsAdd) + " disposable cups\n" +
            `$${money}` + " of money\n");
    break;
    case "take":
        console.log(`I gave you $${money}`);
        console.log("The coffee machine has:");
        console.log(waterHas + " ml of water");
        console.log(milkHas + " ml of milk");
        console.log(beansHas + " g of coffee beans");
        console.log(cups + " disposable cups");
        console.log("$0 of money");
    break;
}

/*
const waterHas = +input("Write how many ml of water the coffee machine has: ");
const milkHas = +input("Write how many ml of milk the coffee machine has: ");
const beansHas = +input("Write how many grams of coffee beans the coffee machine has: ");
const cups = +input("Write how many cups of coffee you will need: ");

const waterNeeded = (cups*200);
const milkNeeded = (cups*50);
const beansNeeded = (cups*15);

const cupsPossible = Math.min(Math.floor(waterHas/200), Math.floor(milkHas/50), Math.floor(beansHas/15));
const cupsMore = cupsPossible - cups;

function coffeeAnswer() {
    if (cupsPossible === cups) {
        console.log("Yes, I can make that amount of coffee");
    } else if (cupsPossible > cups) {
        console.log(`Yes, I can make that amount of coffee (and even ${cupsMore} more than that)`);
    } else {
        console.log(`No, I can make only ${cupsPossible} cups of coffee`);
    }
}

coffeeAnswer();


console.log(`For ${cups} of coffee you will need:`);
console.log((cups*200) + "ml of water");
console.log((cups*50) + "ml of milk");
console.log((cups*15) + "g of coffee beans");


console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");
*/
