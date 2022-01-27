'use strict'; 

// localStorage.setItem('some', 256);
// localStorage.setItem('name', 'Anna');

// console.log(localStorage.getItem('some'));

// localStorage.removeItem('some');

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      colorBtn = document.querySelector('#color');


if (localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

if (localStorage.getItem('colorChanged')){
    form.style.background = 'green';
}

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')){
        localStorage.removeItem('isChecked');
    }else{
        localStorage.setItem('isChecked', true);
    }
});

colorBtn.addEventListener('click', () => {
    if (localStorage.getItem('colorChanged')){
        localStorage.removeItem('colorChanged');
        form.style.background = '';
    }else{
        localStorage.setItem('colorChanged', true);
        form.style.background = 'green';
    }
});