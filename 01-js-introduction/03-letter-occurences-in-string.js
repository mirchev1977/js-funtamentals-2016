solution(['hello', 'l']);





function solution(input) {
	"use strict";

	let result = input[0].split('').filter(function(letter) {
		return letter === input[1];
	});

	console.log(result.length);
}





