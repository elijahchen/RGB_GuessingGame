var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
] //temp value, testing

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3]; //temp value, testing
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.background = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked squares
		var clickedColor = this.style.background;
		//Compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("Correct");
		} else {
			alert("Wrong");
		}
	});
}