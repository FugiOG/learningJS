'use strict';

//* touchstart 
//* touchmove
//* touchend
//* touchenter
//* touchleave
//* touchcancel   

window.addEventListener('DOMContentLoaded', ()=>{
    const box = document.querySelector('.box');

    boentLx.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});

//touches - возвращает объект со всеми касаниями на экране
//targetTouches - возвращает объект с касаниями только на элементе
//changedTouches - список касаний, которые участвуют в событии (участвовали)