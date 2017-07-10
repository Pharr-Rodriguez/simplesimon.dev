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
		// simonGenerator();
	} else if (!isNaN(button) && game.playing){
		player += button;
	}
})

//Simon sequence generator


//Main Game loop:

	//Start w/ Simon sequence:

	//While (correct): check if player input is correct (for loop)

		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
