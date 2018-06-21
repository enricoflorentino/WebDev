
// First Button Logic
var purp = document.querySelector("#changebackground");
var ispurp = false;


purp.addEventListener("click", function(){

	if (!ispurp) {
		document.body.style.background = "purple";
	}
	else {
		document.body.style.background = "white";
	}

	ispurp = !ispurp;
});	


// Score Keeper Logic

var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var rebutton = document.querySelector("#re");
var p1scoretext = document.querySelector("#p1score");
var p2scoretext = document.querySelector("#p2score");
var maxscore = document.querySelector("input");
var oneline = document.querySelector("h3");

var p1score = 0;
var p2score = 0;

var winningscore = 5;
var gameover = false;


p1button.addEventListener("click", function(){
	if (!gameover)
	{
		p1score++;
		updatescore();
		if(p1score == winningscore) {
			gameover = true;
			p1scoretext.classList.add("winner");
		}
		
	}
});

p2button.addEventListener("click", function(){
	if (!gameover)
	{
		p2score++;
		updatescore();
		if(p2score == winningscore) {
			gameover = true;
			p2scoretext.classList.add("winner");
		}
		
	}
});

rebutton.addEventListener("click", reset);

maxscore.addEventListener("change", function() {
	oneline.textContent = "Playing to: " + maxscore.value;
	winningscore = Number(maxscore.value);
	reset();

});

function reset(){
	p1score = 0;
	p2score = 0;
	updatescore();
	gameover = false;
	p1scoretext.classList.remove("winner");
	p2scoretext.classList.remove("winner");
};


function updatescore(){
	p1scoretext.textContent = p1score;
	p2scoretext.textContent = p2score;
}
