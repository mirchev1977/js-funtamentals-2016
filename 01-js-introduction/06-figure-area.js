// solution(['2', '4', '5', '3']);

// solution(['13', '2', '5', '8']);
solution(["1", "1", "2", "2"]);




function solution(input) {
	"use strict";

	let [w1, h1, w2, h2] = input;

	[w1, h1, w2, h2] = [parseFloat(w1), parseFloat(h1), parseFloat(w2), parseFloat(h2)];

	let result = ((w1 * h1) + (w2 * h2)) - (Math.min(w1, w2) * Math.min(h1, h2));

	console.log("%d", result);
}





