'use strict';

//! class - синтаксический сахар, появившийся в ES6, до него использовали функции конструкторы 

function User (name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.sayHi = () => {
        console.log(`Hi! My name is ${this.name}`);
    };
}

User.prototype.exit = function(){
    console.log(`Пользователь ${this.name} вышел!`);
};

const Ivan = new User('Ivan', 51);
const Alex = new User('Alex', 23);

console.log(Ivan);
console.log(Alex);

Ivan.sayHi();
Alex.sayHi();

Ivan.exit();