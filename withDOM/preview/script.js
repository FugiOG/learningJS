'use strict';

const btn = document.querySelector('#btn'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.addEventListener('click', ()=> alert('Hi'));

// btn.addEventListener('mouseenter', (event)=> console.log(event.target));

// let i = 0;
// const deleteElement = (event)=> {
//     console.log(event.target);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('mouseenter', deleteElement);
//     }
// };

// btn.addEventListener('mouseenter', deleteElement);

//! всплытие событий -------------------------------
const deleteElement = (event)=> {
    console.log(event.target);
    console.log(event.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//! ------------------------------------------------


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяет стандартное поведенме браузера
    console.log(event.target);
});


btns.forEach(item => item.addEventListener('click', deleteElement, {once: true})); //* {once: true} - опции события 