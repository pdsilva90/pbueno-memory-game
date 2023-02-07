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


const cardsColors = [...colors, ...colors];
//console.log(cardsColors);
const cardCount = cardsColors.length;
//picks random idx of colors array- does it go here?
const randomIdx = Math.floor(Math.random() * cardsColors.length);
const color = cardsColors[randomIdx];
console.log(color);
//   const timer = {
//     seconds: 0,
//     minutes: 0, 
//     clerTimer: -1
//   };

//   /*----- state variables -----*/
let Board = 0;
let cardClicked = null;
  
//   /*----- cached elements  -----*/
//   const message = document.querySelector('#header');
//   const restartBtn = document.querySelector('#restart');
//   //to flip the cards
//   //const cards = document.querySelectorAll('.cards');

//   /*----- event listeners -----*/
  document.getElementById('cards').addEventListener('click', handleClick);
  startBtn.addEventListener('click', initialize);
//   //to flip the cards 
//  // cards.forEach(cards => cards.addEventListener('click', flipCard));
  
//   /*----- functions -----*/
  
// initialize();
  
function initialize() {
    const randomIdx = Math.floor(Math.random() * cardsColors.length);
    const color = cardsColors[randomIdx];

    cardsColors.splice(randomIdx, 1);
    render();
  }

// function handleClick(evt) {
//     if(cardClicked ) {

// } if(timer.seconds == 0 && timer.minutes == 0){
//     resetTimer();
// } else if () {

// } else{
// return;
// }
// };
  
// function startTimer () {
//     if (timer.seconds === 59) {
//       timer.minutes++;
//       timer.seconds = 0;
//     } else {
//       timer.seconds++;
//     }


// function resetTimer() {
//         clearInterval(timer.clearTime);
//         timer.seconds = 0;
//         timer.minutes = 0;
//         $(".timer").text("0:00");
//         timer.clearTime = setInterval(startTimer, 1000);
//       }

//     //   shuffle cards
// function updateCards() {
//         deck = shuffle(deck);
//         const idx = 0;
//       }

//check card for match
// function checkMatch(card) {
//       const card = document.querySelectorAll('colors')
//       const firstCard = cardClicked[0]
//       const secondCard = cardClicked[1]
//       if( firstCard === )
//       }

// //Check if winner
// function checkWinner() {
//     if (matched === 16) {
//       return true;
//     } else {
//       return false;
//     }
//   }

  
//   // Resets game state
//   function restartGame ()  {
//     resetGame();
//   };
 
//  //resests cards
//  const resetCards = function() {
//     open.forEach(function(card) {
//     });
//   };

// //reset board
// function resetBoard () {
//     match = 0;
//     resetTimer();
//     updateCards();
//   };

// function renderMessage() {
//     if (winner) {
//       message.innerHTML = `Congrats! You beat the timer!`;
//     } else {
//       message.innerHTML = "Too Slow! Better luck next time";
//     }
//   }
