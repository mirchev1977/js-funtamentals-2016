solve(["3", "5"]);





function solve([r, h]) {
    [r, h] = [r, h].map(Number);

    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (r + s);
    let volume = Math.PI * r * r * h / 3;

    console.log("volume = %d", volume);
    console.log("area = %d", area);
}