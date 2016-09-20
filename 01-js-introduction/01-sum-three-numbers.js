// solution(['2', '3', '4']);
solution(['1.5', '1.5', '-1']);





function solution(input) {
	"use strict";

	let [one, two, three] = [input[0], input[1], input[2]];

	[one, two, three] = [parseFloat(one), parseFloat(two), parseFloat(three)];

	var sum = one + two + three;

	console.log(sum);
}




