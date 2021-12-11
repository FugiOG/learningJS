'use strict';

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 2000, 'HI');
// });


//? -----------------------------------------------------------------------------------------------------------------
// const timerId = setTimeout(logger, 2000, 'Hello!'); //* 3-й аргумент и последующие - передаются в фунцию-callback

// clearInterval(timerId); //* останавливает "таймер"

// function logger (textLog) {
//     if (i == 3){
//         clearInterval(timerId);
//     }
//     console.log(textLog);
//     i++;
// }

//? ---------------------------------------------------------------------------------------------------------------------

const btn = document.querySelector('.btn');

function myAnimatios (){
    const elem = document.querySelector('.box');
    let pos = 0;
    
    const id = setInterval(frame, 4);

    function frame () {
        if (pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', () => {
    myAnimatios();
});