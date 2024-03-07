const miniMum = 1;
const maxiMum = 100;
const answer = Math.floor(Math.random())*(miniMum - maxiMum +1) + miniMum;

let attempt = 0;
let guess;
let running = true;

while (running){

guess = window.prompt(`guess a number between ${miniMum} - ${maxiMum}`);
guess = Number(guess);

if(isNaN(guess)){window.alert("Please insert a number")}

else if (guess < miniMum || guess > maxiMum){ window.alert("invalid number");}

else{
    attempt++;
    if (guess < answer){
        window.alert("TOO LOW, TRY AGAIN");
    }
    else if(guess > answer){
        window.alert("TOO HIGHT, TRY AGAIN");
    }
    else {
        window.alert("you did it");
    }
    running = false;}
}