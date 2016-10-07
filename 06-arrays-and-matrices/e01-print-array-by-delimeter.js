"use strict";

solve(

	[
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"-",
	]

);


function solve (input) {
	let delimiter = input[input.length - 1];

	input.splice(input.length - 1, 1);

	console.log(input.join(delimiter));
}