var guLet = [];
var uRight = document.querySelector('#uRight');
var guess = document.querySelector('#guess');
var answers = ['zelda' , 'pink'];
var randomAnswer = Math.floor(Math.random()*answers.length);
var solWord = [];

	for ( var i = 0; i < answers[randomAnswer].length; i++ ) {

		solWord.push('_');
	}

	uRight.innerHTML = solWord.join(' ');

	function userInput(e){

		var key = e.key;

		if (answers[randomAnswer] == 'zelda') {
		if (key == 'z') {
			solWord.splice(0, 1, 'z');
			uRight.innerHTML = solWord.join(' ');
		} else if (key == 'e') {
			solWord.splice(1, 1, 'e');
			uRight.innerHTML = solWord.join(' ');
		} else if (key == 'l') {
			solWord.splice(2, 1, 'l');
			uRight.innerHTML = solWord.join(' ');
		} else if (key == 'd') {
			solWord.splice(3, 1, 'd');
			uRight.innerHTML = solWord.join(' ');
		} else if (key == 'a') {
			solWord.splice(4, 1, 'a');
			uRight.innerHTML = solWord.join(' ');
		} else {
			guLet.push(key);
			guess.innerHTML = guLet.join(' ');
		}
	}

	if (answers[randomAnswer] == 'zelda' && solWord.join('') == 'zelda') {
		randomAnswer = Math.floor(Math.random()*answers.length);
	}


	}

	document.onkeydown = userInput;

