// solve(["20", "5"]);
solve(["15", "7"]);


function solve([bottles, boxes]){
    [bottles, boxes].map(Number);

    let counter = 1;

    while(boxes * counter < bottles){
        counter++;
    }

    console.log(counter);
}