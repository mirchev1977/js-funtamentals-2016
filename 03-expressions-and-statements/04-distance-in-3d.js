"use strict";

solve([3.5, 0, 1, 0, 2, -1]);

function solve(input){
    let [x1, y1, z1, x2, y2, z2] = input.map(Number);

    let x = Math.max(x1, x2) - Math.min(x1, x2);
    let y = Math.max(y1, y2) - Math.min(y1, y2);
    let z = Math.max(z1, z2) - Math.min(z1, z2);

    let d = Math.sqrt((x * x) + (y * y) + (z * z));

    console.log(d);
}
