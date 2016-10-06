"use strict";

solve([

	'The new iPhone has no headphones jack.',
'o headphones jack.',

]);



function solve (input) {
	let [inpStr, pattern] = input;

	let substr = inpStr.substr(inpStr.length - pattern.length, inpStr.length);

	if(substr === pattern){
		console.log(true);
	} else {
		console.log(false);
	}
}