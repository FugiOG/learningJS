'use strict';

//* defer - 1)подгружает скрипт в фоновом режиме, они никогда не блокируют структуру
//*         2) всегда начинают выполняться, когда DOM-дерево уже готово 

const p = document.querySelectorAll('p');
console.log(p);