"use strict";

solve(
[
"Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
"T-Shirt : 10",
]
);


function solve (input) {
	input = input.map(el => el.split(/\s*:\s*/)).map(el => {el[0].trim(); el[1] = Number(el[1]); return el});

	let map = new Map();

	printItems(input);
	function printItems (input) {
		if (input.length <= 0) {
			return;
		}

		let first = input[0];
		let item = first[0];
		let firstLetter = item[0];
		let price = first[1];

		let filtered = input.filter(el => el[0][0] === firstLetter).map(el => {
			let obj = {};
			obj.item = el[0];
			obj.price = el[1];
			return obj;
		}).sort((a, b) => {
			return a.item.toLowerCase().localeCompare(b.item.toLowerCase());
		});

		map.set(firstLetter, filtered);

		input = input.filter(el => el[0][0] !== firstLetter);

		printItems(input);
	}

	map = new Map([...map].sort((a, b) => {
		return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
	}));

	for (let [k, v] of map) {
		console.log(k);
		v.forEach( function(v, index) {
			console.log(`  ${v.item}: ${v.price}`);
		});
	}
}