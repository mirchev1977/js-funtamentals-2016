"use strict";

solve(["55"]);

function solve(input) {
    input = Number(input);

    let feet = parseInt(input / 12);
    let inches = input % 12;

    console.log("%d\'-\%d\"", feet, inches);
}