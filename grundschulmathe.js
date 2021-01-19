//Aufgabe B

//Zufallszahl generieren
function generateRandomNum() {
    return Math.floor(Math.random() * 21);
}

function addition(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    var solution = num1 + num2;
    var userNum = parseInt(prompt("Wieviel ist " + num1 + " + " + num2 + " ?"), 10);
    
    if (userNum === solution) {
        alert("Richtig!");
    }
    else {
        alert("Falsch!");
    }
}

addition();