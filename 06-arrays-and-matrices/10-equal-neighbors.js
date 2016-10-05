"use strict";

solve(['test yes yo ho',
		'well done yo 6',
		'not done yet 5']);

function solve (argument) {
	argument = argument.map(element => {
		return element.split(' ');
	});

	let same = 0;

	argument.forEach( function(element, row) {
		element.forEach((el, col) => {
			let down;
			let right;
			if(argument[row + 1] !== undefined){
				down = argument[row + 1][col] === el;
			}

			if (argument[row][col + 1] !== undefined) {
				right = argument[row][col + 1] === el;
			}

			if (right) {
				same++;
			}

			if (down) {
				same++;
			}
		});
	});

	console.log(same);
}