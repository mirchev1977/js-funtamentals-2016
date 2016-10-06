"use strict";


solve([
	"Join WebStars now for free, at www.web-stars.com",
	"You can also support our partners:",
	"Internet - www.internet.com",
	"WebSpiders - www.webspiders101.com",
	"Sentinel - www.sentinel.-ko",
]);


function solve (input) {
	input = input.join(',');

	let pattern = /www.[a-zA-Z0-9-]+(\.[a-z]+)+/g;

	let output = input.match(pattern);

	output.forEach( function(element, index) {
		console.log(element);
	});
}