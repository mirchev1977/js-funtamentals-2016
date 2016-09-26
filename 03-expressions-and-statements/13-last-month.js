"use strict";

solve(['17','3','2002']);

function solve(input) {
    let [date, month, year] = input.map(Number);

    let dt = new Date(year, month - 1, date);
    let nDt = new Date(dt);
    nDt.setDate(1);
    let last = new Date(nDt);
    last.setDate(last.getDate() - 1);

    console.log(last.getDate());
}
