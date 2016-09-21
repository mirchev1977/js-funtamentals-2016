// solve(['2', '4', '5', '0']);
solve(['2.34', '15.66', '-13.55', '-2.9985']);


function solve(input){
	let[x1, y1, x2, y2] = input;

	let a = parseFloat(Math.max(x1, x2)) - parseFloat(Math.min(x1, x2));
	let b = parseFloat(Math.max(y1, y2)) - parseFloat(Math.min(y1, y2));

	let hyp = Math.sqrt((a * a) + (b * b));

	console.log(hyp);
}