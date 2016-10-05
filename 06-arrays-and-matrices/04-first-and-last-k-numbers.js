"use strict";

solve(['1', '5']);

function solve (argument) {
	argument = argument.map(Number);

	let k = Number(argument.shift());
	console.log(argument.slice(0, k).join(' '));
	console.log(argument.slice(argument.length-k,
	argument.length).join(' '));
}