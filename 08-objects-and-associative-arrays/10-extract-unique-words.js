"use strict";

solve(
[
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. ",
"Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ",
"Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ",
"Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ",
"Morbi in ipsum varius, pharetra diam vel, mattis arcu. ",
"Integer ac turpis commodo, varius nulla sed, elementum lectus. ",
"Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.",
]
);


function solve (input) {
	input = input.join(',').match(/\b\w+\b/g);
	
	let unique = [];

	extractUnique(input);
	function extractUnique (input) {
		if(input.length <= 0){
			return;
		}
		let first = input[0];

		let filtered = input.filter(el => {
			let one = el.toLowerCase();
			let two = first.toLowerCase();
			if (one === two) {
				return el;
			}
		}).map(el => el.toLowerCase());

		unique.push(filtered[0]);

		input = input.filter(el => el.toLowerCase() !== first.toLowerCase());

		extractUnique(input);
	}

	console.log(unique.join(', '));
}