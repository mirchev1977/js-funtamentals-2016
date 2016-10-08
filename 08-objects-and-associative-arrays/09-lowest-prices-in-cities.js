"use strict";

// solve(
// [
// "Sample Town | Sample Product | 1000",
// "Sample Town | Orange | 2",
// "Sample Town | Peach | 1",
// "Sofia | Orange | 3",
// "Sofia | Peach | 2",
// "New York | Sample Product | 1000.1",
// "New York | Burger | 10",
// ]
// );

solve(
[
"Sofia City | Audi | 100000",
"Sofia City | BMW | 100000",
"Sofia City | Mitsubishi | 10000",
"Sofia City | Mercedes | 10000",
"Sofia City | NoOffenseToCarLovers | 0",
"Mexico City | Audi | 1000",
"Mexico City | BMW | 99999",
"New York City | Mitsubishi | 10000",
"New York City | Mitsubishi | 1000",
"Mexico City | Audi | 100000",
"Washington City | Mercedes | 1000",

]
);

function solve (input) {
	input = input.map(el => {
			let [town, product, price] = el.split(' | ');
			
			let obj = {};
			obj.town = town;
			obj.product = product;
			obj.price = price;

			return obj;
		}
	);

	findLowestPrice(input);
	function findLowestPrice (input) {
		if (input.length <= 0) {
			return;
		}

		//update cities
		let arr = [];
		updateCityProduct(input);
		function updateCityProduct (input) {
			if (input.length <= 0) {
				return;
			}

			let first = input[0].town;
			let filtered = input.filter(el => el.town === first);
			
			let prodMap = new Map();

			filtered.forEach( function(element, index) {
				prodMap[element.product] = element;
			});

			for (let index in prodMap) {
				arr.push(prodMap[index]);
			}

			input = input.filter(el => el.town !== first);
			updateCityProduct(input);
		}

		input = arr;

		//sort and print
		let first = input[0].product;

		let filtered = input.filter(el => el.product === first);

		filtered.sort((a, b) => {
			return a.price - b.price;
		});

		let smallest = filtered[0];

		console.log(`${smallest.product} -> ${smallest.price} (${smallest.town})`);

		input = input.filter(el => el.product !== first);

		findLowestPrice(input);
	}
}