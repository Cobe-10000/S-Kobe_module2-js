const dice = document.getElementById('dice-btn');

function diceGame() {
	//DICE 1
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "img/" + "Dice-" + randomDice + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
	
	//DICE 2
	var randomDice2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice + randomDice2 == 2) {
		document.querySelector("h1").innerHTML = " Gaming Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 3) {
		document.querySelector("h1").innerHTML = " Enterprise Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 4) {
		document.querySelector("h1").innerHTML = " Consumer Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 5) {
		document.querySelector("h1").innerHTML = " Innovative Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 6) {
		document.querySelector("h1").innerHTML = " Financial Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 7) {
		document.querySelector("h1").innerHTML = " Educational Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 8) {
		document.querySelector("h1").innerHTML = " Health Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 9) {
		document.querySelector("h1").innerHTML = " Agricultural Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 10) {
		document.querySelector("h1").innerHTML = " African Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 11) {
		document.querySelector("h1").innerHTML = " South african Category will win the app awards ";
	}
	else if (randomDice + randomDice2 == 12) {
		document.querySelector("h1").innerHTML = " Huawei Category will win the app awards ";
	}
	dice.innerHTML = "Roll Again"
}