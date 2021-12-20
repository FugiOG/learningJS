'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

console.log(box.getBoundingClientRect()); //* координаты
console.log(box.getBoundingClientRect().top);

const styles = window.getComputedStyle(box);//* именно применённые css стили

console.log(styles);

console.log(document.documentElement.scrollTop); //* scrollTop можно изменять

window.scrollBy(0, 400); //* от текущей позиции

window.scrollTo(0, 400); //* от начала страницы