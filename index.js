const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playGame(button.id);
  });
});
let score = document.querySelector(".scoreboard")
let win=0,lose=0;
function getComputerChoice(){
    let n=Math.floor(Math.random()*3);
    return (n==0)?"Rock":((n==1)?"Paper":"Scissors");
}
function playRound(x,y){
    x=x.toLowerCase();
    y=y.toLowerCase();
    if(x=="rock"){
        switch(y){
            case "paper":
                return "You Lose! Paper beats Rock";
            case "scissors":
                return "You Win!!! Rock beats Scissors";
            default:
                return "Draw..."
        }
    }else if(x=="paper"){
        switch(y){
            case "rock":
                return "You Win!!! Paper beats Rock";
            case "scissors":
                return "You Lose! Scissors beats Paper";
            default:
                return "Draw..."
        }
    }else if(x=="scissors"){
        switch(y){
            case "paper":
                return "You Win!!! Scissors beats Paper";
            case "rock":
                return "You Lose! Rock beats Scissors";
            default:
                return "Draw..."
        }
    }
}
function playGame(x){
    const playerSelection = x
    const computerSelection = getComputerChoice();
    let output = playRound(playerSelection,computerSelection);
    alert(output);
    if(output.includes("Win!!!")){
        win+=1;
    }else if(output.includes("Lose!")){
        lose+=1;
    }
    score.innerHTML = `Win: ${win} and Lose: ${lose}`
}

