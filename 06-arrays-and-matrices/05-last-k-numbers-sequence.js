"use strict";

solve(['8', '2']);

function solve (argument) {
	let [len, seq] = argument.map(Number);

	let arr = [];
	arr.push(1);
	let jStart = 0;
	for (let i = 0; i < len - 1; i++) {
		let sum = 0;
		for (let j = jStart; j < seq + jStart; j++) {
			if (arr[j] !== undefined) {
				sum += arr[j];
			}
		}

		if (arr.length >= seq) {
					jStart++;
		}

		arr.push(sum);
	}

	console.log(arr.join(' '));
}