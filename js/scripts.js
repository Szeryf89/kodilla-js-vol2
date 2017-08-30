//Module 9.1

function getTriangleArea(a, h) {

    if (a <= 0 || h <= 0) {
        return ('Incorrect data');
    }

        return (a * h / 2);
};

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
};


var a = randomNumber();
var h = randomNumber();

console.log(('a = 6 and h = 10 result = ') +  getTriangleArea(6, 10) );
console.log(('result from random a and h = ') + getTriangleArea(a, h) );


//Module 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(femaleNames);
console.log(maleNames);
console.log(allNames);

var newName = 'Marian'
    if (allNames.indexOf(newName) === -1) {
        console.log(allNames.push(newName));
    }

console.log(allNames);

//Module 9.3

