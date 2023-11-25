let computerScore = 0;
let playerScore = 0;
let round = 0;

function getComputerChoice ()  {
  let computerChoice = Math.floor(Math.random()*3);
  return computerChoice === 0? "Rock": computerChoice === 1? "Paper": "Scissors";
} 


function playRound (playerSelection, computerSelection){
  computerSelection = getComputerChoice();
  round++;
  
  if (playerSelection == computerSelection){
    alert("It's a tie this round!");
    
  } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
    alert( "You win this round! Rock beats Scissors");
    playerScore++;
    
} else if (playerSelection == "Paper" && computerSelection == "Rock"){
    alert( "You win this round! Paper beats Rock");
    playerScore++;
  
} else if (playerSelection == "Scissors" && computerSelection == "Paper"){  
    alert("You win this round! Scissors beats Paper");
    playerScore++;
    
} else { 
    alert( "You lose this round!");
    computerScore++;
    
  }

  console.log(playerScore);
  console.log(computerScore);
  console.log("Round: "+ round)
  }

  let buttons = document.querySelectorAll(".btn");
  let divComp = document.querySelector("#Computer");
  let divPlayer = document.querySelector("#Player");
  let playerChoice = document.querySelector("#PlayerChoice")
  let computerPick = document.querySelector("#ComputerChoice")
  let roundCounter = document.querySelector("#Round");

  
  buttons.forEach(function (button){
    button.addEventListener("click",function(){
      if (playerScore === 5 || computerScore ===5 && playerScore>computerScore){
        alert("You won the game, congrats!");
      } else if (playerScore === 5 || computerScore ===5 && playerScore<computerScore){
        alert("Sorry you lost, better luck next time!")
      } else {
      playRound(button.value)
      divPlayer.textContent = "Player Score: "+ playerScore; 
      divComp.textContent =  "Computer Score: " + computerScore;
      playerChoice.textContent = "You choose:  " + button.value;
      roundCounter.textContent = "Round: " + round;
    
    }
  }) 
    }
  );
  



