'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        let userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
        let userMovieScore = prompt('На сколько оцените его?', '');
        if (userMovieLast != null && userMovieScore != null && userMovieLast != '' && userMovieScore != '' && userMovieLast.length < 51){
            personalMovieDB.movies[userMovieLast] = userMovieScore;
        }else{
            i--;
        }
    } 
}

rememberMyFilms();

// АНАЛОГ 1:
// let i = 0;
// while (i < 2){
//     let userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
//     let userMovieScore = prompt('На сколько оцените его?', '');
//     i++;
//     if (userMovieLast != null && userMovieScore != null && userMovieLast != '' && userMovieScore != '' && userMovieLast.length < 51){
//         personalMovieDB.movies[userMovieLast] = userMovieScore;
//     }else{
//         i--;
//     }
// }
// - - - - - - - - - - - - 

// АНАЛОГ 2:
// let i = 0;
// do {
//     let userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
//     let userMovieScore = prompt('На сколько оцените его?', '');
//     i++;
//     if (userMovieLast != null && userMovieScore != null && userMovieLast != '' && userMovieScore != '' && userMovieLast.length < 51){
//         personalMovieDB.movies[userMovieLast] = userMovieScore;
//     }else{
//         i--;
//     }
// }while(i < 2);
//  - - - - - -  -- - -- - - -- - - 

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель');
    }else if (personalMovieDB.count >= 30){
        alert('Вы киноман');
    }else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);












