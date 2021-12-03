'use strict';

//СТАРЬЁ -----------------------------------------------------------------

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);
console.log(btns[1]); //т.к. getElementsByTagName возвращает псевдомассив

const circ = document.getElementsByClassName('circle');
console.log(circ);
console.log(circ[0]); // по той же причине

// ------------------------------------------------------------------------
//НОВЬЁ -------------------------------------------------------------------

const hrt = document.querySelectorAll('.heart');
console.log(hrt);
hrt.forEach(item => console.log(item)); //т.к. возвращает псевдомассив + итератор

const wrp = document.querySelector('.wrapper'); //возвращает элемент
console.log(wrp);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circ[0].style.backgroundColor = 'red';

// for (let i = 0; i < hrt.length; i++){
//     hrt[i].style.backgroundColor = 'blue';
// }

hrt.forEach(item => item.style.backgroundColor = 'blue');

const div = document.createElement('div');

div.classList.add('black');

// document.body.append(div);

// document.querySelector('.wrapper').append(div);
wrp.append(div);
// wrp.appendChild(div); //СТАРОЕ

// wrp.prepend(div);

// hrt[0].before(div);
// hrt[0].after(div);

// wrp.insertBefore(div, hrt[1]); //СТАРОЕ

// circ[1].remove();
// wrp.removeChild(hrt[1]); //СТАРОЕ

// hrt[0].replaceWith(circ[0]);
// wrp.replaceChild(circ[0], hrt[0]); //СТАРОЕ

div.innerHTML = '<h3>Hello, World!</h3>';

// div.textContent = 'Hello!'; // работает только с текстом, использовать при польз. вводе

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');