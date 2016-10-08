"use strict";

solve(
[
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}',
]
);


function solve (input) {
	let arr = input.map(el => JSON.parse(el));

	console.log('<table>');
	arr.forEach( function(element, index) {
		console.log('    <tr>');
		console.log(`        <td>${element.name}</td>`);
		console.log(`        <td>${element.position}</td>`);
		console.log(`        <td>${element.salary}</td>`);
		console.log('    <tr>');
	});
	console.log('</table>');
}