"use strict";

solve([6,
11,
-35]);


function solve (input) {
	let [a, b, c] = input.map(Number);

	let d = b * b - 4*a*c;

	if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);
        console.log(x2);
        console.log(x1);
    } else if (d < 0) {
    	console.log('No');
	} else {
		let x = -b / (2*a);
        console.log(x);
	}
}