solution(['12', 'Ivan', '15', 'Asen', '9']);




function solution(input) {
	"use strict";

	let [minAge, fPersonName, fPersonAge, secPersonName, secPersonAge] = input;

	let obj = {};

	if (parseInt(fPersonAge) >= parseInt(minAge)) {
		obj.name = fPersonName;
		obj.age = parseInt(fPersonAge);
		console.log(obj);
	}

	if(parseInt(secPersonAge) >= parseInt(minAge)) {
		obj.name = secPersonName;
		obj.age = parseInt(secPersonAge);
		console.log(obj);
	}
}





