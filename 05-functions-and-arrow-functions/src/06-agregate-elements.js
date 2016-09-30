"use strict";

solve(['1', '2', '3']);

function solve (input) {
	input = input.map(Number);

	let sum = null;
	for (let el of input) {
		sum += el;
	}

	let inverse = null;
	for (let el of input) {
		inverse += 1/el;
	}

	let concat = '';
	for (let el of input) {
		concat += String(el);
	}

	console.log(sum);
	console.log(inverse);
	console.log(concat);
}