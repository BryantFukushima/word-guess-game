var answers = ['zelda' , 'msweeper'];
var randomAnswer = Math.floor(Math.random()*answers.length);
var solWord = [];
var main = document.querySelector('#main');

	// "_" for answer print on load
	for ( var i = 0; i < answers[randomAnswer].length; i++ ) {

		solWord.push('_');
	}

	main.innerHTML = solWord.join(' ');


var userGuessKey = [];

function userInput(e) {

	var userKey = e.key;
	var guess = document.querySelector('#guess');


	letGuess = [...new Set(userGuessKey)];
		
			if (answers[randomAnswer].includes(userKey) == false) {
				userGuessKey.push(userKey);
				guess.innerHTML = letGuess.join(' ');
			} 

		
	

	// var indexKey  = answers[randomAnswer].indexOf(userKey);

	// if (answers[randomAnswer].includes(userKey) == true) {
	// 	solWord.splice(indexKey, 1 , userKey);

	// 	main.innerHTML = solWord.join(' ');
	// }






	for (var i = 0; i < answers[randomAnswer].length; i++) {
	    if (answers[randomAnswer][i] == userKey) {
	    	solWord.splice(i, 1 , userKey);
	    
	    }
	}
	main.innerHTML = solWord.join(' ');

}

document.onkeypress = userInput;
