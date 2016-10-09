"use strict";

solve(
[
"Ashton",
"Kutcher",
"Ariel",
"Lilly",
"Keyden",
"Aizen",
"Billy",
"Braston",
]
);


function solve (input) {
	let usernames = new Map();

	input.forEach( function(username, index) {
		usernames[username] = username.length;
	});

	let arrUsernames = [];
	for (let key in usernames) {
		let obj = {};
		obj.username = key;
		obj.length = usernames[key];
		arrUsernames.push(obj);
	}

	arrUsernames.sort((a, b) =>{
		let length = a.length - b.length;

		if (length === 0) {
			return a.username.toLowerCase().localeCompare(b.username.toLowerCase());
		}

		return length;
	});

	arrUsernames.forEach( function(username, index) {
		console.log(username.username);
	});
}