//Aufgabe B

//Zufallszahl generieren
function generateRandomNum() {
    return Math.floor(Math.random() * 21);
}

var numbersOfRuns = 0;

//Addition
function addition(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    numbersOfRuns++;
    var solution = num1 + num2;
    var userNum = parseInt(prompt("Wieviel ist " + num1 + " + " + num2 + " ?"), 10);

    if (userNum === solution && numberOfRuns <= 5) {
        points += 1
        alert("Richtige Antwort! " + points + "/5");

        if (numbersOfRuns < 5) {
            addition(points, numbersOfRuns);
        }
        else if (numbersOfRuns === 5) {
            return 0;
        }
    }
    else if (userNum !== solution && numbersOfRuns <= 5) {
        alert("Leider Falsch! " + points + "/5");
        if (numbersOfRuns < 5) {
            addition(points, numbersOfRuns);
        }
        else if (numbersOfRuns === 5) {
            return 0;
        }
    }

}

addition();