const options = ['ROCK', 'PAPER', 'SCISSORS']


function computerPlay(){
    const compSelection = options[Math.floor(Math.random() * options.length)]
    return compSelection
}

function playRound(){
    let playerChoice = prompt('Pick Rock, Paper, or Scissors!')
    let compChoice = computerPlay()
    if(playerChoice.toUpperCase() == 'ROCK'){
        if (compChoice == 'ROCK'){
            console.log('Draw, try again!')
        } else if ( compChoice == 'PAPER'){
            console.log('Computer picked paper. You lose!')
        } else{
            console.log('Computer picked scissors. You win!')
        }
    }else if (playerChoice.toUpperCase() == 'PAPER'){
        if (compChoice == 'PAPER'){
            console.log('Draw, try again!')
        } else if ( compChoice == 'ROCK'){
            console.log('Computer picked rock. You win!')
        } else {
            console.log('Computer picked scissors. You lose!')
        }
    } else if (playerChoice.toUpperCase() == 'SCISSORS'){
        if (compChoice == 'SCISSORS'){
            console.log('Draw, try again!')
        } else if (compChoice == 'ROCK'){
            console.log('Computer picked rock. You lose!')
        } else {
            console.log('Computer picked paper. You win!')
        }
    } else{
        console.log('Invalid entry... Try again')
    }
}

playRound()