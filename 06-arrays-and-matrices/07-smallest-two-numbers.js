"use strict";

solve(['3', '0', '10', '4', '7', '3']);

function solve (argument) {
	argument = argument.map(Number);

	argument.sort((a, b) => {
		return a - b;
	});

	let result = argument.slice(0, 2);
	console.log(result.join(' '));
}