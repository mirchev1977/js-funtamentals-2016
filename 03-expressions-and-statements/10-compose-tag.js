"use strict";

solve(['smiley.gif', 'Smiley Face']);

function solve(input) {
    let [fileName, description] = input;

    console.log('<img src="%s" alt="%s">', fileName, description);
}
