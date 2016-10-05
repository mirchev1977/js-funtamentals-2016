"use strict";

solve(['3', '-2', '0', '-1']);

function solve (argument) {
	argument = argument.map(Number);

	let arr = [];

	arr.push(argument[0]);

	for (var i = 1; i < argument.length; i++) {
		if (argument[i] >= 0) {
			arr.push(argument[i]);
		} else {
			arr.unshift(argument[i]);
		}
	}

	console.log(arr);
}