var answers = ['space invaders', 'donkey kong' , 'pong' , 'pacman' , 'sonic' , 'street fighter' , 'zelda'];
var random = Math.floor(Math.random() * answers.length);
var randomAnswer = answers[random];
var solWord = [];
var main = document.querySelector('#main');
var userGuessKey = [];
var guess = document.querySelector('#guess');
var numLives = 15;
var lives = document.querySelector('#lives');
var numWins = 0;
var wins = document.querySelector('#wins');

	lives.innerHTML = numLives;
	wins.innerHTML = numWins;


// START
main.innerHTML = "Press Enter to Start."

// NEW ANSWER WHEN SOLVED
function newAnswer() {
	solWord = [];
	guess.innerHTML = "";
	numLives = 15;
        lives.innerHTML = numLives;
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

function userInput(e) {

	var userKey = e.key;

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
        numLives = 15;
        lives.innerHTML = numLives;
        numWins++;
        wins.innerHTML = numWins;
    }

    if (solWord.length == 0 || userKey == 'Enter'){
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
    	main.innerHTML = "GAME OVER" + "<br>" + "Word Missed: " + randomAnswer ;
    	numLives = 15;
    	lives.innerHTML = numLives;
    	numWins = 0;
    	wins.innerHTML = numWins;
    }

    var answerImg = document.querySelector('#answerImg');

        if (solWord.join('').replace('&nbsp; <br>' , ' ') == "space invaders") {
			answerImg.innerHTML = '<img src="https://media.giphy.com/media/KY2ZMhnCxP008/giphy.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "donkey kong") {
			answerImg.innerHTML = '<img src="https://i.pinimg.com/originals/81/29/ae/8129aedf02989ab2f9ce4269ed6f4a05.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "pong") {
			answerImg.innerHTML = '<img src="https://media.giphy.com/media/2F0P5xIMpwrXW/giphy.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "pacman") {
			answerImg.innerHTML = '<img src="https://media2.giphy.com/media/A8NkSPltT13H2/giphy.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "sonic") {
			answerImg.innerHTML = '<img src="https://pa1.narvii.com/6186/c3ee3affc57edf16cb7390e7949bff841152ea40_hq.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "street fighter") {
			answerImg.innerHTML = '<img src="https://media.giphy.com/media/CKCQLQJfRr2h2/giphy.gif">'
		} else if (solWord.join('').replace('&nbsp; <br>' , ' ') == "zelda") {
			answerImg.innerHTML = '<img src="https://i.imgur.com/9OYTkqj.gif">'
		} else {
			answerImg.innerHTML = '';
		}


//  else if (answers[random] == "donkey kong" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// } else if (answers[random] == "pong" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// } else if (answers[random] == "pacman" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// } else if (answers[random] == "sonic" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// } else if (answers[random] == "street fighter" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// } else if (answers[random] == "zelda" && solWord.join('') == answers[random].replace(' ', '&nbsp; <br>')) {

// }

}

document.onkeypress = userInput;

   












