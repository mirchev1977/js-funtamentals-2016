"use strict";

solve([20]);


function solve(input) {
    let [n] = input.map(Number);

    let dollars = 1;
     for(let i = 0; i < n; i++){
         let str = '';
         for(let j = 0; j < dollars; j++){
            str += '$';
         }
         console.log(str);
         dollars++;
     }
}
