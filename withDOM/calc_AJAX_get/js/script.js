'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //* атрибуты - request.open(method, url, async, login, pass);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //? 1-й способ
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status === 200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     }else {
    //         inputUsd.value = `что-то пошло не так (status: ${request.status})`
    //     }
    // });

    //? 2-й способ   |   предпочтительнее
    request.addEventListener('load', () => {
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }else {
            inputUsd.value = `что-то пошло не так (status: ${request.status})`
        }
    });

    //* свойства :
    //* status - пример: 404
    //* statusText - пример: OK
    //* response - ответ сервера
    //* readyState - от 0 до 4

});