// Author: Enrico Florentino
// date: 2018-06-25


// declaring number of squares active

var numSq = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var colorDisplay = document.querySelector("#colordisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("#title");
var reset = document.querySelector("#reset");
var modeB = document.querySelectorAll(".mode");

for (var i = 0; i < modeB.length; i++) {
	modeB[i].addEventListener("click", function() {
		modeB[0].classList.remove("selected");
		modeB[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent == "Easy") {
			numSq = 3;
		} else {
			numSq = 6;
		}
		resetGame();
	})
}

for (var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			title.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});
}


// Reset selection
reset.addEventListener("click", function() {
	resetGame();
})

function changeColors(color) {
	for (var i = 0; squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return Math.floor(Math.random() * colors.length);
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {

	var randred = Math.floor(Math.random()*256);
	var randgreen = Math.floor(Math.random()*256);
	var randblue = Math.floor(Math.random()*256);
	return "rgb(" + randred + ", " + randgreen + ", " + randblue + ")";
}


function resetGame() {
	colors = generateRandomColors(numSq);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {

		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	title.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
}