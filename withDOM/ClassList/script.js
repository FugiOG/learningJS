'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0)); //* .item(n) - позволяет получить название класса у элемента под индексом n

// btns[0].classList.add('red'); //* .add() - добавляет класс к элементу

// btns[0].classList.remove('blue'); //* .remove() - удаляет класс у элемента 
// btns[0].classList.toggle('blue'); //* .toggle() - добавляет класс, если у элемента его нет, а если такой класс у элемента есть, то удаляет его

// btns[1].classList.add('red');

// if (btns[1].classList.contains('red')) { //* .contains() - возвращает булевое значение. Проверяет есть ли класс у элемента 
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    // btns[1].classList.toggle('red'); //* Альтернатива
});

//* Делегирование -------------------------------------------

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')){ //* .matches() - ищет совпадения 
        console.log('Hello!');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);