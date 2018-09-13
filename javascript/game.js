var nameArr = ["johnWayne", "samElliot", "chuckConners", "clintEastwood"];
var picsArr = ["wayne.jpg", "elliot.jpg", "connors.jpg", "eastwood.jpg"];
var hintArr = ["A native of Southern California commonly known as \"Duke\", this actor starred in the motion pictures True Grit (1969), El Darado (1966), and The Alamo (1960).",
	"One of his first appearances was in Butch Cassidy and the Sundance Kid (1969). This actor had leading roles in the films Tombstone(1993), The Shadow Riders(1982), and Ghost Rider (2007).",
	"Most recognized for his leading role in the series The Rifleman (1958-63). This actor was also a professional baseball and basketball player.",
	"An iconic hollywood gunslinger and director, this actor rose to fame with his part in the tv series Rawhide (1959-63). Starring in The Good, the Bad and the ungly (1966) and The Outlaw Josey Wales (1976), this actor solidified his legendary status by directing and starring in more recent box office hits."]

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
	// console.log(correctLetters);
	// console.log("im here in status");
	if(correctLetters.length === nameArr[rounds].length){
		// console.log("letter pushed " + correctLetters);
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
		$(".hides").hide();
		$("#playAgain").hide();
		$("#winner").show();
		// $(".rowinfo").show();
		document.onkeyup = null;
	}else if( total == 4){
		reset();
		$(".hides").hide();
		$("#playAgain").hide();
		$("#loser").show();
		$("#wins").text(wins);
		document.onkeyup = null;
	}
}

function include(letter){
	// check if user has already guessed letter
	if(missedArr.includes(letter) || correctLetters.includes(letter)){
		$("#info").text("Already guessed that one.");
	// check if letter is there
	}else if(nameArr[rounds].toLowerCase().includes(letter)){
	 	$("#info").text("Its there.");
	 	// call function to print letter to screen
	 	names(letter);
	 	// find how many times letter is in name and push to correct array
	 	for (var i = 0; i < nameArr[rounds].toLowerCase().split(letter).length-1; i++) {
	 		// console.log("im here being pushed");
	 		correctLetters.push(letter);
	 	}
	// if letter isn't in name
	}else{
		$("#info").text("Its not there.");
	 	$("#incorrect").append(letter + " ");
	 	// push to missed array
	 	missedArr.push(letter);
	 	$("#missedL").show();
	}
}

function names(userKey){
	// creates an array of the current name
	let letters = Array.from(nameArr[rounds]);
	// holds the index of the beginning of the last name
	let plusTwo = 0;
	// holds the first letter of the last name
	let capitalLetter = '';

	letters.forEach(function(letter,index){
		// finds first letter of last name and stores its index and value
		if(letter.toUpperCase() === letter){
			plusTwo = letters.indexOf(letter);
			capitalLetter = letter;
		}
	})

	// create an array of the first name
	lastnameArr = letters.slice(plusTwo,letters.length);
	// create an array of the last name
	firstnameArr = letters.slice(0, plusTwo);

	// this holds the nuber of times a key is in the array
	let firstArrHolder = 0;
	let lastArrHolder = 0;

	// take the first name array and create a string
	fNameCheckString = firstnameArr.toString();
	// count the number of times the userKey is in the array
	fNumDuplicates = fNameCheckString.split(userKey).length-1;

	// take the last name array and create a string
	lNameCheckString = lastnameArr.toString();
	// count the number of times userKey is in the array
	lNumDuplicates = lNameCheckString.split(userKey).length-1;

	console.log(fNumDuplicates);

	letters.forEach(function(letter,index){

		// increments index for span id
		index++;
		
		// when the userKey matches the loop key and it is in the first name array and it has not been printed more times that it occures in the array
		// print to screen in correct span
		if(userKey == letter && firstnameArr.includes(userKey) && firstArrHolder < fNumDuplicates){
			// checks if letter is first letter of first name
			if(userKey == firstnameArr[0] && firstArrHolder < 1){
				$("#" + index).text(userKey.toUpperCase());
				firstArrHolder++;
			}else{
				// prints to screen
				$("#" + index).text(userKey);
				// increments hold count so we know how many time it had been printed
				firstArrHolder++;
				// console.log("adding letter to first name");
			}
			
		}

		// when the userKey matches the loop key and it is in the first name array and it has not been printed more times that it occures in the array
		// print to screen in correct span
		else if(userKey == letter && lastnameArr.includes(userKey) && lastArrHolder < lNumDuplicates && firstArrHolder <= fNumDuplicates){
			// add an extra space to index to account for the - in between names
			let spaceIndex = index + 1;
			// prints to screen
			$("#" + spaceIndex).text(userKey);
			// increments hold count so we know how many time it had been printed
			lastArrHolder++;
			// console.log("adding letter to last name");
		}
		
		else if (userKey.toUpperCase() == letter){
			console.log("upper case last name");
			let spaceIndex = index + 1;
			$("#" + spaceIndex).text(userKey.toUpperCase());
		}
	})
}


function hint(){

 	$("#hint").text(hintArr[rounds]);
}

function display(){
	$("#winCount").text(wins);
	$("#lossCount").text(losses);
	// display current characters image
	$("#actorPics").attr("src","assets/images/" + picsArr[rounds]);
	// creates array of current name
	var letters = Array.from(nameArr[rounds]);
	// create index starting at one
	let index = 1;
	letters.forEach(function(letter){
		
		// if letter is the first letter of last name place a - before placeholder _
		if(letter === letter.toUpperCase()){
			$("#" + index).text(" - ");
			// console.log("space uppercase index " + index);
			index++;
			$("#" + index).text("_ ");
			// console.log(letter + " uppercase index " + index);
			index++;
		// if not the first letter of last name place _ in indexed position
		}else{
			$("#" + index).text("_ ");
			// console.log(letter + " not uppercase index " + index);
			index++;
		}
	});

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