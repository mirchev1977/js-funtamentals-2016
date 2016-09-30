"use strict";

solve([10]);

function solve (argument) {
	let [n] = argument.map(Number);

	for (var i = 0; i < n; i++) {
		let ast = Array(n + 1).join(' *');

		console.log(ast);
	}
}