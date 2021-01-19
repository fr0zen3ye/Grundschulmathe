//Aufgabe A
alert("Grundschulmathe");

//Aufgabe B, C, D

//Zufallszahl generieren
function generateRandomNum() {
    return Math.floor(Math.random() * 21);
}
points = 0;

//Addition
function addition(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    var solution = num1 + num2;
    numberOfRuns++;
    var userNum = parseInt(prompt("Wieviel ist " + num1 + " + " + num2 + " ?"), 10);

    if (userNum === solution) {
        points += 1
        alert("Richtige Antwort! " + points + "/5");
        if (numberOfRuns < 5) {
            addition(points, numberOfRuns);
        }
        else if (numberOfRuns === 5) {
            return 0;
        }
    }
    else if (userNum !== solution) {
        alert("Leider Falsch! " + points + "/5");
        if (numberOfRuns < 5) {
            addition(points, numberOfRuns);
        }
        else if (numberOfRuns === 5) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            return 0;
        }

    }

}

addition();