'use strict';

//* обычные геттеры/сеттеры

// let user = {
//     name: 'Alex',
//     age:25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };


// console.log(user.userAge);
// user.userAge = 36;
// console.log(user.userAge);

//* умные геттеры/сеттеры

let user = {
    name: 'Alex',
    _age:25,

    get age() {
        return this._age;
    },

    set age(num) {
        this._age = num;
    }
};

console.log(user.age);
user.age = 36; 
console.log(user.age);


console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), 0, 2));