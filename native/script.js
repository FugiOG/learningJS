'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели', '');
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++){
            let userMovieLast = prompt('Один из последних просмотренных фильмов?', '');
            let userMovieScore = prompt('На сколько оцените его?', '');
            if (userMovieLast != null && userMovieScore != null && userMovieLast != '' && userMovieScore != '' && userMovieLast.length < 51){
                personalMovieDB.movies[userMovieLast] = userMovieScore;
            }else{
                i--;
            }
        } 
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
        }else if (personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else {
            alert('Произошла ошибка');
        }
    },
    writeYourGenres: () => {
        while (true){
            let answ = prompt('Введите ваши любимые жанры:', '');
            if (answ == '' || answ == null){
                continue;
            }
            personalMovieDB.genres = answ.split(', ');
            break;
        }
        personalMovieDB.genres.forEach((item, ind, arr) => console.log(`Любимый жанр #${ind + 1} - это ${item}`));
    },
    showMyDB: (hidden) => {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true},
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();

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

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
