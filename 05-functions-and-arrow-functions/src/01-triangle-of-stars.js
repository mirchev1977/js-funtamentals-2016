"use strict";

solve([10]);

function solve (argument) {
	let [n] = argument.map(Number);

	for (let i = 0; i < n; i++) {
		let ast = i + 2;

		let row = Array(ast).join('*');

		console.log(row);
	}

	for (let i = 0; i < n - 1; i++) {
		let ast = n - i;

		let row = Array(ast).join('*');

		console.log(row);
	}
}