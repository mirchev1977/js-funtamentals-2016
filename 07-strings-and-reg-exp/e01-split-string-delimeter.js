"use strict";

solve(['One-Two-Three-Four-Five', 
'-']);


function solve (input) {
	let arr = input[0].split(input[1]);

	arr.forEach(el => console.log(el));
}