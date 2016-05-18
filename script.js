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
	startBtn.setAttribute("disabled", "disabled");
	resetBtn.setAttribute("disabled", "disabled");
	continueSort(posI, posJ);
}

function continueSort(posI, posJ) {
	if (posJ == posI) {
		posJ = number.length-1;
		posI++;
	}
	if (posI == number.length-1) {
		pointerI.style.visibility = "hidden";
		pointerJ.style.visibility = "hidden";
		startBtn.removeAttribute("disabled");
		resetBtn.removeAttribute("disabled");
		return;
	}
	pointerI.style.left = (15 + posI * 45) + "px";
	pointerJ.style.left = (15 + posJ * 45) + "px";
	// for (var k = 0; k < numberBox.length; k++) {
	// 	if (numberBox[k].style.left == ((j - 1) * 45) + "px") {
	// 		var leftBox = numberBox[k];
	// 	}
	// 	if (numberBox[k].style.left == (j * 45) + "px") {
	// 		var rightBox = numberBox[k];
	// 	}
	// }
	if (number[posJ-1] >= number[posJ]) {
		var temp = number[posJ];
		number[posJ] = number[posJ-1];
		number[posJ-1] = temp;
		for (var k = 0; k < numberBox.length; k++) {
			if (numberBox[k].style.left == ((posJ - 1) * 45) + "px") {
				var leftBox = numberBox[k];
			}
			if (numberBox[k].style.left == (posJ * 45) + "px") {
				var rightBox = numberBox[k];
			}
		}	
		var times = 45;
		var count = 1;
		var left = parseInt(leftBox.style.left);
		var right = parseInt(rightBox.style.left);
		leftBox.classList.add("active");
		rightBox.classList.add("active");
		var move = setInterval((function(leftBox, rightBox, left, right) {
			return function() {
				leftBox.style.left = (left + count) + "px";
				rightBox.style.left = (right - count) + "px";
				count++;
				if (count > times) {
					leftBox.classList.remove("active");
					rightBox.classList.remove("active");
					clearInterval(move);
				}
			};
		})(leftBox, rightBox, left, right), 50);
		var nextMove = setTimeout(function() {
			continueSort(posI, posJ-1);
		}, 2500);
		return;
	} else {
		var nextMove = setTimeout(function() {
			continueSort(posI, posJ-1);
		}, 500);
		return;
	}
}

window.onload = function() {
	initial();
	resetBtn.addEventListener("click", resetNumber);
	startBtn.addEventListener("click", bubbleSort);
}