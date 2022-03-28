const options = ['ROCK', 'PAPER', 'SCISSORS'] // options for computer to select
const optionBtn = document.querySelectorAll('div.options button');
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

//function for computer to select a random index location from array options
function computerPlay(){
    const compSelection = options[Math.floor(Math.random() * options.length)]
    return compSelection
}

let playerScore = 0;
let compScore = 0;

const output = document.querySelector('.output')

function playRound(playerChoice){
    let compChoice = computerPlay()
    if(playerChoice == 'ROCK'){
        if (compChoice == 'ROCK'){
            output.textContent = 'Draw, try again!'
        } else if ( compChoice == 'PAPER'){
            output.textContent = 'Computer picked paper. You lose!'
            cScore.textContent = ++compScore
        } else{
            output.textContent = 'Computer picked scissors. You win!'
            pScore.textContent = ++playerScore
        }
    }else if (playerChoice == 'PAPER'){
        if (compChoice == 'PAPER'){
            output.textContent = 'Draw, try again!'
        } else if ( compChoice == 'ROCK'){
            output.textContent = 'Computer picked rock. You win!'
            pScore.textContent = ++playerScore
        } else {
            output.textContent = 'Computer picked scissors. You lose!'
            cScore.textContent = ++compScore
        }
    } else if (playerChoice == 'SCISSORS'){
        if (compChoice == 'SCISSORS'){
            output.textContent = 'Draw, try again!'
        } else if (compChoice == 'ROCK'){
            output.textContent = 'Computer picked rock. You lose!'
            cScore.textContent = ++compScore
        } else {
            output.textContent = 'Computer picked paper. You win!'
            pScore.textContent = ++playerScore
        }
    } else{
        output.textContent = 'Invalid entry... Try again'
        console.log(playerChoice)
    }
    checkScore()
}


// function to select winner
function score(){
    if ( playerScore > compScore){
        output.textContent = `You win the game with a score of ${playerScore} - ${compScore}!`
        reset()} 
    else{
        output.textContent = `You lost the game with a score of ${playerScore} - ${compScore}!`
        reset()
    }
}

function checkScore(){
    if (playerScore == 5 || compScore == 5){
        score()
    }
}

let pScore = document.querySelector('.playerScore')
pScore.textContent = playerScore

let cScore = document.querySelector('.computerScore')
cScore.textContent = compScore

function getPlayerChoice(e) {
    let playerChoice= (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerChoice, computerPlay());
  }

  function reset(){
      playerScore = 0
      compScore = 0
      pScore.textContent = 0
      cScore.textContent = 0
  }