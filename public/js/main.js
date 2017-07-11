"use strict;"
//variables:
var game = {
	playing: false,
	round: 0
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
		console.log("Round: " + game.round + 1);
	} else if (!isNaN(button) && game.playing){
		player += button;
		console.log(player);
	}
});

//Simon sequence generator
function simonGenerator(){
	var randomNumber = Math.floor(Math.random() * 4 + 1);
	simon += randomNumber.toString();
};

//Main Game loop:

	//Start w/ Simon sequence:
do {
	if (player.length == simon.length && player[game.round] != simon[game.round]){
		game.playing = false;
		console.log("you lose");
	} else if (player.length == simon.length && player[game.round] == simon[game.round]){
		simonGenerator();
		console.log(simon);
		game.round++;
		console.log("Round: " + game.round);
	}
} while(game.playing == true && simon.length > 0);
	//While (correct): check if player input is correct (for loop)
	// for (i = 0; i < player.length; i++){
	// 	if (player[i] != simon[i]){
	// 		game.playing == false;
	// 		console.log("you lose!");
	// 	}
	// }



		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
