'use strict';

const now = new Date();
//*new Date.parse('2021-12-12'); аналогично const now = new Date('2021-12-12');
//? ----------------------- Сеттеры 
now.setHours(30);
//? ----------------------- 
console.log(now); //* текущая дата
console.log(now.getFullYear()); //* текущий год
console.log(now.getMonth()); //* текущий месяц
console.log(now.getDate()); //* текущий день месяца
//* get... аналогичные
console.log(now.getDay()); //* текущий день недели 
console.log(now.getUTCHours()); //* текущее время по UTC 0

//? -----------------------

console.log(now.getTimezoneOffset()); //* разница между твоим часовым поясом и UTC в минутах
console.log(now.getTime()); //* количество миллисекунд прошедших с 01-01-1970

//? ----------------------- Измеряем время работы цикла

let start = new Date();

for (let i = 0; i < 10**7; i++) {
    let res = i**19 * 0.3;
    let p = res ** 2;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);