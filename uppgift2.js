/* 
Återgå till javascriptversionen av gissa-nummerspelet där datorn valde ett slumpat tal. 
Lägg till en whileloop som låter användaren gissa tills dess att denne har rätt
*/
let randomNumber = Math.floor(Math.random() * 11);  
let guess = parseInt(prompt("Guess a number between 0-10. " + randomNumber));
while (guess != randomNumber) {
    guess = parseInt(prompt("Wrong! Guess again!"));
}
alert("You are RIGHT!");