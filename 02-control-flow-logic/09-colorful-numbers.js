"use strict";

solve([10]);


function solve([n]){
    [n] = [n].map(Number);
    let output = "<ul>";

    for(let i = 0; i < n; i++){
        i = parseInt(i);
        if(i % 2 === 0) {
            output += "<li><span style='" + "color:green" + "'>" + (i + 1) + "</span></li>";
        } else {
            output += "<li><span style='" + "color:blue" + "'>" + (i + 1) + "</span></li>";
        }
    }

    output += "</ul>";

    console.log(output);
}
