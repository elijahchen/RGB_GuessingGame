var numOfSquares = 6;
var colors = [];
var pickedColor;//Function to determine correct color
var squares = document.querySelectorAll(".square"); //Finds the class and stores it
var colorDisplay = document.getElementById("colorDisplay"); //RGB header color
var messageDisplay = document.querySelector("#message"); //Visual feedback: correct||wrong
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init(); //Allows a cleaner code functionality

function init() {

    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function () {
            //Grab color of clicked squares
            var clickedColor = this.style.background;
            //Compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again?";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

colorDisplay.textContent = pickedColor;

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numOfSquares);
    //Picked a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //Loop through all squares and change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i = 0; i < num; i++) {
        //Get random color and push to array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

