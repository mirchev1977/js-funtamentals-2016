"use strict";

solve(['20', '30', '40']);

function solve (argument) {

	let output = '';
	argument.forEach((el, i) => {
		if (i % 2 === 0) {
			output += `${el} `;
		}
	});

	console.log(output);
}