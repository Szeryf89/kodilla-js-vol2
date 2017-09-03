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

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'

console.log(text);
console.log('That is not true. The above sentence applies to Triceratops');

var dinosaur = 'Triceratops'
var nameUpperCased = dinosaur.toUpperCase();

console.log(nameUpperCased);

var textCharsAfter = text.replace('Velociraptor', nameUpperCased);

console.log(textCharsAfter);

console.log(textCharsAfter.length/2)

var partOfText = textCharsAfter.length/2;

console.log(textCharsAfter.slice(0, 72));

//Module 9.4
//zadanie wykonane dla document.write

for (i=0;i<=4;i++)
    {
    for(j=0; j<=i; j++)
    {
    document.write("*");
    }
    document.write("<br>");
    }

//zadanie wykonane w console.log

function drawTree(value) {

var star = '';
    for (i=0;i<=value;i++) {
        for(j=0; j<=(i -1); j++)
    {
    star += '*';
    }

    console.log(star);

    star = '';

    }
}
    console.log(drawTree(1));
    console.log(drawTree(2));
    console.log(drawTree(5));


//Module 9.4


var button = document.getElementsByClassName('button');
    for (var i = 0; i < button.length; i++) {
        var text = button[i].innerText;
    alert(text);
    }

//Module 9.5

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(){
	var table = document.getElementsByTagName('li');
	var item = 'item ' + table.length;
	list.innerHTML += '<li>' + item + '</li>';
})
