/**
 * Created by Miroslav on 9/21/2016.
 */
solve(["1999"]);
// solve(["2000"]);
// solve(["2016"]);

function solve([ifLeap]) {
    [ifLeap].map(Number);

    if((ifLeap % 4 === 0 && ifLeap % 100 !== 0) || ifLeap %400 === 0){
        console.log("yes");
    } else {
        console.log("no");
    }
}