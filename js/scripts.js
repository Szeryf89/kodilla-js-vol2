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

var x = randomNumber();

console.log( getTriangleArea(6, 10) );
console.log( getTriangleArea(x, x) );
