"use strict";

solve([7]);

function solve (input) {
	let [n] = input.map(Number);

	if (n % 2 === 0) {
		for (var i = 0; i < n - 1; i++) {
			let row = '';
			for (var j = 0; j < 2*n - 1; j++) {
				if (i === 0 || i === n - 2 || i === parseInt((n - 1) / 2)) {
					if(j === 0 || j === 2*n - 2 || j === parseInt((2*n - 2) / 2)){
						row += '+';
					} else {
						row += '-';
					}
				} else {
					if(j === 0 || j === 2*n - 2 || j === parseInt((2*n - 2) / 2)){
						row += '|';
					} else {
						row += ' ';
					}
				}
			}
			console.log(row);
		}
	} else {
		for (var i = 0; i < n; i++) {
			let row = '';
			for (var j = 0; j < 2*n - 1; j++) {
				if (i === 0 || i === n - 1 || i === parseInt((n - 1) / 2)) {
					if(j === 0 || j === 2*n - 2 || j === parseInt((2*n - 2) / 2)){
						row += '+';
					} else {
						row += '-';
					}
				} else {
					if(j === 0 || j === 2*n - 2 || j === parseInt((2*n - 2) / 2)){
						row += '|';
					} else {
						row += ' ';
					}
				}
			}
			console.log(row);
		}
	}
}



