"use strict";

solve(['Hi, how are you?']);

function solve (input) {
	let row = input[0];

	let result = row.match(/\w+/g);

	let output = [];

	for (let w of result) {
		output.push(w.toUpperCase());
	}

	console.log(output.join(', '));
}