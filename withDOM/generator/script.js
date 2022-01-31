'use strict';

//*
// function* generator() {
//     yield 'S';
//     yield 'C';
//     yield 'R';
//     yield 'I';
//     yield 'P';
//     yield 'T';
// }

// const str = generator();

// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);


//*
function* count(n){
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

//*

for (const key of count(7)) {
    console.log(key);
}


