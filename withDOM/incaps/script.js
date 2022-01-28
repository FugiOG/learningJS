'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #id = '034012';

    get id(){
        return this.#id;
    }

    set id(num){
        if (num.length === 6){
            this.#id = num;
        }else {
            console.log('Недопустимое значение.');
        }
    }

    get age(){
        return this._age;
    }

    set age(num){
        if (typeof num == 'number' && num > 0 && num < 120){
            this._age = num;
        }else {
            console.log('Недопустимое значение.');
        }
    }

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}, id: ${this.#id}`);
    }
}

let Alex = new User('Alex', 26);
Alex.say();

Alex.age = 38;
console.log(Alex.age);
Alex.say();

console.log(Alex.id);
Alex.id = '000001';
console.log(Alex.id);

//! console.log(Alex.#id);

Alex.say();