"use strict";

solve(
[
"Audi | Q7 | 1000",
"Audi | Q6 | 100",
"BMW | X5 | 1000",
"BMW | X6 | 100",
"Citroen | C4 | 123",
"Volga | GAZ-24 | 1000000",
"Lada | Niva | 1000000",
"Lada | Jigula | 1000000",
"Citroen | C4 | 22",
"Citroen | C5 | 10",
]
);


function solve (input) {
	input = input.map(el => {
		el = el.split(/\s*\|\s*/g);
		let [car, model, count] = el;
		count = Number(count);
		return [car, model, count];
	});

	let carsMap = new Map();

	joinByCarAndModel(input);
	function joinByCarAndModel (input) {
		if(input.length <= 0){
			return;
		}

		let [car, model, count] = input[0];

		let filtered = input.filter(el => {
			let [currCar, currMod, currCount] = el;
			return currCar === car;
		});

		let unitedModels = [];
		uniteModels(filtered);
		function uniteModels (filtered) {
			if (filtered.length <= 0) {
				return;
			}
			let [car, model, count] = filtered[0];

			let sameModel = filtered.filter(el => el[1] === model);

			let sum = 0;

			sameModel.forEach( function(element, index) {
				sum += element[2];
			});

			filtered = filtered.filter(el => el[1] !== model);

			unitedModels.push([car, model, sum]);
			uniteModels(filtered);
		}

		input = input.filter(el => el[0] !== car);

		carsMap.set(car, unitedModels);

		joinByCarAndModel(input);
	}

	for (let [k, values] of carsMap) {
		console.log(k);
		values.forEach( function(element, index) {
			let [car, model, count] = element;
			console.log(`###${model} -> ${count}`);
		});
	}
}