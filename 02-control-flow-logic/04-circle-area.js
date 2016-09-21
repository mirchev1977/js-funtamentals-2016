solve(["5"]);


function solve([radius]) {
    [radius] = [radius].map(Number);

    let area = Math.PI * (radius * radius);

    console.log(area);
    console.log(parseFloat(area.toFixed(2)));
}