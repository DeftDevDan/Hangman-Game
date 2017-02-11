var word = ["Rick And Morty", "The Walking Dead", "Batman", "Superman", "Flash", "Harry Potter", "Robocop", "Star Wars", "Star Trek", "Harley Quinn", "Deadpool", "Back To The Future", "Doctor Who"];
var wins = 0;
var lives;
var guessed = "";
var displayWord = "";
var randWord;
var randNum;

function loadFunction() {
	$("#winner").hide();
	$("#game").show();
	$("#top").show();
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
	$("#lootcrate").attr("src", 'assets/images/box0.png');
	if (lives > 0) {
		if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)) {
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
		lose();
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
		win();
	}
}

function win() {
	document.getElementById('winText').innerHTML = "Congratulations! You won!";
	$("#winPic").attr("src", 'assets/images/box'+(randNum+1)+'.png');
	$("#game").hide();
	$("#winner").show();
	$("#top").hide();
}

function lose() {
	wins=0;
	document.getElementById('winText').innerHTML = "LOSER!";
	$("#winPic").attr("src", 'assets/images/boxLose.png');
	$("#game").hide();
	$("#winner").show();
	$("#top").hide();
}