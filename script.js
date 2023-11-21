function getComputerChoice ()  {
  let computerChoice = Math.floor(Math.random()*3);
  return computerChoice === 0? "Rock": computerChoice === 1? "Paper": "Scissors";
} 


let computerScore = 0;
let playerScore = 0;

function playRound (playerSelection, computerSelection){
  computerSelection = getComputerChoice();
  console.log(getComputerChoice());
  
  playerSelection = prompt( "Rock, Paper, or Scissors?");
  if (playerSelection == computerSelection){
    console.log("It's a tie!");
    
  } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
    console.log( "You win! Rock beats Scissors");
    playerScore++;
    
} else if (playerSelection == "Paper" && computerSelection == "Rock"){
    console.log( "You win! Paper beats Rock");
    playerScore++;
  
} else if (playerSelection == "Scissors" && computerSelection == "Paper"){  
    console.log("You win! Scissors beats Paper");
    playerScore++;
    
} else { 
    console.log( "You lose!");
    computerScore++;
    
  }
  }

function game () {
  for (let i = 0; i < 5; i++){
    playRound();
    console.log("Player Score: "+ playerScore);
    console.log("Computer Score: " + computerScore);
  
}
  if (computerScore < playerScore){
    console.log ("You win");
  } else {
    console.log ("You lose");
  }
}

  game();
