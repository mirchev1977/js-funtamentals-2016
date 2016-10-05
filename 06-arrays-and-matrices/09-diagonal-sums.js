"use strict";

solve(['3 5 17',
	'-1 7 14',
	'1 -8 89']);

function solve (argument) {

	argument.forEach( function(element, index) {
		element = element.split(' ').map(Number);
		argument[index] = element;
	});

	let sum1 = 0;
	let sum2 = 0;

	for (var i = 0; i < argument.length; i++) {
		let lastCol = argument.length - 1 - i;
		sum1 += argument[i][i];
		sum2 += argument[i][lastCol];
	}

	console.log(sum1, sum2);
}