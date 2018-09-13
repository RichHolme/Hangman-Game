var nameArr = ["johnWayne", "samElliot", "chuckConners", "clintEastwood"];
var picsArr = ["wayne.jpg", "elliot.jpg", "connors.jpg", "eastwood.jpg"];

var missedArr = [];
var correctLetters = [];
var rounds = 0;
var wins = 0;
var losses = 0;
var letter;
var total = 0;

function reset(){
	letterArr = [];
	correctLetters = [];
	missedArr = [];
}

function status(){
	console.log(correctLetters);
	console.log("im here in status");
	if(correctLetters.length === nameArr[rounds].length){
		console.log("letter pushed " + correctLetters);
		$("#info").text("You win!");
		$("#playAgain").text("Next Round");
		$("#playAgain").show();
		reset();
		wins++;
		$("#winCount").text(wins);
		rounds++;
		document.onkeyup = null;
		total++;
		
		
	}else if(missedArr.length === 6){
		$("#info").text("You lost. No tires left.");
		$("#playAgain").text("Next Round");
		$("#playAgain").show();
		reset();
		losses++;
		$("#lossCount").text(losses);
		rounds++;
		document.onkeyup = null;
		total++;
		

    }

    winLoose();
}

function winLoose(){	
    if(wins == 4){
		// $("#info").text("Good job! You won all 4 rounds!");
		reset();

		// $("#hint").empty();
		// // $("span").empty();
		// $("incorrect").empty();
		$(".hides").hide();
		$("#playAgain").hide();
		$("#winner").show();
		// $(".rowinfo").show();
		document.onkeyup = null;
	}else if( total == 4){
		reset();
		// $("#info").text("Nice work. You won " + wins + " out of 4 rounds.");
		// $("#hint").empty();
		// $("#incorrect").empty();
		// // $("span").empty();
		$(".hides").hide();
		$("#playAgain").hide();
		$("#loser").show();
		$("#wins").text(wins);
		document.onkeyup = null;
	}
}

function include(letter){
	// $("#gameStats").show();
	if(missedArr.includes(letter) || correctLetters.includes(letter)){
		$("#info").text("Already guessed that one.");
	}else if(nameArr[rounds].toLowerCase().includes(letter)){
	 	$("#info").text("Its there.");
	 	roundName(rounds, letter);
	 	// correctLetters.push(letter);
	 	console.log("soon to be pushed");
	 	if(nameArr[rounds].toLowerCase().split(letter).length-1 >= 1){
	 		console.log("im here about to be pushed");
	 		// console.log(nameArr[rounds].split(letter));
	 		// console.log(nameArr[rounds].split(letter).length-1);
	 		// console.log("im here");
	 		for (var i = 0; i < nameArr[rounds].toLowerCase().split(letter).length-1; i++) {
	 			console.log("im here being pushed");
	 			correctLetters.push(letter);
	 		}
	 	}
	}else{
		$("#info").text("Its not there.");
	 	$("#incorrect").append(letter + " ");
	 	missedArr.push(letter);
	 	$("#missedL").show();
	}
}

function roundName(rounds, letter){
	if(rounds === 0){
		john(letter);
	}else if(rounds === 1){
		sam(letter);
	}else if(rounds === 2){
		chuck(letter);
	}else if(rounds === 3){
		clint(letter);
	}
}

function john(letter){
	if(letter === "j"){
		$("#1").text("J");
	}else if(letter === "o"){
		$("#2").text(letter);
	}else if(letter === "h"){
		$("#3").text(letter);
	}else if(letter === "n"){
		$("#4").text(letter);
		$("#9").text(letter);
	}else if(letter === "w"){
		$("#5").text(" ");
		$("#6").text("W");
	}else if(letter === "a"){
		$("#7").text(letter);
	}else if(letter === "y"){
		$("#8").text(letter);
	}else if(letter === "e"){
		$("#10").text(letter);
	}
}

function sam(letter){
	if(letter === "s"){
		$("#1").text("S");
	}else if(letter === "a"){
		$("#2").text(letter);
	}else if(letter === "m"){
		$("#3").text(letter);
	}else if(letter === "e"){
		$("#4").text(" ");
		$("#5").text("E");
	}else if(letter === "l"){
		$("#6").text(letter);
		$("#7").text(letter);
	}else if(letter === "i"){
		$("#8").text(letter);
	}else if(letter === "o"){
		$("#9").text(letter);
	}else if(letter === "t"){
		$("#10").text(letter);
	}
}

function chuck(letter){
	if(letter === "c"){
		$("#1").text("C");
		$("#4").text(letter);
		$("#7").text("C");
	}else if(letter === "h"){
		$("#2").text(letter);
	}else if(letter === "u"){
		$("#3").text(letter);
	}else if(letter === "k"){
		$("#5").text(letter);
		$("#6").text(" ");
	}else if(letter === "o"){
		$("#8").text(letter);
	}else if(letter === "n"){
		$("#9").text(letter);
		$("#10").text(letter);
	}else if(letter === "e"){
		$("#11").text(letter);
	}else if(letter === "r"){
		$("#12").text(letter);
	}else if(letter === "s"){
		$("#13").text(letter);
	}
}

