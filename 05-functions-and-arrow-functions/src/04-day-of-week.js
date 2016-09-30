"use strict";

solve(['Sunday']);

function solve (argument) {
	let inp = argument[0];

	let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

	let present = false;
	for (let i in days) {
		if (days[i] === inp) {
			console.log(Number(i) + 1);
			present = true;
			break;
		}
	}

	if(present === false){
		console.log('error');
	}
}