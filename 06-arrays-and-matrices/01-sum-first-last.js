"use strict";

solve(['20', '30', '40']);

function solve (argument) {
	argument = argument.map(Number);

	let sum = argument[0] + argument[argument.length - 1];

	console.log(sum);
}