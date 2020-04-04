// Variables
var colors = [];
var numSquares = 6;
var trueColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function (){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			console.log(modeButtons[0] + "selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
    }
}

function setupSquares(){
	for(var i = 0; i <squares.length; i++){
	// Add click listeners to squares
		squares[i].addEventListener("click", function(){
		// grb color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to trueColor
			if(clickedColor === trueColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}	
	  	});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	trueColor = trueColorPick();
	//  change colorDisplay to match picked color
	colorDisplay.textContent = trueColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//  change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//  Loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each colot to match given color
		squares[i].style.backgroundColor = color;
	}
};

function trueColorPick(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add random colors to array
	for(var i = 0; i < num; i++){
		// get random color and put into the array
		arr.push(randomColor());
	}
	// return the array
	return arr;
};

function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random()*256)
	// pick a green from 0 - 255
	var g = Math.floor(Math.random()*256)
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r + ", " + g + ", " + b +")";

}