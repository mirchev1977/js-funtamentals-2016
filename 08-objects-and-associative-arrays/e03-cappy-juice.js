"use strict";

solve(
[
"Kiwi => 234",
"Pear => 2345",
"Watermelon => 3456",
"Kiwi => 4567",
"Pear => 5678",
"Watermelon => 6789",
]
);


function solve (input) {
	input = input.map(el => el.split(/\s*=>\s*/)).map(el => {el[0] = el[0]; el[1] = Number(el[1]); return el; });

    printBottles(input);
	function printBottles (input) {
		if (input.length <= 0) {
			return;
		}

		let first = input[0];
        let juice = first[0];
        let liters = first[1];

        if (liters >= 1000) {
        	let sum = 0;
        	let filtered = input.filter(el => el[0] === juice).map(el => sum += el[1]);
        	sum = parseInt(sum / 1000);
        	console.log(`${juice} => ${sum}`);

        	input = input.filter(el => el[0] !== juice);
        } else {
        	let sum = 0;
        	let filtered = input.filter(el => el[0] === juice);
        	filtered.map(el => sum += el[1]);
        	
        	if (sum < 1000) {
        		input = input.filter(el => el[0] !== juice);
        	} else {
        		let first = input.splice(0, 1);
        		input.push(first[0]);
        	}
        }

        printBottles(input);
	}
}