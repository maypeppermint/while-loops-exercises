/*
Gå till din förbättrade version av siffergissarspelet du har gjort i uppgift 2 och lägg till en räknare som håller koll på antalet gissningar. 
När spelaren sedan gissar rätt, skriv ut antalet gissningar det tog innan användaren svarade rätt
*/
let randomNumber = Math.floor(Math.random() * 11);  
let guess = parseInt(prompt("Guess a number between 0-10. " + randomNumber));
let tr = 0;


while (guess != randomNumber) {
    guess = parseInt(prompt("Wrong! Guess again!"));
    tr ++;
}
alert("You are RIGHT after " + tr + " try.");