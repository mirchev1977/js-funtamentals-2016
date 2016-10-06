"use strict";

solve(
	[
	'The300',
'What is that?',
'I think it’s the 3rd movie.',
'Lets watch it at 22:45',
	]
	);

function solve (input) {
	input = input.join(',');
	let pattern = /\d+/g;

	let output = [];
	let result;
	while ((result = pattern.exec(input)) !== null) {
		output.push(result[0]);
	}

	console.log(output.join(' '));
}