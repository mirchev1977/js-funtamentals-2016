"use strict";

solve([
	'The quick brown fox…',
	'The quick brown fox…'
	]);


function solve (input) {
	let [expr, word] = input;

	let substr = expr.substr(0, word.length);

	if(substr === word){
		console.log(true);
	} else {
		console.log(false);
	}
}