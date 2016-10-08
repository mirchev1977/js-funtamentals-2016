"use strict";

solve(
[
"Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara",
]
);

function solve (input) {
	input = input.map(el =>{
		let [name, level, items] = el.split(/\s*\/\s*/);
		items = items.split(/\s*,\s*/g).map(item => item.trim());
		let obj = {};
		obj.name = name.trim();
		obj.level = Number(level);
		obj.items = items;
		return obj;
	});

	let json = JSON.stringify(input);

	console.log(json);
}