const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = "DRAW"
const RESULT_PLAYER_WINS = "PLAYER_WINS"
const RESULT_COMPUTER_WINS = "COMPUER_WINS"

let gameIsRunning = false

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS    
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`)
    return 
    }
    return selection
}

const getComputerChoice =  () => {
    const randomValue = Math.random()
    if (randomValue < 0.34){
    return ROCK
}else if (randomValue < 0.67){
    return PAPER
}else {
    return SCISSORS
}
}

const getWinner = (pChoice = DEFAULT_USER_CHOICE, cChoise) => {
    return cChoise === pChoice ? RESULT_DRAW : (
        cChoise === ROCK && pChoice === PAPER || 
        cChoise === PAPER && pChoice === SCISSORS ||
        cChoise === SCISSORS && pChoice === ROCK ) ? RESULT_PLAYER_WINS : RESULT_PLAYER_WINS
//     if (pChoice === cChoise){
//         return RESULT_DRAW
//     } else if(
//         cChoise === ROCK && pChoice === PAPER || 
//         cChoise === PAPER && pChoice === SCISSORS ||
//         cChoise === SCISSORS && pChoice === ROCK ) {  
// return RESULT_PLAYER_WINS
//         } else {
//             return RESULT_COMPUTER_WINS
//         }
}

startGameBtn.addEventListener("click",  () => {
    if (gameIsRunning){
        return
    }
    gameIsRunning = true
    console.log("Game is starting...")
    const playerSelection = getPlayerChoice()
    const computerChoice = getComputerChoice()
    let winner
    if(playerSelection){
       winner = getWinner (computerChoice, playerSelection)   
    }else {
        winner = getWinner(computerChoice)
    }
    let message = `You picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}`
    if( winner === RESULT_DRAW){
        message = message + "had a draw"
    }else if (winner === RESULT_PLAYER_WINS){
       message = message + "won"
    }else {
        message = message + "lost"
    }
    alert(message)
    gameIsRunning = false
})


const sumUp = (...numbers) => {
let sum = 0;
for (const num of numbers){
sum += num
} return sum
}

const subtractUp = function() {
    let sum = 0;
    for (const num of arguments){
    sum += num
    } return sum
    }

console.log(sumUp(1, 5, 10, -3, 6, 10))
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88))
console.log(subtractUp(1, 10, 15, 20))