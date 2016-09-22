"use strict";

solve(["7"]);



function solve([inp]) {
    [inp] = [inp].map(Number);

    if((inp % 1) === 0){
        if(inp % 2 === 0){
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("invalid");
    }
}
