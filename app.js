/*----- constants -----*/
const colors = [
    "green", 
    "purple", 
    "red", 
    "blue", 
    "pink",
    "lavender", 
    "aqua", 
    "yellow"];

const cardsColors = [...colors, ...colors]; //double colors array
// const cardCount = 2 * colors.length;
//   /*----- state variables -----*/
let Board = colors.concat(colors)
// let activeCard = false;
let matchedCards = 0;
let moveCount = 0;
// let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

// const duration = 60;
// const timer = {
//         seconds: 0,
//         minutes: 0, 
//         clearTimer: -1
//       };

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
restartBtn.addEventListener('click', resetBoard);
startBtn.addEventListener('click', initialize);
document.querySelector('input').addEventListener('click', moveCounter);
  
//   /*----- functions -----*/
  
initialize();
  
function initialize() {
    Board = colors.concat(colors);
    winner = null;
    // updateCards();
    render();
}

function flipCard(evt) {
    const randomIdx = Math.floor(Math.random() * cardsColors.length);
    const colorIdx = cardsColors[randomIdx];
    let flipCard = evt.target;
    if(flipCard.tagName === 'SECTION') return; //if they click on the outer grid it wont respond.
        console.log("flipCard", firstCard, secondCard)
        flipCard.style.background = flipCard.getAttribute("name");
    if(!firstCard) { //returns value of first card to flipcard
        firstCard = flipCard;
    } else {
        secondCard = flipCard;
    }
     if(firstCard && secondCard){

    checkMatch();
    moveCounter();
    winner = checkWinnner;
    }
        // lockBoard = true;
render();
}

//check for matching cards 
function checkMatch() {
    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
        console.log("match");
        firstCard = null;
        secondCard = null;
        matchedCards++;
    } else {
    //  firstCard.classList.add('fade')
    //  secondCard.classList.add('fade')
    setTimeout(() => {
        console.log("no match")
        // firstCard.classList.add('front-color')
        // secondCard.classList.add('front-color')
        console.log(firstCard, secondCard)
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
}

function checkWinnner() {
    if (matchedCards === 8){
        return true;
    } else {
        return false;
    }
};
//   shuffle cards
// function updateCards() {
//     const randomIdx = Math.floor(Math.random() * cardsColors.length);
//     const color = cardsColors[randomIdx];
// };
//reset board
function resetBoard() {
    winner = null;
    matchedCards = 0;
    moveCount = 0;
    renderBoard();
    // updateCards();
  };

  function render() {
    renderBoard();
    renderMessage();
    countEl.innerHTML = moveCount;
    restartBtn.disabled =!checkWinnner;
    // renderControls();
  }

function renderBoard() {
    Board.forEach(function(color, cardIdx) {
        const cardsEl = document.querySelector(`.card${cardIdx}`);
        // console.log("cardEls", cardsEl)
        cardsEl.setAttribute('name', color);
      });
    };

function renderMessage() {
if (moveCount < 20 && matchedCards === 8) {
    messageEl.innerText = "You win! Great guessing!"
} else if (moveCount >= 20) {
    messageEl.innerText = "You're out of moves! Better luck next time!"
}
  }
// function renderControls() {
//     // playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
// }