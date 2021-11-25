
describe("rectangleSquare", function(){
    function makeTest(a, b){
        let res = a * b;
        it(`Площадь при a = ${a} и b = ${b} будет ${res}`, function(){
            assert.equal(rectangleSquare(a, b), res);
        });
    }
    for(let a = 1; a <= 10; a++){
        describe(`Площадь при a = ${a}`, function () {
            for(let b = 0; b <= 10; b++){
                makeTest(a, b);
            }
        });
    }
});