/*----- constants -----*/
const colors = [
        "green", 
        "purple", 
        "red", 
        "blue", 
        "pink",
        "lavender", 
        "aqua", 
        "yellow"
    ];
    
//   /*----- state variables -----*/
let Board = colors.concat(colors)
let matchedCards = 0;
let moveCount = 0;
let firstCard, secondCard;

//   /*----- cached elements  -----*/
const cardEls = [...document.querySelectorAll('#cards')];
const message = document.querySelector('#header');
const startBtn = document.querySelector('#start');
const restartBtn = document.querySelector('#restart');
const colorsArray = document.querySelectorAll('#div');
const countEl = document.querySelector('#move-count');
const messageEl = document.querySelector('h2');


//   /*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', flipCard);
restartBtn.addEventListener('click', restartGame);
startBtn.addEventListener('click', initialize);
document.getElementById('move-count').addEventListener('click', moveCounter);
  
//   /*----- functions -----*/
  
function initialize() {
    firstCard = null;
    secondCard = null;
    winner = null;
    matchedCards = 0;
    moveCount = 0;
    winner = null;
    enableGame();
    newBoard();
    render();
}

function newBoard() {
    let tempColors = [
        "green", 
        "purple", 
        "red", 
        "blue", 
        "pink",
        "lavender", 
        "aqua", 
        "yellow",
        "green", 
        "purple", 
        "red", 
        "blue", 
        "pink",
        "lavender", 
        "aqua", 
        "yellow"
    ];
    for (let i = 15; i >= 0; i--) { //loop through colors counting down
        const cardsEl = document.querySelector(`.card${i}`);
        const randNum = Math.floor(Math.random() * i);
        const selectedColor = tempColors[randNum]; //selects random color
        tempColors.splice(randNum,1); //removes it from list
        cardsEl.setAttribute('name', selectedColor); //sets clss 
    }
}

function flipCard(evt) {
    let flipCard = evt.target;
    if(flipCard.tagName === 'SECTION') return; //if they click on the outer grid it wont respond.
        flipCard.style.background = flipCard.getAttribute("name");
    if(!firstCard) { //returns value of first card to flipcard
        firstCard = flipCard;
    } else {
        secondCard = flipCard;
    }
     if(firstCard && secondCard){ //if both have a value
    checkMatch();
    moveCounter();
    winner = checkWinnner;
    }
    render();
}
//check for matching cards 
function checkMatch() {
    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
            //if both cards match-add to match count
        console.log("match");
        firstCard = null;
        secondCard = null;
        matchedCards++;
    } else {

    setTimeout(() => {
        firstCard.style.background = "linear-gradient(150deg, #51087e  0%, #325cdd 100%)"
        secondCard.style.background = "linear-gradient(150deg, #51087e  0%, #325cdd 100%)"
        firstCard = null;
        secondCard = null;
    }, 1000);
    }
}

function moveCounter() {
    moveCount += 1;
    if(moveCount >= 20) {
        handleLoss();
    }
  };  

function handleLoss() {
    renderMessage();
    disableGame();
    render();
}

function checkWinnner() {
    if (matchedCards === 8){
        return true;
    } else {
        return false;
    }
}
function disableGame() { //This function is for disabling start and clicking 
    document.getElementById('game-board').removeEventListener('click', flipCard);
    startBtn.removeEventListener('click', initialize);
    document.getElementById('move-count').removeEventListener('click', moveCounter);
}

function enableGame() { //This function is for enabling start and clicking 
    document.getElementById('game-board').addEventListener('click', flipCard);
    startBtn.addEventListener('click', initialize);
    document.getElementById('move-count').addEventListener('click', moveCounter);
}
//reset board
function restartGame() {
    Board.forEach(function(color, cardIdx) {
        const cardsEl = document.querySelector(`.card${cardIdx}`);
        cardsEl.style.background = "linear-gradient(150deg, #51087e  0%, #325cdd 100%)";
      })
    flipCard = null;
    firstCard = null;
    secondCard = null;
    winner = null;
    matchedCards = 0;
    moveCount = 0;
    messageEl.innerText = "HOW TO PLAY:";
    render();
  };

  function render() {
    renderMessage();
    countEl.innerHTML = moveCount;
  }

function renderMessage() {
if (moveCount < 20 && matchedCards === 8) {
    messageEl.innerText = "You win! Great guessing!"
} else if (moveCount >= 20) {
    messageEl.innerText = "You're out of moves! Better luck next time!"
}
}
