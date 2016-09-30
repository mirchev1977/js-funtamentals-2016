"use strict";

solve(['haha']);

function solve (argument) {
	let arr = argument[0].split('');

	let isPalindrome = true;

	for (var i = 0; i < arr.length; i++) {
		let first = arr[i];
		let last = arr[arr.length - 1 - i];

		if (first !== last) {
			isPalindrome = false;
			break;
		}
	}

	if (isPalindrome) {
		console.log(true);
	} else {
		console.log(false);
	}
}