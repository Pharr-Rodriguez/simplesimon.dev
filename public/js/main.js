"use strict;"
//variables:
var game = {
	playing: false,
	round: 1
}
var simon = '';
var player = '';

//Event Listeners
$(".button").mousedown(function(){
	var button = $(this).data("button");
	if (!isNaN(button)){
		$(this).css({opacity: .7});
	}
})

$(".button").mouseup(function(){
	var button = $(this).data("button");


	if (button == "start" && !game.playing) {
		game.playing = true;
		console.log("Playing: " + game.playing);
		simonGenerator();
		setTimeout(animation, 400);
		console.log("Simon: " + simon);
		console.log("Round: " + game.round);
	} else if (!isNaN(button) && game.playing){
		// $('.button').mousedown(function(){
		// 	$(this).css({opacity: .7})
		// })
		// $('.button').mouseup(function(){
			$(this).css({opacity: 1})
			player += button;
			console.log("Player: " + player);
			gamePlay();
		// })
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
		setTimeout(animation, 400);
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
	var sequence = simon;
	var i = 0
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
					}, 700 * i);
			})(i);
			i++;
	}
}

// function buttonClick(){
// 	$('.button').mousedown(function(){
// 		$(this).css({opacity: .7})
// 	})
// }
		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
