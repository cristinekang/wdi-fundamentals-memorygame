var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var updateScoreBoard = function () {
  scoreBoard.innerHTML = 'Your Score: <b>' + gameScore + '</b>';
}

//SCORE BOARD
var scoreBoard = document.createElement('div');
var gameScore = 0;
updateScoreBoard();
//scoreBoard.style.backgroundColor = 'yellow';
scoreBoard.className = 'scoreboard';
var containerElement = document.querySelector('main');
containerElement.insertBefore(scoreBoard, document.getElementById('game-board'));
//console.log(containerElement.childNodes);




var correctMessage = function () {
  alert('You found a match!');
  gameScore++;
  updateScoreBoard();
};

var incorrectMessage = function () {
  alert('Sorry, try again.');
};


var cardsInPlay = []; //references each card object (being in brackets)
var domsInPlay = []; //references DOM object of each image (cardElement)

var checkForMatch = function (cardId) {
  //console.log(this);
  //console.log(cardsInPlay);
  //console.log(domsInPlay);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    return;
  } else if (cardsInPlay.length <= 1) {
    return;
  } else if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    setTimeout(correctMessage, 100);
  } else {
    setTimeout(incorrectMessage, 100);
    //domsInPlay[0].setAttribute('src','images/back.png');
    //domsInPlay[1].setAttribute('src','images/back.png');
  }
  cardsInPlay = [];
  domsInPlay = [];
};


var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  //console.log(cardId);
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId]);
  domsInPlay.push(this);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
};


var gameBoard = document.getElementById('game-board');

var createBoard = function () {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
    console.log(cardElement);
  }
};

createBoard();


//RESET BUTTON
var resetPage = function() {
  location.reload();
};
var resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetPage);
