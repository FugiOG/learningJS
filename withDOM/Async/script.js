'use strict';

//* async - скрипты (по подгрузке) не зависят друг от друга и от DOM - структуры
//*         

const p = document.querySelectorAll('p');
console.log(p);


//! Метод загрузки скрипта на страницу -------------------------------------
//* изначально такой метод также является ассинхронным  

const script = document.createElement('script');
script.src = 'test.js';
script.async = false; //* чтобы убрать ассинхронность при загрузке скриптов
document.body.append(script);

//!-------------------------------------------------------------------------