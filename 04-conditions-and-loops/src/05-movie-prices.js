"use strict";

solve(['The Godfather', 'Friday']);

function solve(input) {

    let [searchFilm, searchDay] = input;

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let films = ['The Godfather', 'Schindler\'s List', 'Casablanca', 'The Wizard of Oz'];
    let prices = [
        [
            12,
            10,
            15,
            12.50,
            15,
            25,
            30
        ],
        [
            8.50,
            8.50,
            8.50,
            8.50,
            8.50,
            15,
            15
        ],
        [
            8,
            8,
            8,
            8,
            8,
            10,
            10
        ],
        [
            10,
            10,
            10,
            10,
            10,
            15,
            15

        ]
    ];

    let arr = [];


    function Film(film, price) {
        this.film = film;
        this.price = price;
    }

    function Weekday(weekday, film) {
        this.weekday = weekday;
        this.film = film;
    }

    for(let i in films){
        let film = films[i];
        let prces = prices[i];

        for(let iPr in prces){
            let flm = new Film(film, prces[iPr]);

            let weekDay = weekDays[iPr];

            let day = new Weekday(weekDay, flm);
            arr.push(day);
        }
    }

    let searchResult = arr.filter(function(day){
        return day.weekday.toLowerCase() === searchDay.toLowerCase()
        && day.film.film.toLowerCase() === searchFilm.toLowerCase();
    });

    if(searchResult.length > 0){
        console.log(searchResult[0].film.price);
    } else {
        console.log('error');
    }
}
