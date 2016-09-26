"use strict";

solve(['Number One', 'Nelly', '4:09']);

function solve(input) {
    let [songName, name, length] = input;
    console.log("Now Playing: %s - %s [%s]", name, songName, length);
}
