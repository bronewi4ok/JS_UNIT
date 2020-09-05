"use strict";
// 1
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели:", "");

// 2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// 3
const lastMovie1 = prompt("Одн из послежних просмотренных фильмов:", ""),
    estimate1 = prompt("На сколько оцените его?", ""),
    lastMovie2 = prompt("Одн из послежних просмотренных фильмов:", ""),
    estimate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovie1] = estimate1;
personalMovieDB.movies[lastMovie2] = estimate2;

console.log(personalMovieDB);


for (let i = 5; i < 8; i++) {
    console.log("ololol" + i);
    if (i === 6) {
        continue;
    }
}