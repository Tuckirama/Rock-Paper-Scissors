let userInput = prompt("rock paper or scissors?")
let rps = ["rock", "paper", "scissors"]
let rpsGen = Math.floor(Math.random()*rps.length)

function rockPaperScissors(){
  if(userInput === "rock" && rps[rpsGen] === "paper"){
    alert("You lost")
  }else
 if(userInput === "paper" && rps[rpsGen] === "scissors"){
    alert("You lost")
  }else
if(userInput==="scissors" && rps[rpsGen] === "rock"){
  alert("You lost")
}else

if(userInput===rps[rpsGen]){
  alert("tie. shoot again")
} else {alert("You won")}}

 rockPaperScissors();

 console.log(rps[rpsGen])
