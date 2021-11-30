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