//function

function getTriangleArea(a, h) {

    if (a <= 0 || h <= 0) {
        return ('Incorrect data');
    }

        return (a * h / 2);
};

function randomNumber() {

    return (Math.random()*10);
};

var a = randomNumber();
var h = randomNumber();

console.log( getTriangleArea(6, 10) );
console.log( getTriangleArea(a, h) );
