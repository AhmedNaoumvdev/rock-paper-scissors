
const typeed = new Typed('.entryWelcome', {
    strings: ["Where men-kind strikes with computer",
    "the first reaching 5 points wins the game",
    "The game starts again continuously!.",
    "Good Luck!"],
    typeSpeed: 40,
    backSpeed: 30,
    showCursor: false,
});

const choices = ['rock', 'paper', 'scissor']; 
const buttons = document.querySelectorAll('.button');
const menResult = document.querySelector('.men__result');
const computerResult = document.querySelector('.computer__result');
let playerChoice;
let computerChoice;
let playerCounter = 0;
let computerCounter = 0;

buttons.forEach(button => button.addEventListener('click',game));

function getComputerChoice(){
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        document.querySelector('.tie').style.visibility = 'visible';
        setTimeout(() => 
        {
            document.querySelector('.tie').style.visibility = 'hidden';
        }, 500);
    }else if(playerChoice === 'rock' && computerChoice === 'scissor'){
        playerCounter+=1;
        menResult.textContent = playerCounter;
        document.querySelector(`[data-key='${computerChoice}'`).classList.add('comChoice');
        setTimeout(() => {
            document.querySelector(`[data-key='${computerChoice}'`).classList.remove('comChoice');
        },500)
    }else if(playerChoice === 'scissor' && computerChoice === 'paper'){
        playerCounter+=1;
        menResult.textContent = playerCounter;
        document.querySelector(`[data-key='${computerChoice}'`).classList.add('comChoice');
        setTimeout(() => {
            document.querySelector(`[data-key='${computerChoice}'`).classList.remove('comChoice');
        },500)
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        playerCounter+=1;
        menResult.textContent = playerCounter;
        document.querySelector(`[data-key='${computerChoice}'`).classList.add('comChoice');
        setTimeout(() => {
            document.querySelector(`[data-key='${computerChoice}'`).classList.remove('comChoice');
        },500)
    }else{
        computerCounter+=1;
        computerResult.textContent = computerCounter;
        document.querySelector(`[data-key='${computerChoice}'`).classList.add('comChoice');
        setTimeout(() => {
            document.querySelector(`[data-key='${computerChoice}'`).classList.remove('comChoice');
        },500)
    }
}

function gameOver(winner, loser){
    winner.textContent = 'You Win!';
    playerCounter = 0;
    computerCounter = 0;
    setTimeout(() => {
        winner.textContent = 0;
        loser.textContent = 0;
    }, 1000)
}

function game(e){
    playerChoice = this.dataset.key;
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);           
    if(playerCounter == 5){
        gameOver(menResult, computerResult)
    }else if(computerCounter == 5){
        gameOver(computerResult, menResult)
    }
}