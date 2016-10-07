"use strict";

solve(
	['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']
);


function solve (input) {
	let arr = JSON.parse(input[0]);

	console.log("<table>");
	console.log("  <tr><th>name</th><th>score</th></tr>");
	 arr.forEach( function(element, index) {
	 	let name = element.name;
	 	name = htmlEntities(name);
	 	let score = element.score;
	 	score = htmlEntities(score);
	 	
	 	console.log(`  <tr><td>${name}</td><td>${score}</td></tr>`);
	 });

	 function htmlEntities(str) {
	    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}
	  
	console.log("</table>");
	
}