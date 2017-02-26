var colors = generateRandomColors(numOfSquares);
var numOfSquares = 6;
var squares = document.querySelectorAll(".square"); //Finds the class and stores it
var pickedColor = pickColor(); //Function to determine correct color
var colorDisplay = document.getElementById("colorDisplay"); //RGB header color
var messageDisplay = document.querySelector("#message"); //Visual feedback: correct||wrong
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    //Generate all new colors
    colors = generateRandomColors(numOfSquares);
    //Picked a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.background = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked squares
        var clickedColor = this.style.background;
        //Compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

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

