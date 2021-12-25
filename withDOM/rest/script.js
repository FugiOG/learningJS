const log = function (a, b, ...rest){
    console.log(a, b, rest);
};

log('asd', 'sdfsdf', 'fweefwfwef', 'ppppppppppppppp');

function calcOrDouble (number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);