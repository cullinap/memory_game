// main.js
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

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener("click", flipCard);
	}
}

createBoard();




// var addImage = document.createElement('img');
// addImage.setAttribute('src', 'images/back.png');

// var cardElement = cards[0].cardImage;

// //addImage.setAttribute('alt', cards[i].rank + " of " +cards[i].suit);
// document.getElementById("game-board").appendChild(addImage)
// document.addEventListener("click", function() {
// 	document.getElementById("game-board").appendChild(addImage.setAttribute('src', 'images/queen-of-hearts.png'));
// });



//document.addEventListener("click", flipCard(0));

// for (var i = 0; i < cards.length; i++) {
// 	var addImage = document.createElement('img');
// 	addImage.setAttribute('src', 'images/back.png');
// 	addImage.setAttribute('alt', cards[i].rank + " of " +cards[i].suit);
// 	document.getElementById("game-board").appendChild(addImage);
// }

// for (var i = 0; i < cards.length; i++) {
// 	var addImage = document.createElement('img');
// 	addImage.setAttribute('src', cards[i].cardImage);
// 	addImage.setAttribute('alt', cards[i].rank + " of " +cards[i].suit);
// 	document.getElementById("game-board").appendChild(addImage);
// }









