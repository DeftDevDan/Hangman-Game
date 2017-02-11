var word = ["Rick And Morty", "The Walking Dead", "Batman", "Superman", "Flash", "Harry Potter", "Robocop", "Star Wars", "Star Trek", "Harley Quinn", "Deadpool", "Back To The Future", "Doctor Who"];
var wins = 0;
var lives;
var guessed = "";
var displayWord = "";
var randWord;
var randNum;

function loadFunction() {
	randNum = Math.floor(Math.random()*13);
	randWord = word[randNum];
	displayWord = "";
	lives = 9;
	guessed= "";
	wordHider(randWord);
	document.getElementById('timesWon').innerHTML = wins.toString();
	document.getElementById('randomWord').innerHTML = displayWord;
	document.getElementById('userGuesses').innerHTML = lives;
	document.getElementById('userGuessed').innerHTML = guessed;
};

function wordHider(x) {
	for (var i = 0; i < randWord.length; i++) {
		if (randWord.toLowerCase().charAt(i) === ' ') {
			displayWord += " ";
		} else {
			displayWord += "-";
		}
	}
};

document.onkeyup=function() {
	if (lives > 0) {
		if ((event.keyCode > 64 && event.keyCode) < 91 || (event.keyCode > 96 && event.keyCode < 123)) {
			if (guessed.toLowerCase().indexOf(event.key) > -1) {
			
			} else if (randWord.toLowerCase().indexOf(event.key) > -1) {
			replace();
			} else {
			guessed += event.key + " ";
			document.getElementById('userGuesses').innerHTML = lives;
			lives -= 1;
			document.getElementById('userGuessed').innerHTML = guessed;
			}
		}
	} else {
		alert("Sorry, you lost. The word was: " + randWord);
		wins = 0;
		win();
		loadFunction();
	}
};

function replace() {
	for (var i = 0; i < randWord.length; i++) {
		if (randWord.toLowerCase().charAt(i) === event.key) {
			displayWord = displayWord.substr(0, i) + randWord.charAt(i) + displayWord.substr(i+1);
		}
	}
	document.getElementById('randomWord').innerHTML = displayWord;
	if (randWord.toLowerCase() == displayWord.toLowerCase()) {
		wins += 1;
		document.getElementById('timesWon').innerHTML = wins.toString();
		alert("Congrats! You won! The word was: " + randWord);
		loadFunction();
	}
}

function win() {
	var img = document.createElement("IMG");
	img.src=["../images/Placehold.png", "../images/Placehold.png", "../images/Placehold.png", "../images/StarWars.png", "../images/SupermanBox.png", "../images/FlashBox.png", "../images/Placehold.png", "../images/Placehold.png", "../images/StarWars.png", "../images/Placehold.png", "../images/Placehold.png", "../images/Placehold.png", "../images/Placehold.png", "../images/DoctorWho.png"];
	var oldImg = document.getElement('lootcrate');
	document.getElementById('game').replaceChild(img[randNum], oldImg);
}