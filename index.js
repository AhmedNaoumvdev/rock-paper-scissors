const choices = ['rock', 'paper', 'scissor']; 
let playerChoice;
let computerChoice;
let gameCounter = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'It is a tie!';
    }else if(playerChoice === 'rock' && computerChoice === 'scissor'){
        return 'You wins';
    }else if(playerChoice === 'scissor' && computerChoice === 'paper'){
        return 'You wins';
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return 'You wins';
    }else{
        return 'Computer wins';
    }
}

function game(){
    for(let i = 0; i<5; i++){
        playerChoice = prompt('What do you want to choose?: ');
        computerChoice = getComputerChoice();
        if(playRound(playerChoice, computerChoice) === 'You wins'){
            gameCounter++;
        }else if(playRound(playerChoice, computerChoice) === 'Computer wins'){
            gameCounter--;
        }
        alert(playRound(playerChoice, computerChoice));           
    }
    if(gameCounter > 0){
        console.log('You win the game');
    }else if(gameCounter < 0){
        console.log('Computer wins');
    }else{
        console.log('Game ends with a tie');
    }
}