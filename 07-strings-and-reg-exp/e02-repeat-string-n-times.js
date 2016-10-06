"use strict";

solve(['repeat',
'5']);


function solve (input) {
	let [str, times] = input;
	times = Number(times);

	let arr = Array(times + 1).join(str);

	console.log(arr);
}