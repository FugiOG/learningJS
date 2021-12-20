// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement); //весь html

//TODO: Для всех свойств по типу: firstChild и т.п, возвращающих
//TODO: узел, существует аналог, возвращающий элемент,
//TODO: Например: firstElementChild (Они строятся по одинаковому принципу)
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode); // родительский узел
// console.log(document.querySelector('#current').parentElement); // родительский элемент

//*Использование data атрибута:
// console.log(document.querySelector('[data-current="3"]').nextSibling); //следующий соседний //!узел
// console.log(document.querySelector('[data-current="3"]').previousSibling); //предыдущий соседний //!узел

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //слеедующий соседний //!элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //предыдущий соседний //!элемент

//* Перебирание всех узлов внутри childNodes (childNodes - псевдомассив с итератором):
// for (const node of document.body.childNodes) { //* в данном случае цикл перебирает всех детей тега body
//     if(node.nodeName == '#text'){
//         continue;
//     }
//     console.log(node);
// }

