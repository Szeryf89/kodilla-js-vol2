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


//Module 9.5


var button = document.getElementsByClassName('button');
    for (var i = 0; i < button.length; i++) {
        var text = button[i].innerText;
    alert(text);
    }

//Module 9.6

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(){
	var table = document.getElementsByTagName('li');
	var item = 'item ' + table.length;
	list.innerHTML += '<li>' + item + '</li>';
})

//Module 9.7

    //Select: paper / stone / scissors
    newGameBtn = document.getElementById('js-newGameButton'),
    pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),

    //Initial values
    gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },

    computer = {
        score: 0
    },

    //Display game elements

    newGameBtn = document.getElementById('js-newGameButton'),
    endResult = document.getElementById('js-endResult'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    playerNameElem = document.getElementById('js-playerName'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    computerPointsElem = document.getElementById('js-computerPoints'),

    //Player selection

    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

    newGameBtn.addEventListener('click', newGame);
    pickRock.addEventListener('click', function() { playerPick('rock') });
    pickPaper.addEventListener('click', function() { playerPick('paper') });
    pickScissors.addEventListener('click', function() { playerPick('scissors') });

    function setGameElements() {
        if ('started' === gameState) {
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';

            return;
        }

        if ('ended' === gameState) {
            newGameBtn.innerText = 'Jeszcze raz';
            endResult.innerText = player.name + ': ' + player.score + ' - Komputer: ' + computer.score;

            return;
        }

        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
    }

    setGameElements();

    function newGame() {
        player.name = prompt('Wpisz swoje imię', 'imię gracza');

        if (player.name !== '') {
            resetScores();

            gameState = 'started';
            setGameElements();
            playerNameElem.innerHTML = player.name;
        }

        setGamePoints();
    }

    function playerPick(playerPick) {
        var computerPick = getComputerPick();
        var computerPick = getComputerPick();
        var computerPick = getComputerPick();

        playerPickElem.innerHTML = playerPick;
        computerPickElem.innerHTML = computerPick;

        checkRoundWinner(playerPick, computerPick);
    }

    function getComputerPick() {
        var possiblePicks = ['rock', 'paper', 'scissors'];

        return possiblePicks[Math.floor(Math.random() * 3)];
    }

    function checkRoundWinner(playerPick, computerPick) {
        var IsWinner = 'player';
        playerResultElem.innerHTML = computerResultElem.innerHTML = '';

        if (playerPick == computerPick) {
            winnerIs = 'noone'; // draw
        }

        if (checkComputerPick()) {

            winnerIs = 'computer';
        }

        if (winnerIs == 'player') {
            playerResultElem.innerHTML = "Wygrana!";
            player.score++;
        }

        if (winnerIs == 'computer') {
            computerResultElem.innerHTML = "Wygrana!";
            computer.score++;
        }

        setGamePoints();
        if (isGameFinish(10)){
            gameState = 'ended';
            setGameElements();
        }
    }

    function setGamePoints() {
        playerPointsElem.innerHTML = player.score;
        computerPointsElem.innerHTML = computer.score;
    }

    function resetScores() {
        player.score = 0;
        computer.score = 0;
    }

    function checkComputerPick() {
        return (
            (computerPick == 'rock' &&  playerPick == 'scissors') ||
            (computerPick == 'scissors' &&  playerPick == 'paper') ||
            (computerPick == 'paper' &&  playerPick == 'rock')
        )
    }

    function isGameFinish(score) {
        return (computer.score == score || player.score == score);
    }