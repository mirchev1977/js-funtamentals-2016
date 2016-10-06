"use strict";

solve(["Calculate the _area of the _perfectRectangle object."]);


function solve (input) {
	let [sentence] = input;

	let pattern = /[^_\w]+_[a-zA-Z0-9]+\b/g;

	let matches = sentence.match(pattern);

	matches.forEach( function(element, index) {
		matches[index] = element.replace(/_/, '').trim();
	});


	console.log(matches.join(','));
}