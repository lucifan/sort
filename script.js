var numberBox = document.getElementsByClassName("number");
var pointerI = document.getElementsByClassName("pointer-i")[0];
var pointerJ = document.getElementsByClassName("pointer-j")[0];
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

function bubbleSort() {
	var posI = 0;
	var posJ = number.length-1;
	pointerI.style.visibility = "visible";
	pointerJ.style.visibility = "visible";
	continueSort(posI, posJ);
}

function continueSort(posI, posJ) {
	var i = posI;
	var j = posJ;
	for (; i < number.length; i++) {
		for (; j > i; j--) {
			pointerI.style.left = (15 + i * 45) + "px";
			pointerJ.style.left = (15 + j * 45) + "px";
			for (var k = 0; k < numberBox.length; k++) {
				if (numberBox[k].style.left == ((j - 1) * 45) + "px") {
					var leftBox = numberBox[k];
				}
				if (numberBox[k].style.left == (j * 45) + "px") {
					var rightBox = numberBox[k];
				}
			}
			if (parseInt(leftBox.innerText) >= parseInt(rightBox.innerText)) {
				var times = 45;
				var count = 1;
				var left = parseInt(leftBox.style.left);
				var right = parseInt(rightBox.style.left);
				var move = setInterval((function(leftBox, rightBox, left, right) {
					return function() {
						leftBox.style.left = (left + count) + "px";
						rightBox.style.left = (right - count) + "px";
						count++;
						if (count > times) {
							clearInterval(move);
						}
					};
				})(leftBox, rightBox, left, right), 50);
				var nextMove = setTimeout(function() {
					continueSort(i, j);
				}, 3000);
				return;
			}
		}
		j = number.length - 1;
	}
}

window.onload = function() {
	initial();
	resetBtn.addEventListener("click", resetNumber);
	startBtn.addEventListener("click", bubbleSort);
}