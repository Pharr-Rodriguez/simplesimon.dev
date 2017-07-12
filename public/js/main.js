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
	if (player.length == simon.length &&
		player[game.round - 1] != simon[game.round-1]){
		lose();
	} else if (player.length < simon.length){
		for (i = 0; i < player.length; i++){
			if (player[i] != simon[i]){
				lose();
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

function lose() {
	game.playing = false;
	simon = "";
	player = "";
	game.round = 1;
	console.log("you lose!");
}

function animation(){
	sequence = simon.split("");
	var i = 0
	// sequence.forEach(function(element, index){
	// for (var i = 0; i < sequence.length; i++){
	while (i < sequence.length){
		(function(i){
			setTimeout(function(){
				$(".button-" + sequence[i])
					.animate({
							opacity: .7
						}, 200)
						.animate({
							opacity: 1
						}, 200)
					}, 500 * i);
			})(i);
			i++;
		}


	// }
		// setTimeout(function(){
		// 	switch (element) {
		// 		case "1":
		// 			$('#green').animate({"background-color":"lightgreen"}, "slow");
		// 			$('green').animate({"background-color":"green"});
		// 			console.log('green');
		// 			break;
		// 		case "2":
		// 			$('#red').animate({"background-color":"lightyellow"}, "slow");
		// 			$('red').animate({"background-color":"red"});
		// 			console.log('red');
		// 			break;
		// 		case "3":
		// 			$('#yellow').animate({"background-color":"lightyellow"}, "slow");
		// 			$('yellow').animate({"background-color":"yellow"});
		// 			console.log('yellow');
		// 			break;
		// 		case "4":
		// 			$('#blue').animate({"background-color":"lightblue"}, "slow");
		// 			$('blue').animate({"background-color":"blue"});
		// 			console.log('blue');
		// 			break;
		// 		default:
		//
		// 	}
		// }, 1000)
	// })
}
		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
