solve(["2", "3.5", "4"]);




function solve([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);

    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * ((sp - a) * (sp - b) * (sp - c)));

    console.log(area);
}
