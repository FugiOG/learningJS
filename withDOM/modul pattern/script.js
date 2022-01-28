'use strict';

//! Устаревший метод (паттерн), сейчас так редко делают

//* IIFE - самовызывающаяся функция:
const game1 = (function(){
    const _setId = function() {
        //? имена приватных функцуий (которые не будут использоваться в API модуля)
        //? пишутся с нижним подчёркиванием в начале
    };

    const privat = function (){
        console.log("I'm privat function!!!");
    };
    
    //* API модуля:
    return {
        sayWho: privat,

        botId: 12
    };

}());

game1.sayWho();

console.log(game1.botId);

//! console.log(game1._setId()); не будет работать
