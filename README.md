In dieser Aufgabe erarbeiten sie ein sehr einfach gehaltenes Mathematik-Lernprogramm für Grundschüler. Jede Aufgabe ist mit einem Titel versehen. Erstellen Sie vor dem Beginn jeder Teilaufgabe einen branch mit dem jeweiligen Titel, also z.B.

git checkout -b a_base
Denken Sie daran nach dem Abschluss jeder Aufgabe, zu stagen, zu commiten und den Branch ins Internet zu pushen:
git add .
git commit -m "fullfills task a"
git push origin a_base

Wenn Sie mit der Bearbeitung der Aufgabe fertig sind, tragen sie Bitte in das Ergebnisfeld einen Link zu ihrem github-Repository ein.

a) base: Legen Sie ein Github-Repository an, clonen Sie es lokal auf ihren Rechner und commiten Sie eine index.html-Datei mit minimalstem Aufbau und einem script-tag welches auf die datei grundschulmathe.js einbindet. grundschulmathe.js soll alert("Grundschulmathe") aufrufen.

b) single: Ermitteln Sie zwei ganzzahlige Zufallszahlen zwischen 1 und 20 und fragen Sie den Benutzer mittels prompt nach dem Ergebnis der Addition dieser beiden Zahlen: Z.B.: "Wieviel ist 15 + 8". Wenn der Nutzer das richtige Ergebnis eingibt geben Sie alert("Richtig") aus. Ist das Ergebnis falsch soll alert("Falsch" ausgegeben werden)

c) repeat: Wiederholen Sie diese Frage 5 mal mit jeweils unterschiedlichen Zahlen und ergänzen Sie die Antwort jedweils noch um die Punkte Anzahl für jede richtige Antwort Z.B.(3/5)

d) levels: Wenn der User 4 oder mehr Aufgaben richtig beantwortet hat, kommt er ins nächste Level, in dem nun Subtraktion getestet wird. Es darf keine Aufgabe gestellt werden, bei der negative Werte heraus kommen.

e) final: führen Sie weitere Levels für Multiplikation und Division ein. Bei der Division dürfen nur ganze Zahlen als Ergebnis heraus kommen.
