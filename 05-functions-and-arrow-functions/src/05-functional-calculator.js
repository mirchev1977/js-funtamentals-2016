"use strict";

solve(['2', '4', '/']);

function solve ([one, two, operator]) {
	one = Number(one);
	two = Number(two);

	let result = null;
	if (operator === '+') {
		result = one + two;
	}

	if (operator === '-') {
		result = Math.max(one, two) - Math.min(one, two);
	}

	if (operator === '*') {
		result = one * two;
	}

	if (operator === '/') {
		result = one / two;
	}

	console.log(result);
}