"use strict";

solve(['20 50 10', '8 33 145']);

function solve (argument) {

	let biggest = Number(argument[0].split(' ')[0]);
	argument.forEach( function(element, index) {
		element = Number(element.split(' ').map(Number).sort((a, b) => { return b - a})[0]);
		biggest = Math.max(biggest, element);
	});

	console.log(biggest);
}