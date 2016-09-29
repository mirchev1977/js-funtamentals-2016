"use strict";

solve([7]);

function solve(input) {
    let [n] = input.map(Number);

    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
