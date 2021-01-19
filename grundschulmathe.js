//Aufgabe A
alert("Grundschulmathe");

//Aufgabe B, C, D, E

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
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            subtraktion();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }
    }
    else if (userNum !== solution) {
        alert("Leider Falsch! " + points + "/5");
        if (numberOfRuns < 5) {
            addition(points, numberOfRuns);
        }
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            subtraktion();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }

    }

}

//Subtraktion

function subtraktion(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    var maxNum = Math.max(num1, num2);
    var minNum = Math.min(num1, num2);
    var solution = maxNum - minNum;
    numberOfRuns++;
    var userNum = parseInt(prompt("Wieviel ist " + maxNum + " - " + minNum + " ?"));


    if (userNum === solution) {
        points += 1
        alert("Richtige Antwort! " + points + "/5");
        if (numberOfRuns < 5) {
            subtraktion(points, numberOfRuns);
        }
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            multiplikation();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }
    }
    else if (userNum !== solution) {
        alert("Leider Falsch! " + points + "/5");
        if (numberOfRuns < 5) {
            subtraktion(points, numberOfRuns);
        }
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            multiplikation();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }

    }
}

//Multiplikation
function multiplikation(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    var solution = num1 * num2;
    numberOfRuns++;

    var userNum = parseInt(prompt("Wieviel ist " + num1 + " * " + num2 + " ?"), 10);

    if (userNum === solution) {
        points += 1
        alert("Richtige Antwort! " + points + "/5");
        if (numberOfRuns < 5) {
            multiplikation(points, numberOfRuns);
        }
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            Division();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }
    }
    else if (userNum !== solution) {
        alert("Leider Falsch! " + points + "/5");
        if (numberOfRuns < 5) {
            multiplikation(points, numberOfRuns);
        }
        else if (numberOfRuns === 5 && points >= 4) {
            alert("Herzlichen Glückwunsch, du hast das Nächste Level erreicht!")
            Division();
        }
        else if (numberOfRuns === 5 && points < 4) {
            alert("Du hast leider nicht genug Punkte erreicht.")
            addition();
        }

    }
}

//Division
function Division(points = 0, numberOfRuns = 0) {
    var num1 = generateRandomNum();
    var num2 = generateRandomNum();
    var solution = num1 / num2;
    
    //Check if there's no rest
    if (num1 % num2 == 0) {
        numberOfRuns++;
        var userNum = parseInt(prompt("Wieviel ist " + num1 + " / " + num2 + " ?"), 10);
        if (userNum === solution) {
            points += 1
            alert("Richtige Antwort! " + points + "/5");
            if (numberOfRuns < 5) {
                Division(points, numberOfRuns);
            }
            else if (numberOfRuns === 5 && points >= 4) {
                alert("Herzlichen Glückwunsch, du hast alle Level abgeschlossen!")
                return 0;
            }
            else if (numberOfRuns === 5 && points < 4) {
                alert("Du hast leider nicht genug Punkte erreicht.")
                addition();
            }
        }
        else if (userNum !== solution) {
            alert("Leider Falsch! " + points + "/5");
            if (numberOfRuns < 5) {
                Division(points, numberOfRuns);
            }
            else if (numberOfRuns === 5 && points >= 4) {
                alert("Herzlichen Glückwunsch, du hast alle Level Abgeschlossen!")
                return 0;
            }
            else if (numberOfRuns === 5 && points < 4) {
                alert("Du hast leider nicht genug Punkte erreicht.")
                addition();
            }
    
        }
    }
    else {
        Division(points, numberOfRuns);
    }
}

addition();

