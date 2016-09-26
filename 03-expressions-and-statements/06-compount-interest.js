"use strict";

solve([1500, 4.3, 3, 6]);

function  solve(input) {
    let [principal, interest, period, time] = input.map(Number);

    interest /= 100;

    let frequency = 12 / period;

    let compountInterest = principal * Math.pow(1 + interest/frequency, frequency * time);

    console.log(compountInterest.toFixed(2));
}
