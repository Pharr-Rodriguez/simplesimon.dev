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
		animation();
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
		lose();
		// game.playing = false;
		// simon = '';
		// player = '';
		// game.round = 1;
		// console.log("you lose");
	} else if (player.length < simon.length){
		for (i = 0; i < player.length; i++){
			if (player[i] != simon[i]){
				lose();
				// game.playing == false;
				// simon = "";
				// player = "";
				// game.round = 1;
				// console.log("you lose!");
			}
		}
	} else {
		player = "";
		simonGenerator();
		animation();
		console.log("Simon " + simon);
		game.round++;
		console.log("Round: " + game.round);
	}
}

function lose(){
	game.playing = false;
	simon = "";
	player = "";
	game.round = 1;
	console.log("you lose!");
}

function animation(){
	sequence = simon.split("");
	sequence.forEach(function(element){
		$()
		// setTimeout(function(){
		// 	switch (element) {
		// 		case "1":
		// 			$('#green').animate({"background-color":"lightgreen"}, "slow")
		// 			console.log('green');
		// 			break;
		// 		case "2":
		// 			$('#yellow').animate({"background-color":"lightyellow"}, "slow")
		// 			console.log('yellow');
		// 			break;
		// 		case "3":
		// 			$('#red').animate({"background-color":"lightred"}, "slow")
		// 			console.log('red');
		// 			break;
		// 		case "4":
		// 			$('#blue').animate({"background-color":"lightblue"}, "slow")
		// 			console.log('blue');
		// 			break;
		// 		default:
		//
		// 	}
		// }, 1000)
	})
}
		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
