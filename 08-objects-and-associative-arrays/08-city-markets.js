"use strict";

solve(
[

"Sofia -> Laptops HP -> 200 : 2000",
"Sofia -> Raspberry -> 200000 : 1500",
"Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3",

]
);

function solve (input) {
	input = input.map(el => el.split(' -> ')).map(el =>{

		let map = {};
		let obj = {};
		
		let quantities = el[2].split(/\s*:\s*/);
		let quantity = Number(quantities[0]);
		let sum = Number(quantities[1]);
		let product = quantity * sum;
		obj.name = el[1];
		obj.price = product;

		map.town = el[0];
		map.product = obj;

		return map;
	});

	uniteTownDetails(input);
	function uniteTownDetails (input) {
		if (input.length <= 0) {
			return;
		}

		let first = input[0].town;


		let filtered = input.filter(function(el) {
			return el.town === first;
		});

		
		console.log(`Town - ${first}`);

		filtered.forEach( function(element, index) {
			console.log(`$$$${element.product.name} : ${element.product.price}`);
		});

		input = input.filter(el => el.town !== first);

		uniteTownDetails(input);
	}
}