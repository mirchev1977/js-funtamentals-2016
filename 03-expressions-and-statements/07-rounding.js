"use strict";

solve([10.5, 3]);

function solve(input) {
    let [n, places] = input.map(Number);


    if(places > 15){
        places = 15;
    }

    let answer = n.toFixed(places);
    answer = Number(answer);

    console.log(answer);
}
