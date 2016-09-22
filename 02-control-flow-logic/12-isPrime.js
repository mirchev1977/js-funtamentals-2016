"use strict";

solve(["-5"]);

function solve([n]) {

    let isPrime = true;

    [n] = [n].map(Number);

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false;
        }
    }

    if(n === 0 || n === 1){
        console.log(false);
    } else if(n < 0){
        console.log(false);
    }
    else {
        console.log(isPrime);
    }
}
