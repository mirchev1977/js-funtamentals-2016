"use strict";

solve(

	[

		"Sofia",
		"20",
		"Varna",
		"3",
		"Sofia",
		"5",
		"Varna",
		"4",

	]

);



function solve (input) {
	let arr = [];

	createArr(input);
	function createArr (input) {
		if (input.length <= 0) {
			return;
		}
		let el = input.splice(0, 2);
		let obj = {};
		obj.place = String(el[0]);
		obj.income = Number(el[1]);
		arr.push(obj);
		createArr(input);
	}

	let placesTotals = {};

	sumTotals(arr);
	function sumTotals (arr) {
		if (arr.length <= 0) {
			return;
		}

		let first = arr[0].place;

		let same = arr.filter(function(element) {
			return element.place === first;
		});

		let sum = 0;
		for (let place of same) {
			sum += place.income;
		}

		placesTotals[first] = sum;
		
		arr = arr.filter(function(element) {
			return element.place !== first;
		});

		sumTotals(arr);
	}

	console.log(JSON.stringify(placesTotals));
}