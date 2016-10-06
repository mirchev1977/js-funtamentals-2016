"use strict";

solve([

	"Was that Easy? tRY thIs onE for SiZe!"

	]);


function solve (input) {
	let [words] = input;

	let pattern = /\b\w+\b/g;

	let result = words.match(pattern);

	result = result.map(function(elem, index) {
		elem = elem.toLowerCase();
		let result = elem.charAt(0).toUpperCase() + elem.slice(1);
		return result;
	})

	let words1 = words.toLowerCase();
	result.forEach( function(element, index) {
		let ind = words1.indexOf(element.toLowerCase());

		words1 = words1.replace(element.toLowerCase(), element);
	});

	console.log(words1);
}