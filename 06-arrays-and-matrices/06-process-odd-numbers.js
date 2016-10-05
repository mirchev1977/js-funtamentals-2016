"use strict";

solve(['10', '15', '20', '25']);

function solve (argument) {
	argument = argument.map(Number);

	let arr = [];
	argument.forEach( function(element, index) {
		if(index % 2 !== 0){
			let res = element * 2;
			arr.push(res);
		}
	});

	arr = arr.reverse();

	console.log(arr.join(' '));
}