"use strict;"
//variables:
var game = {
	playing: false
}
var simon = '';
var player = '';

//Event Listeners
$(".button").click(function(){
	var button = $(this).data("button");

	if (button == "start" && !game.playing) {
		game.playing = true;
		simonGenerator();
	} else if (!isNaN(button) && game.playing){
		player += button;
	}
});

//Simon sequence generator
function simonGenerator(){
	var randomNumber = Math.floor(Math.random() * 4 + 1);
	simon += randomNumber.toString();
};

//Main Game loop:

	//Start w/ Simon sequence:

	//While (correct): check if player input is correct (for loop)
	for (i = 0; i < player.length; i++){
		if (player[i] != simon[i]){
			game.playing == false;
		}
	}

		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
