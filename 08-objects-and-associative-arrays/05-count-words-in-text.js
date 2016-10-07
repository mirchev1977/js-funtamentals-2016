"use strict";

solve(['JS devs use Node.js for server-side JS.-- JS for devs']);


function solve (input) {
	let arr = input[0].match(/\b\w+\b/g);
	
	let output = {};

	countSame(arr);
	function countSame (arr) {
		if (arr.length <= 0) {
			return;
		}

		let first = arr[0];
		let filtered = arr.filter(function(element) {
			return element === first;
		});

		output[first] = filtered.length;

		arr = arr.filter(el => el !== first);

		countSame(arr);
	}

	let json = JSON.stringify(output);

	console.log(json);
}