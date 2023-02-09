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
let activeCard = false;
let match = 0;
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

const timer = {
        seconds: 0,
        minutes: 0, 
        clearTimer: -1
      };
//   /*----- cached elements  -----*/
const cardEls = [...document.querySelectorAll('#cards')];
const message = document.querySelector('#header');
const startBtn = document.querySelector('#start');
const restartBtn = document.querySelector('#restart');
const colorsArray = document.querySelectorAll('#div');


//   /*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', flipCard);
//restartBtn.addEventListener('click', resetBoard);
startBtn.addEventListener('click', initialize);

  
//   /*----- functions -----*/
  
initialize();
  
function initialize() {
    Board = colors.concat(colors);
    winner = null;
    updateCards();
    render();
}

function flipCard(evt) {
    const randomIdx = Math.floor(Math.random() * cardsColors.length);
    const colorIdx = cardsColors[randomIdx];
    let flipCard = evt.target;
    if(flipCard.tagName === 'SECTION') return;
    console.log("flipCard", firstCard, secondCard)
        flipCard.style.background = flipCard.getAttribute("name");
        if(!firstCard) { //returns value of first card to flipcard
        firstCard = flipCard;
        } else {
        secondCard = flipCard;
        }
         if(firstCard && secondCard){

        checkMatch();
         }
        // lockBoard = true;
    render();
}

//check for matching cards 
function checkMatch() {
    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
        console.log("match");
    } else {
    //  firstCard.classList.add('fade')
    //  secondCard.classList.add('fade')
    setTimeout(() => {
        console.log("no match")
        // firstCard.classList.add('front-color')
        // secondCard.classList.add('front-color')
        firstCard.style.background = "linear-gradient(150deg, #51087e  0%, #325cdd 100%)"
        secondCard.style.background = "linear-gradient(150deg, #51087e  0%, #325cdd 100%)"
        firstCard = null;
        secondCard = null;
    }, 1000);
      
    }
}



// function unflipCards() {
//     // lockBoard = true;
//     // setTimeout(() => {
//     //   firstCard.classList.remove('flip');
//     //   secondCard.classList.remove('flip');
//     //   resetBoard();
//     // }, 1000);
// }

// function disableCards() {
//     // firstCard.removeEventListener('click', flipCard);
//     // secondCard.removeEventListener('click', flipCard);
//     // resetBoard();
//   }
  

function checkWinnner() {
    if (match === 8){
        return true;
    } else {
        return false;
    }
};
//   shuffle cards
function updateCards() {
    const randomIdx = Math.floor(Math.random() * cardsColors.length);
    const color = cardsColors[randomIdx];
};

function startTimer () {
    if (timer.seconds === 59) {
      timer.minutes++;
      timer.seconds = 0;
    } else {
      timer.seconds++;
}

function resetTimer() {
    clearInterval(timer.clearTime);
    timer.seconds = 0;
    timer.minutes = 0;
    (".timer").text("0:00");
    timer.clearTime = setInterval(startTimer, 1000);
}
//reset board
// function resetBoard() {
//     matchedCards = 0;
//     resetTimer();
//     updateCards();
//  };

function render() {
    renderBoard();
    renderMessage();
    restartBtn.disabled =!checkWinnner;
    //renderControls();
}

function renderBoard() {
    Board.forEach(function(color, cardIdx) {
        const cardsEl = document.querySelector(`.card${cardIdx}`);
        // console.log("cardEls", cardsEl)
        cardsEl.setAttribute('name', color);
      });
    };

  function renderMessage() {
    if (winner === 'true') {
        message.innerText = "Winner winner chicken dinner! You beat the clock!";
    } else if (winner !== true) {
        message.innerText = "Whomp Whomp, better luck next time!";
    }
}
}  
// function renderControls() {
//     playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
// }
// }