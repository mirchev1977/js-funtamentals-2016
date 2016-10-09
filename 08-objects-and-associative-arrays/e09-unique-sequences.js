"use strict";

solve(
[
"[-3, -2, -1, 0, 1, 2, 3, 4]",
	"[7, 1, -17, 0, 2, 13]",
	"[5, 1, -17, 0, 2, 13]",
	"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]",
]
);

// solve([
// "[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]",
// ]);


function solve (input) {
	input = input.map(el => JSON.parse(el));

	input.forEach( function(element, index) {
		element.sort((a, b) =>{
			return b - a;
		});
	});

	input = input.map(el => JSON.stringify(el));

	let set = new Set(input);
	let arr = Array.from(set);
	arr = arr.sort((a, b) =>{
		a = JSON.parse(a);
		b = JSON.parse(b);
		let aLen = a.length;
		let bLen = b.length;
		let length = aLen - bLen;
		if(length === 0){
			return 0;
		}
		return length;
	}).map(el => JSON.parse(el));

	arr.forEach( function(element, index) {
		element = element.join(', ');
		console.log(`[${element}]`);
	});
}