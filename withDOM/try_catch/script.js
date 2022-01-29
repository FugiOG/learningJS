'use strict';

try{

    const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        console.log('Click!');
    });

}catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
