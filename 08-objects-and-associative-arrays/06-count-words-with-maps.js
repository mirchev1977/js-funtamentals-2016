"use strict";


solve(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);


function solve (input) {
	input = input[0].match(/\b\w+\b/g);

	let map = new Map();

	countWords(input);
	function countWords (input) {
		if (input.length <= 0) {
			return;
		}
		let first = input[0].toLowerCase();

		let filtered = input.filter(el => el.toLowerCase() === first.toLowerCase()).map(el => el.toLowerCase()).length;

		map.set(first, filtered);

		input = input.filter(el => el.toLowerCase() !== first);

		countWords(input);
	}
	
	map = new Map([...map.entries()].sort());

	for (let [k, v] of map) {
		console.log(`'${k}' -> ${v} times`);
	}
}