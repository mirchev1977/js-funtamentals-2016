"use strict";

solve(
[

"Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000",

]
);


function solve (input) {
	let map = new Map();
	input = input.map(el => el.split(' <-> ')).map(el => {
		let town = el[0];
		let population = el[1];
		if(map.has(town)){
			let pop = Number(map.get(town)) + Number(population);
			map.set(town, pop);
		} else {
			map.set(town, population);
		}

		return map;
	});

	for (let [k, v] of map) {
		console.log(`${k} : ${v}`);
	}
}