const gameElements = ['rock', 'paper', 'scissors'];
const winners = [];


function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    winnerDisp();
}

function playRound(round) {
    const playerSelection =playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
    let result = prompt('Select your element: Rock, Paper or Scissors');
    while(result == null){
        result = prompt('Select your element: Rock, Paper or Scissors');
    }
    result = result.toLowerCase();
    let check = validateInput(result)
    while (check == false){
        result =  prompt('type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesnt matter');
        result = result.toLowerCase();
        check = validateInput(result);
    };
    return result
}

function computerChoice() {
    return gameElements[Math.floor(Math.random() * gameElements.length)];
}


function validateInput(element) {
    return gameElements.includes(element)
}

function checkWinner(choiceP, choiceC) {
    if(choiceP == choiceC){
        return 'Tie'
    } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper") ){
        return 'You'
    }else {
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
