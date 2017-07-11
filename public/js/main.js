"use strict;"
//variables:
var game = {
	playing: false,
	round: 1
}
var simon = '';
var player = '';

//Event Listeners
$(".button").click(function(){
	var button = $(this).data("button");

	if (button == "start" && !game.playing) {
		game.playing = true;
		console.log("Playing: " + game.playing);
		simonGenerator();
		console.log("Simon: " + simon);
		console.log("Round: " + game.round);
	} else if (!isNaN(button) && game.playing){
		player += button;
		console.log("Player: " + player);
		gamePlay();
	}
});

//Simon sequence generator
function simonGenerator(){
	var randomNumber = Math.floor(Math.random() * 4 + 1);
	simon += randomNumber.toString();
};

//Main Game loop:

	//Start w/ Simon sequence:
function gamePlay(){
	if (player.length == simon.length && player[game.round - 1] != simon[game.round-1]){
		game.playing = false;
		simon = '';
		player = '';
		game.round = 1;
		console.log("you lose");
	} else if (player.length < simon.length){
		for (i = 0; i < player.length; i++){
			if (player[i] != simon[i]){
				game.playing == false;
				console.log("you lose!");
			}
		}
	} else {
		player = "";
		simonGenerator();
		console.log("Simon " + simon);
		game.round++;
		console.log("Round: " + game.round);
	}
}

		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
