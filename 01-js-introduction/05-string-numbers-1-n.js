solution(['11']);




function solution(input) {
	"use strict";

	let n = parseInt(input[0]);

	let outp = '';

	for (var i = 1; i < n; i++) {
		outp += i;
	}

	outp += n;

	console.log(outp);
}





