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

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
}

var flipCard = function (cardId) {
  var cardOne = cards[0];
  var cardTwo = cards[2];

  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
console.log(cards[0].cardImage);
console.log(cards[0].suit);

flipCard(2);
console.log(cards[2].cardImage);
console.log(cards[2].suit);
