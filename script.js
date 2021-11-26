'use strict';

const userMoviesCount = +prompt('Сколько фильмов вы уже смотрели', '');

let personalMovieDB = {
    count: userMoviesCount,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

const userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
const userMovieScore = prompt('На сколько оцените его?', '');

personalMovieDB.movies[userMovieLast] = userMovieScore;

console.log(personalMovieDB);