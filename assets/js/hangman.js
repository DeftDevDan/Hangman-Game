var word = ["RickAndMorty", "TheWalkingDead", "Batman", "Superman", "Flash", "HarryPotter", "Robocop", "StarWars", "StarTrek", "HarleyQuinn", "Deadpool", "BackToTheFuture"];
var wins = 0;
var lives = 15;
var guessed = "";
var displayWord = "";
var randWord;
var randNum;

function loadFunction() {
	randNum = Math.floor(Math.random()*10);
	randWord = word[randNum];
	displayWord = "";
	lives = 15;
	guessed= "";
	wordHider(randWord);
	document.getElementById('timesWon').innerHTML = wins.toString();
	document.getElementById('randomWord').innerHTML = displayWord;
	document.getElementById('userGuesses').innerHTML = lives;
	document.getElementById('userGuessed').innerHTML = guessed;
};

function wordHider(x) {
	for (var i = 0; i < randWord.length; i++) {
		displayWord += "-";
	}
};

document.onkeyup=function() {
	if (lives > 0) {
		if (guessed.toLowerCase().indexOf(event.key) > -1) {
			
		} else if (randWord.toLowerCase().indexOf(event.key) > -1) {
			replace();
		} else {
			guessed += event.key + " ";
			document.getElementById('userGuesses').innerHTML = guessed;
			lives -= 1;
			document.getElementById('userGuessed').innerHTML = lives;
		}
	} else {
		alert("Sorry, you lost. The word was: " + randWord);
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