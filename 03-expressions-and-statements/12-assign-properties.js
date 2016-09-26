"use strict";

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);

function solve(input) {
    let [k1, v1, k2, v2, k3, v3] = input;

    let obj = {};
    obj[k1] = v1;
    obj[k2] = v2;
    obj[k3] = v3;

    console.log(obj);
}
