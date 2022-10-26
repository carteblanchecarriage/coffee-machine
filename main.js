// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const waterHas = +input("Write how many ml of water the coffee machine has: ");
const milkHas = +input("Write how many ml of milk the coffee machine has: ");
const beansHas = +input("Write how many grams of coffee beans the coffee machine has: ");
const cups = +input("Write how many cups of coffee you will need: ");

const cupsPossible = Math.min(Math.floor(waterHas/200), Math.floor(milkHas/50), Math.floor(beansHas/15));

function coffeeAnswer() {
    if (cupsPossible === cups) {
        console.log("Yes, I can make that amount of coffee");
    } else if (cupsPossible > cups) {
        console.log(`Yes, I can make that amount of coffee (and even ${cupsPossible - cups} more than that)`);
    } else {
        console.log(`No, I can make only ${cupsPossible} cups of coffee`);
    }
}

coffeeAnswer();

/*
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
