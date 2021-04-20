/*
Skriv ett "program" där datorn slår två stycken olika 6-sidiga tärningar (alltså inte samma tärning två gånger). 
Efter varje slag ska vardera tärnings värde skrivas ut i konsollen, samt dess sammanslagna värde. 
Datorn ska slå tärningarna om och om igen tills dess att den får par, alltså samma tal på båda tärningarna. 
*/

let dice1, dice2;
do {
    dice1 = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    console.log("The dices are " + dice1 + " and " + dice2 + ". And the sum is " + (dice1 + dice2) + ".");
} while (dice1 != dice2);