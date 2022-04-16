// let rock = document.getElementById('rps-1')
// rock.addEventListener("click", () => playerScore.innerText = count);
// let paper = document.getElementById('rps-2');
// paper.addEventListener("click", () => playerScore.innerText = count);
// let scissors = document.getElementById('rps-3');
// scissors.addEventListener("click", () => playerScore.innerText = count);
const gameElements = ['rock', 'paper', 'scissors'];
const winners = [];
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
let rock = document.getElementById('rps-1');
let paper = document.getElementById('rps-2');
let scissors = document.getElementById('rps-3');

let count = 0;


function game() {
    // for(let i = 1; i <= 5; i++){
    //     playRound(i);
    // }
    playRound();
    winnerDisp();
}

function playRound(round) {
    const playerSelection =playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

// function playerChoice(){
  
//     while(result == null){
//         result = prompt('Select your element: Rock, Paper or Scissors');
//     }
//     result = result.toLowerCase();
//     let check = validateInput(result)
//     while (check == false){
//         result =  prompt('type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesnt matter');
//         result = result.toLowerCase();
//         check = validateInput(result);
//     };
//     return result
// }



function playerChoice(){

    rock.addEventListener("click", () => {result= 'rock'; console.log(result);
    return result
});
    paper.addEventListener("click", () => {result= 'paper'; console.log(result);
    return result
});
    scissors.addEventListener("click", () => {result= 'scissors'; 
    console.log(result);
    return result
});
    return result
}

function computerChoice() {
    return gameElements[Math.floor(Math.random() * gameElements.length)];
}
function playerScoring(){
    let playerScore = document.getElementById('player-score')
    count = count+1;
        playerScore.innerText = count;
}
function computerScoring(){
    count = count+1;
        computerScore.innerText = count;
}


function validateInput(element) {
    return gameElements.includes(element)
}

function checkWinner(choiceP, choiceC) {
    if(choiceP == choiceC){
        return 'Tie'
    } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper") ){
        playerScoring();
        return 'You'
    }else {
        computerScoring()
        return 'Computer';
    }
}

function winnerDisp(){
    let playerWins = winners.filter((item) => item == 'You').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player wins: ', playerWins);
    console.log('Computer wins: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round number: ', round);
    console.log('Player choice: ', playerChoice);
    console.log('Computer choice: ', computerChoice);
    console.log('Winner: ', winner);
    console.log('----------------------')
}

game();
