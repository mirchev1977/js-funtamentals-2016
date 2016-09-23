"use strict";

solve([5, -5, 40]);

function solve([v1, v2, t]){
    [v1, v2, t] = [v1, v2, t].map(Number);

    let v1M = v1 * 1000;
    let v2M = v2 * 1000;

    let v1MSec = v1M / 3600;
    let v2MSec = v2M / 3600;

    let dist1 = v1MSec * t;
    let dist2 = v2MSec * t;

    let difference = Math.max(dist1, dist2) - Math.min(dist1, dist2);

    console.log(difference);
}
