'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');

const personalMovieDB = {
    count: userMoviesCount,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
const userMovieScore = prompt('На сколько оцените его?', '');

personalMovieDB.movies[userMovieLast] = userMovieScore;

console.log(personalMovieDB);