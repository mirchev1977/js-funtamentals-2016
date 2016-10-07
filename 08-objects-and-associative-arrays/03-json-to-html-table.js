"use strict";

solve(
	['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
);


function solve (input) {
	let arr = JSON.parse(input[0]);

	let header = '   <tr>';
	let keys = Object.keys(arr[0]);
	for (let key of keys) {
		header += `<th>${key}</th>`;
	}
	header += '</tr>';

	console.log('<table>');
	console.log(header);
	arr.forEach( function(element, index) {
		let tr = '   <tr>';
		for (let key of keys) {
			let el = htmlEntities(element[key]);
			tr += `<td>${el}</td>`;
		}
		tr += '</tr>';

		console.log(tr);
	});

	function htmlEntities(str) {
	    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}

	console.log('</table>');
}