"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели: ");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели: ");
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilsm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из нескольких просмотренных фильмов: "),
            b = prompt("На сколько оцените его: ");
        if (a != null, b != null, a != '', b != '', a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("siccess");
        } else {
            console.log("error");
            i--;
        }
    }
}
// rememberMyFilsm();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count > 10 || personalMovieDB.count < 50) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count > 50) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(genre) {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        if (a != null && a != "") {
            genre[i] = a;
        } else {
            i--;
        }
    }
    console.log(genre);
}

writeYourGenres(personalMovieDB.genres);