'use strict';

const btn = document.querySelector('.btn'),
      block = document.querySelector('.box');

let pos = 0;

function myAnimation() {
    block.style.top = `${pos}px`;
    block.style.left = `${pos}px`;

    if(pos < 300){
        pos++;
        requestAnimationFrame(myAnimation);
    }
    
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));