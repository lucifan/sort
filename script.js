var numberBox = document.getElementsByClassName("number");

function setPosition() {
	for (var i = 0; i < numberBox.length; i++) {
		numberBox[i].style.left = (i * 45) + "px";
	}
}

window.onload = function() {
	setPosition();
}