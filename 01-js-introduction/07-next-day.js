solve(['2016', '9', '30']);


function solve(input){
	let [year, month, day] = input;
	[year, month, day] = [parseInt(year), parseInt(month), parseInt(day)];

	
	Date.prototype.addDays = function (days) {
		var dat = new Date(this.valueOf());
	    dat.setDate(dat.getDate() + days);
	    return dat;
	}

	let date = new Date(year, month - 1, day);
	let nextDay = new Date(date.valueOf());
	nextDay.setDate(nextDay.getDate() + 1);
	

	let result = `${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`;

	console.log(result);

	
}