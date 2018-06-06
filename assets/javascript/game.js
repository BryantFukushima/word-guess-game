var guLet = [];

	function userInput(e){
		
		guLet.push(e.key);

		document.querySelector('#uRight').innerHTML = e.key;
		document.querySelector('#guess').innerHTML = guLet;
	}

	document.onkeydown = userInput;
