const options = ['ROCK', 'PAPER', 'SCISSORS'] // options for computer to select

//function for computer to select a random index location from array options
function computerPlay(){
    const compSelection = options[Math.floor(Math.random() * options.length)]
    return compSelection
}

let playerScore = 0;
let compScore = 0;

//function to accept user prompt, convert string to all capitals, and compare it to compChoice to determine winner of round
function playRound(){
    let playerChoice = prompt('Pick Rock, Paper, or Scissors!')
    let compChoice = computerPlay()
    if(playerChoice.toUpperCase() == 'ROCK'){
        if (compChoice == 'ROCK'){
            console.log('Draw, try again!')
        } else if ( compChoice == 'PAPER'){
            console.log('Computer picked paper. You lose!')
            return compScore++
        } else{
            console.log('Computer picked scissors. You win!')
            return playerScore++
        }
    }else if (playerChoice.toUpperCase() == 'PAPER'){
        if (compChoice == 'PAPER'){
            console.log('Draw, try again!')
        } else if ( compChoice == 'ROCK'){
            console.log('Computer picked rock. You win!')
            return playerScore++
        } else {
            console.log('Computer picked scissors. You lose!')
            return compScore++
        }
    } else if (playerChoice.toUpperCase() == 'SCISSORS'){
        if (compChoice == 'SCISSORS'){
            console.log('Draw, try again!')
        } else if (compChoice == 'ROCK'){
            console.log('Computer picked rock. You lose!')
            return compScore++
        } else {
            console.log('Computer picked paper. You win!')
            return playerScore++
        }
    } else{
        console.log('Invalid entry... Try again')
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        playRound()
    }
    score()
    playAgain()
}


function score(){
    if ( playerScore > compScore){
        console.log(`You win the game with a score of ${playerScore} - ${compScore}!`)
    } else if ( compScore > playerScore){
        console.log(`You lost the game with a score of ${playerScore} - ${compScore}!`)
    } else {
        console.log(`The game was a tie with a score of ${playerScore} - ${compScore}!`)
    }
}


function playAgain(){
    let restart = prompt('Would you like to play again?')
    if ( restart.toUpperCase() == 'YES'){
        game()
    } else {
        console.log('Thanks for playing. See you next time.')
    }
}

game()
//score()
//playAgain()