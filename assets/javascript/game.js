var answers = ['space invaders', 'one word'];
var random = Math.floor(Math.random() * answers.length);
var randomAnswer = answers[random];
var solWord = [];
var main = document.querySelector('#main');
var prevAnswer = [];
var correctAnswer = [];

// "_" for answer print on load

for (var i = 0; i < answers[random].length; i++) {
    if (answers[random][i] == " ") {

        solWord.push('&nbsp;');
    } else {
        solWord.push('_');
    }
}

main.innerHTML = solWord.join(' ');


function newAnswer() {

	answers.splice(randomIndex , 1);
    random = Math.floor(Math.random() * answers.length);
    randomAnswer = answers[random];
    solWord = [];
    userGuessKey = [];

    for (var i = 0; i < answers[random].length; i++) {
        if (answers[random][i] == " ") {

            solWord.push('&nbsp;');
        } else {
            solWord.push('_');
        }
    }

    main.innerHTML = solWord.join(' ');
}

var userGuessKey = [];
var randomIndex = answers.indexOf(randomAnswer);

function userInput(e) {

    var userKey = e.key;
    var guess = document.querySelector('#guess');


    if (userGuessKey.indexOf(userKey) == -1 && randomAnswer.includes(userKey) == false) {
        userGuessKey.push(userKey);
        guess.innerHTML = userGuessKey.join(' ');

    }
 

    for (var i = 0; i < answers[random].length; i++) {
        if (answers[random][i] == userKey) {
            solWord.splice(i, 1, userKey);
        }
    }

    main.innerHTML = solWord.join(' ');

 if (solWord.join('') == randomAnswer.replace(' ', '&nbsp;')) {
        main.innerHTML = "Correct! Hit Enter to advance. <br><br>" + solWord.join(' ');
        userGuessKey = [];

    }


    if (userKey === "Enter") {
        
        correctAnswer.push(randomAnswer);
        newAnswer();

    }


}

document.onkeypress = userInput;
