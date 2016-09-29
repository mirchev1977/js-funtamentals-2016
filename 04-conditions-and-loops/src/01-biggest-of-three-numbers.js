"use strict";

solve([5, -2, 7]);


function solve(input){

    let [one, two, three] = input.map(Number);

    let inp = [one, two, three];

    let biggest = one;

    for(let item of inp){
        if(item > biggest){
            biggest = item;
        }
    }

    console.log(biggest);

}
