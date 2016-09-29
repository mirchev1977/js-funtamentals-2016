"use strict";

solve([3]);


function solve (input) {
	let [n] = input.map(Number);

	console.log('<table border="1">');
	for (let i = 0; i <= n; i++) {
        let row = '';
        if (i === 0) {
			row += '<tr><th>x</th>';
			for (let j = 1; j <= n; j++) {
				row += `<th>${j}</th>`;
			}
		} else {
			row += `<tr><th>${i}</th>`;
            let val = i;
            for (let j = i; j < (i + n); j++) {
            	// if(j === i){
            	// 	val = i;
            	// } else {
            	// 	val = j + i;
            	// }

            	row += `<td>${val}</td>`;
                val += i;
            }
		}

		row += '</tr>'
		console.log(row);
	}
	console.log('</table>');
}