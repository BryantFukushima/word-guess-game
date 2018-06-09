var answers = ['space invaders', 'donkey kong' , 'pong' , 'pacman' , 'sonic' , 'street fighter' , 'zelda'];
var random = Math.floor(Math.random() * answers.length);
var randomAnswer = answers[random];
var solWord = [];
var main = document.querySelector('#main');


// START
main.innerHTML = "Press Enter to Start."

// NEW ANSWER WHEN SOLVED
function newAnswer() {
	solWord = [];
		for (var i = 0; i < answers[random].length; i++) {
		    if (answers[random][i] == " ") {

		        solWord.push('&nbsp; <br>');
		    } else {
		        solWord.push('_');
		    }
		}

		main.innerHTML = solWord.join(' ');
}

// USER KEY INPUT

var userGuessKey = [];
var numLives = 15;
var lives = document.querySelector('#lives');
var numWins = 0;
var wins = document.querySelector('#wins');

	lives.innerHTML = numLives;
	wins.innerHTML = numWins;

function userInput(e) {

	var userKey = e.key;
	var guess = document.querySelector('#guess');

	// letters used
	if (userGuessKey.indexOf(userKey) == -1 && answers[random].includes(userKey) == false && userKey != "Enter") {
		userGuessKey.push(userKey);
		guess.innerHTML = guess.innerHTML + userKey + ' ';
		
		//number of lives
		numLives--;
		lives.innerHTML = numLives;
	}

	// letter correct, replace '_' with letter
	for (var i = 0; i < answers[random].length; i++) {
        if (answers[random][i] == userKey && userKey != ' ') {
            solWord.splice(i, 1, userKey);
        }
    }
    main.innerHTML = solWord.join(' ');


    //solved word
    if (solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {
   		main.innerHTML = "Correct! Hit Enter to advance. <br><br>" + solWord.join(' ');
   		userGuessKey = [];
   		guess.innerHTML = userGuessKey.join(' ');
		answers.splice(answers.indexOf(randomAnswer), 1);
        random = Math.floor(Math.random() * answers.length);
        randomAnswer = answers[random];
        solWord = [];
        numLives = 15;
        lives.innerHTML = numLives;
        numWins++;
        wins.innerHTML = numWins;
    }

    if (userKey == 'Enter'){
    	newAnswer();
    }

    if (answers.length == 0){
    	main.innerHTML = "Mission Accomplished! All words found.";
    	answers = ['space invaders', 'donkey kong' , 'pong' , 'pacman' , 'sonic' , 'street fighter' , 'zelda'];
    	numLives = 15;
    	lives.innerHTML = numLives;
    	numWins = 0;
    	wins.innerHTML = numWins;
    }

    if (numLives == 0){
    	main.innerHTML = "GAME OVER";
    	numLives = 15;
    	lives.innerHTML = numLives;
    	numWins = 0;
    	wins.innerHTML = numWins;
    }
    if (numLives == 0 && userKey == 'Enter'){
    	
    }

}

document.onkeypress = userInput;