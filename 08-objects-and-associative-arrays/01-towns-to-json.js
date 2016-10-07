"use strict";

solve(
	['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);



function solve (input) {
	let header = input.splice(0, 1)[0].split(/\s*\|\s*/).filter(el => el !== '');
	let towns = input;

	let arr = [];

	towns.forEach( function(town, index) {
		let townArr = town.split(/\s*\|\s*/);
		let [name, latitude, longtitude] = townArr.filter(el => el !== '');

		let obj = {};
		obj[header[0]] = name;
		obj[header[1]] = Number(latitude);
		obj[header[2]] = Number(longtitude);


		arr.push(obj);
	});

	let json = JSON.stringify(arr);

	console.log(json);
}