function clint(letter){
	if(letter === "c"){
		$("#1").text("C");
	}else if(letter === "l"){
		$("#2").text(letter);
	}else if(letter === "i"){
		$("#3").text(letter);
	}else if(letter === "n"){
		$("#4").text(letter);
	}else if(letter === "t"){
		$("#5").text(letter);
		$("#10").text(letter);
	}else if(letter === "e"){
		$("#6").text(" ");
		$("#7").text("E");
	}else if(letter === "a"){
		$("#8").text(letter);
	}else if(letter === "s"){
		$("#9").text(letter);
	}else if(letter === "w"){
		$("#11").text(letter);
	}else if(letter === "o"){
		$("#12").text(letter);
		$("#13").text(letter);
	}else if(letter === "d"){
		$("#14").text(letter);
	}
}

function hint(){
	switch(rounds) {
    	case 0:
        	$("#hint").text("A native of Southern California commonly known as \"Duke\", this actor starred in the motion pictures True Grit (1969), El Darado (1966), and The Alamo (1960).");
       		break;
    	case 1:
        	$("#hint").text("One of his first appearances was in Butch Cassidy and the Sundance Kid (1969). This actor had leading roles in the films Tombstone(1993), The Shadow Riders(1982), and Ghost Rider (2007).");
        	
        	break;
    	case 2:
        	$("#hint").text("Most recognized for his leading role in the series The Rifleman (1958-63). This actor was also a professional baseball and basketball player.");
        	break;
    	case 3:
    		$("#hint").text("An iconic hollywood gunslinger and director, this actor rose to fame with his part in the tv series Rawhide (1959-63). Starring in The Good, the Bad and the ungly (1966) and The Outlaw Josey Wales (1976), this actor solidified his legendary status by directing and starring in more recent box office hits.");
    		break;
    }
}

function display(){
	$("#winCount").text(wins);
	$("#lossCount").text(losses);
	$("#actorPics").attr("src","assets/images/" + picsArr[rounds]);
	var letters = Array.from(nameArr[rounds]);
	let index = 1;
	letters.forEach(function(letter){
		
		if(letter === letter.toUpperCase()){
			$("#" + index).text(" - ");
			// console.log("space uppercase index " + index);
			index++;
			$("#" + index).text("_ ");
			// console.log(letter + " uppercase index " + index);
			index++;
		}else{
			$("#" + index).text("_ ");
			// console.log(letter + " not uppercase index " + index);
			index++;
		}
	});
	// if(rounds === 0){
		// $("#1").text("_ ")
		// $("#2").text("_ ")
		// $("#3").text("_ ")
		// $("#4").text("_ ")
		// $("#5").text(" - ")
		// $("#6").text("_ ")
		// $("#7").text("_ ")
		// $("#8").text("_ ")
		// $("#9").text("_ ")
		// $("#10").text("_ ")

	// }else if(rounds === 1){
	// 	$("#actorPics").attr("src","assets/images/elliot.jpg");
	// 	$("#1").text("_ ")
	// 	$("#2").text("_ ")
	// 	$("#3").text("_ ")
	// 	$("#4").text(" - ")
	// 	$("#5").text("_ ")
	// 	$("#6").text("_ ")
	// 	$("#7").text("_ ")
	// 	$("#8").text("_ ")
	// 	$("#9").text("_ ")
	// 	$("#10").text("_ ")
	// }if(rounds === 2){
	// 	$("#actorPics").attr("src","assets/images/connors.jpg");
	// 	$("#1").text("_ ")
	// 	$("#2").text("_ ")
	// 	$("#3").text("_ ")
	// 	$("#4").text("_ ")
	// 	$("#5").text("_ ")
	// 	$("#6").text(" - ")
	// 	$("#7").text("_ ")
	// 	$("#8").text("_ ")
	// 	$("#9").text("_ ")
	// 	$("#10").text("_ ")
	// 	$("#11").text("_ ")
	// 	$("#12").text("_ ")
	// 	$("#13").text("_ ")
	// }if(rounds === 3){
	// 	$("#actorPics").attr("src","assets/images/eastwood.jpg");
	// 	$("#1").text("_ ")
	// 	$("#2").text("_ ")
	// 	$("#3").text("_ ")
	// 	$("#4").text("_ ")
	// 	$("#5").text("_ ")
	// 	$("#6").text(" - ")
	// 	$("#7").text("_ ")
	// 	$("#8").text("_ ")
	// 	$("#9").text("_ ")
	// 	$("#10").text("_ ")
	// 	$("#11").text("_ ")
	// 	$("#12").text("_ ")
	// 	$("#13").text("_ ")
	// 	$("#14").text("_ ")
	// }
}

function key() {
	document.onkeyup = function(event){
		letter = event.key;
		include(letter.toLowerCase());
		status();
	}
}

$(document).ready(function() {
	$(".hides").hide();
	$("#winner").hide();
	$("#loser").hide();
    $("#playAgain").click(function(){
        $("span").empty();
        $("#incorrect").empty();
        $("#info").empty();
        $(".hides").show();
        $("#missedL").hide();
        // $("#gameStats").hide();
        $("#play").text("Play");
        $(".instructions").hide();
        $("#playAgain").hide();
        display();
        hint();
        key();
    }); 
});