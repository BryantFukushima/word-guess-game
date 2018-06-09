var answers = ['space invaders', 'donkey kong' , 'pong' , 'pacman' , 'sonic' , 'street fighter' , 'zelda'];
var random = Math.floor(Math.random() * answers.length);
var randomAnswer = answers[random];
var solWord = [];
var main = document.querySelector('#main');
var prevAnswer = [];
var correctAnswer = [];
var nextAnswer;

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
	nextAnswer = answers;

	if (nextAnswer.length == 0){
    	main.innerHTML = "Mission Accomplished! All words found.";
    }

    random = Math.floor(Math.random() * answers.length);
    randomAnswer = answers[random];
    solWord = [];

    for (var i = 0; i < nextAnswer[random].length; i++) {
        if (nextAnswer[random][i] == " ") {

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


    if (userGuessKey.indexOf(userKey) == -1 && randomAnswer.includes(userKey) == false && userKey != "Enter") {
        userGuessKey.push(userKey);
        guess.innerHTML = userGuessKey.join(' ');

    }
 

    for (var i = 0; i < answers[random].length; i++) {
        if (answers[random][i] == userKey && userKey != ' ') {
            solWord.splice(i, 1, userKey);
        }
    }

    main.innerHTML = solWord.join(' ');

 if (solWord.join('') == randomAnswer.replace(' ', '&nbsp;')) {
        main.innerHTML = "Correct! Hit Enter to advance. <br><br>" + solWord.join(' ');
        userGuessKey = [];
        guess.innerHTML = userGuessKey.join(' ');

    }


    if (userKey === "Enter") {
        
        correctAnswer.push(randomAnswer);
        newAnswer();

    }


}

document.onkeypress = userInput;

