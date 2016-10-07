"use strict";

solve(['JS devs use Node.js for server-side JS.-- JS for devs']);


function solve (input) {
	let arr = input[0].match(/\b\w+\b/g);
	
	let output = {};

	countSame(arr);
	

	let json = JSON.stringify(output);

	console.log(json);
}