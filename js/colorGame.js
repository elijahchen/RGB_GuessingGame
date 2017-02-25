var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
] //temp value, testing

var squares = document.querySelectorAll(".square"); //Finds the class and stores it
var pickColor = pickedColor(); //Function to determine correct color
var colorDisplay = document.getElementById("colorDisplay"); //RGB header color
var messageDisplay = document.querySelector("#message"); //Visual feedback: correct||wrong

colorDisplay.textContent = pickColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.background = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked squares
		var clickedColor = this.style.background;
		//Compare color to pickedColor
		if(clickedColor === pickColor){
			messageDisplay.textContent = "Correct!";
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

function pickedColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}