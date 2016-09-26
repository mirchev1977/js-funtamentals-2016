"use strict";


solve([850]);


function solve(input){
    [input] = input.map(Number);

    let span = input % 400;
    span += 400;
    span %= 400;

    let transformer = 100 / 90;

    let degrees = span / transformer;

    console.log(degrees);
}