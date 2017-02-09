var word = ["RickAndMorty", "TheWalkingDead", "Batman", "Superman", "Flash", "HarryPotter", "Robocop", "StarWars", "StarTrek", "HarleyQuinn", "Deadpool", "BackToTheFuture"];
var wins = 0;
var lives = 15;
var guessed;
var displayWord = "";
var randWord;
var randNum;

function loadFunction() {
	randNum = Math.floor(Math.random()*10);
	randWord = word[randNum];
	wordHider(randWord);
	document.getElementById('timesWon').innerHTML = wins.toString();
	document.getElementById('randomWord').innerHTML = displayWord;
	document.getElementById('userGuesses').innerHTML = randWord.length;
	document.getElementById('userGuessed').innerHTML = randWord;
	main();
	//var userText = document.getElementById("timesWon");
	//document.onkeyup = function() {
	//userText.textContent = event.key;
	//displayWord= event.key;
	//String.event.key.fromCharCode(event.key).toLowerCase()
	//}
}

function wordHider(x) {
	for (var i = 0; i < randWord.length; i++) {
		displayWord += "_ ";
	}
}

function main() {
	var wins = document.getElementById ("timesWon");
	var lives = document.getElementById ("userGuesses");
	var guessed = document.getElementById ("userGuessed");
	document.onkeyup=function(){
		while(lives > 0) {
			if (randWord.indexOf() > -1) {
				alert("You Guessed It");
			}
		
		}
	}
}

function GetIndex(val, e) {
	alert(val.toLowerCase().indexOf(String.fromCharCode(e.keyCode).toLowerCase()));
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}