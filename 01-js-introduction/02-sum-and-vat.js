// solution(['1.20', '2.60', '3.50']);
solution(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);





function solution(input) {
	"use strict";

	let sum = 0;
	input.forEach(function(element){
		sum += parseFloat(element);
	});

	let vat = sum * 0.2;

	let total = sum*1.2;

	console.log("sum = " + sum);
	console.log("VAT = " + vat);
	console.log("total = " + total);
}





