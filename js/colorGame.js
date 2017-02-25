var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square"); //Finds the class and stores it
var pickedColor = pickColor(); //Function to determine correct color
var colorDisplay = document.getElementById("colorDisplay"); //RGB header color
var messageDisplay = document.querySelector("#message"); //Visual feedback: correct||wrong

var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.background = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked squares
		var clickedColor = this.style.background;
		//Compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.background = pickedColor;
			changeColors(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//Loop through all squares and change each color to match given color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//Repeat num times
	for(var i = 0; i < num; i++){
		//Get random color and push to array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}