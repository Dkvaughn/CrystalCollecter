//  Variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/bluerupee.jpg", "./assets/images/greenrupee.jpg", "./assets/images/purplerupee.jpg", "./assets/images/redrupee.jpg"];

// Functions

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
	}

	function resetRupees () {
		for (var i = 0; i < images.length; i++) {
			var rupee = $("<img>");
			rupee.addClass("rupee");
			rupee.attr("src", images[i]);
			rupee.attr("value", (Math.floor(Math.random() * 12) + 1));
			rupee.attr("height", "100");
			$(".rupee-images").append(rupee);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".rupee-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetRupees ();
	}



    // Inital Page Set Up
    

	randomTargetNumber();
	resetHTML ();
	resetRupees ();

// Click Functions

	function rupeeClick () {

		//first value return to html
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};


	$(document).on("click", ".rupee", rupeeClick);