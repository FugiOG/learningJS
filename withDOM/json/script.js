'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); //* Глубокая копия

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

// console.log(JSON.parse(JSON.stringify(persone)));