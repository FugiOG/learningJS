'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++){
    let userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
    let userMovieScore = prompt('На сколько оцените его?', '');
    if (userMovieLast != null && userMovieScore != null && userMovieLast != '' && userMovieScore != '' && userMovieLast.length < 51){
        personalMovieDB.movies[userMovieLast] = userMovieScore;
    }else{
        i--;
    }
}
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


console.log(personalMovieDB);

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
    alert('Вы киноман');
}else {
    alert('Произошла ошибка');
}
