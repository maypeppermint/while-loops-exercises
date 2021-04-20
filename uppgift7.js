/*
Skriv ett "program" som tar emot input från användaren i form av nummer. 
För varje nummer som kommer in, addera till det tidigare inlagda numret och skriv ut den totala summan i konsollen. 
Låt loopen köras om tills dess att användaren skriver in 0.

Tänk på att javascript gör om allt vi skickar in till strings, 
vilket betyder att vi inte kan plussa inputsen rakt av med varandra.
Säg därför att vår input är av typen Number genom att skriva det före prompt.

HINT: googla om den inbyggda JS funktionen parseInt();
*/
let userNumber = parseInt(prompt("Type a number. Type 0 if you want to end the game."));
let sum = 0;
do {
    if (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Type a NUMBER. Type 0 if you want to end the game."));
    } else {
        sum += userNumber;
        console.log("You typed " + userNumber + ". And the sum of the numbers you typed is " + sum + ".");
        userNumber = parseInt(prompt("Type another number. Type 0 if you want to end the game."));
    }
} while (userNumber != 0);
