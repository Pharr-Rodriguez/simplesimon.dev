"use strict;"
//variables:
var game = {
	playing: false,
	round: 1
}
var simon = '';
var player = '';
var context = new AudioContext();
// var oscFail = context.createOscillator();
// oscFail.start();
// var failFreq;
// $('.button').click(function(){failFreq =  $(this).data("frequency")});
// oscFail
// oscFail.frequency.value = parseFloat(failFreq);

// var osc = context.createOscillator()
// osc.start();

//Event Listeners
$(".button").mousedown(function(){
	if (game.playing){
		var button = $(this).data("button");
		var freq = $(this).data("frequency");
		// console.log(freq);
		if (!isNaN(button)){
			$(this).css({opacity: .7});
			makeSound(freq);
		}
	}
})

$(".button").click(function(){
	var button = $(this).data("button");
	$(this).css({opacity: 1})

	if (button == "start" && !game.playing) {
		game.playing = true;
		$('#roundTitle').text("round " + game.round)
		// console.log("Playing: " + game.playing);
		simonGenerator();
		setTimeout(animation, 400);
		// console.log("Simon: " + simon);
		// console.log("Round: " + game.round);
	} else if (!isNaN(button) && game.playing){
		// $('.button').mousedown(function(){
		// 	$(this).css({opacity: .7})
		// })
		// $('.button').mouseup(function(){
			// $(this).css({opacity: 1})
			player += button;
			// console.log("Player: " + player);
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
		// console.log("Simon " + simon);
		game.round++;
		$('#roundTitle').text("round " + game.round)
		// console.log("Round: " + game.round);
	}
}

function lose() {
	game.playing = false;
	$('#roundTitle').text("press start to try again");
	// failSound();
	simon = "";
	player = "";
	game.round = 1;
	// console.log("you lose!");
}

function animation(){
	var sequence = simon;
	var i = 0
	while (i < sequence.length){
		(function(i){
			setTimeout(function(){
				freq = $(".button-" + sequence[i]).data("frequency");
				makeSound(freq);
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

function makeSound(freq){
	var osc = context.createOscillator()
	osc.start();
	osc.frequency.value = freq;
	osc.type = "square";
	osc.connect(context.destination);
    setTimeout(function(){
	  osc.disconnect();
  	}, 400)
}

// function failSound(freq){
// 	// var osc = context.createOscillator()
// 	// var freq = $('.button-' + player[player.length - 1]).data("frequency");
// 	// oscFail.start();
// 	// oscFail.frequency.value = freq/3;
// 	oscFail.frequency.value = failFreq;
// 	oscFail.type = "square";
// 	oscFail.connect(context.destination);
// 	oscFail.frequency.value = freq/3;
// 	setTimeout(function(){
// 	  oscFail.disconnect();
//   }, 1000)
// }

(function(){
	var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	var sequence = []
	$(document).keyup(function(event){
		// console.log(event.keyCode);
		if (event.keyCode == konami[sequence.length]){
			sequence.push(konami[sequence.length]);
			if (sequence.length == 10){
				$('#gameTitle').html("<h3 id='gameTitle' class='vectro'><span class='vectro-body'>simple simon</span><span class='vectro-red'>I</span><span class='vectro-green'>I</span><span class='vectro-blue'>I</span></h3>");
				$('.vectro-body').css({color: '#ecc'});
				$('html').css({'background-image':'url("img/retro.png")', 'background-color': '#fff'});
				//('#container-solid').css({'background-color':'#ffe'});

				// $('#gameTitle').html('<div id="wrapper"><div class="future-cop"><h3 class="future">Simple</h3><h1 class="cop">Simon</h1></div></div>');
			}
		} else {
			sequence = [];
		}
	})
})()


// function buttonClick(){
// 	$('.button').mousedown(function(){
// 		$(this).css({opacity: .7})
// 	})
// }
		//Add to Simon's sequence

		//Function which translates Simon's sequence into animations

//Animation functions
