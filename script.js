var numberBox = document.getElementsByClassName("number");
var startBtn = document.getElementsByClassName("startBtn")[0];
var resetBtn = document.getElementsByClassName("resetBtn")[0];
var number = [];

function initial() {
	for (var i = 0; i < 10; i++) {
		number[i] = i+1;
	}
	number.sort(function() {
		return Math.random() *  2 - 1;
	});
	for (var i = 0; i < numberBox.length; i++) {
		numberBox[i].innerText = number[i];
		numberBox[i].style.left = (i * 45) + "px";
	}
}

function resetNumber() {
	number.sort(function() {
		return Math.random() *  2 - 1;
	});
	for (var i = 0; i < numberBox.length; i++) {
		numberBox[i].innerText = number[i];
	}
}

window.onload = function() {
	initial();
	resetBtn.addEventListener("click", resetNumber);
}