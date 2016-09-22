"use strict";

solve(["pepper"]);

function solve([input]){
    let fruites = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    let foundFruits = fruites.filter(function (fruit) {
            return input === fruit;
    });

    let foundVegetables = vegetables.filter(function (veg) {
            return input === veg;
    });

    if(foundFruits.length > 0){
        console.log("fruit");
        return;
    }

    if(foundVegetables.length > 0){
        console.log("vegetable");
        return;
    }

    console.log("unknown");
}
