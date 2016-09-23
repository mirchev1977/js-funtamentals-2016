"use strict";

solve(["2", "2"]);

function solve([w, h]){
    [w, h] = [w, h].map(Number);

    let area = w * h;

    let perimeter = (w * 2) + (h * 2);

    console.log(area);
    console.log(perimeter);
}
