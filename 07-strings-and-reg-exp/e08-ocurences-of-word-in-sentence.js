"use strict";

solve(
	[
		'How do you plan on achieving that? How? How can you even think of that?',
'how',
	]
	);

function solve (input) {
	let [str, word] = input;

	word = (word) + ' ';

	let pattern = new RegExp(word, 'gi');

	let matches = str.match(pattern);

	console.log(matches.map(match => match.trim()).length);
}