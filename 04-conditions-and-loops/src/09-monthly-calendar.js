"use strict";

solve(['1', '5', '2016']);

function solve (input) {
	let [day, month, year] = input.map(Number);

	let dt = new Date(year, month - 1, day);

	let year1 = dt.getFullYear();
	let month1 = dt.getMonth() + 1;
	let date1 = dt.getDate();
	let day1 = dt.getDay();

	let dt2 = new Date(year, month1, 0);

	let year2 = dt2.getFullYear();
	let month2 = dt2.getMonth() + 1;
	let date2 = dt2.getDate();
	let day2 = dt2.getDay();

	let calendar = []
	let arr = ['', '', '', '', '', '', ''];

	for (let i = 1; i <= date2; i++) {
		let dt3 = new Date(year, month - 1, i);
		
		let year3 = dt3.getFullYear();
		let month3 = dt3.getMonth() + 1;
		let date3 = dt3.getDate();
		let day3 = dt3.getDay();


		if (day3 === 0) {
			calendar.push(arr);
			arr = ['', '', '', '', '', '', ''];
		}
		if (date3 === date1) {
			arr[day3] = `<td class="today">${date3}</td>`;
		} else {
			arr[day3] = `<td>${date3}</td>`;
		}
	}
	calendar.push(arr);

	//previous month
	let previousMonth = new Date(year, month - 1, 1);

	let first = calendar[0];

	let empty = first.filter(function (element) {
		return element === '';
	});

	if(empty.length < 7){
		for (let i = first.length - 1; i >= 0; i--) {
			if (first[i] === '') {
				previousMonth.setDate(previousMonth.getDate() - 1);
				first[i] = `<td class="prev-month">${previousMonth.getDate()}</td>`;
			}
		}
	}

	//next month
	let nextMonth = new Date(year, month, 1);
	let last = calendar[calendar.length - 1];

	for(let i in last){
		if(last[i] === ''){
			last[i] = `<td class="next-month">${nextMonth.getDate()}</td>`;
			nextMonth.setDate(nextMonth.getDate() + 1);
		}
	}
	
	console.log('<table>');
	console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
	for(let row of calendar){
		let res = `<tr>${row[0]}${row[1]}${row[2]}${row[3]}${row[4]}${row[5]}${row[6]}</tr>`;
		if(res !== '<tr></tr>'){
			console.log(res);
		}
	}
	console.log('</table>');
}