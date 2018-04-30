'use strict';

var Deck = require('../src/Deck');
var Hand = require('../src/Hand');

var deck = new Deck();


const createHand = () => {
const card1 = deck.deal();
const card2 = deck.deal();

return new Hand(card1, card2);
}

const dealerPlay = () => {
const dealer = createHand();

while (dealer.sum() < 17) {
    dealer.getCard(deck.deal());
}

return dealer;
}

const userPlay= () =>{
const player = createHand();

let result = confirm("Your Hand Is: "+ player.printHand() +". Hit(OK) or Stick(Cancel)?");

while(result) {
    player.getCard(deck.deal());
    result = confirm("Your Hand Is: "+ player.printHand() +". Hit(OK) or Stick(Cancel)?");
    if (player.sum() > 21) {
        result = false;
    }
}

return player;
}

const winner = (userHand, dealerHand) => {
  if ((userHand < dealerHand) && (dealerHand <= 21) || (userHand > 21)) {
      return "You Lost :(";
    } else if ((dealerHand < userHand) && (userHand <= 21) || (dealerHand > 21)) {
        return "You Won !!!";
    } else {
      return "It's a tie -_-";
    }
}

const start = () => {
  const userHand = userPlay();
  const dealerHand = dealerPlay();
  console.log("Player's hand: " + userHand.printHand());
  console.log("Player's sum: " + userHand.sum());
  console.log("Dealer's hand: " + dealerHand.printHand());
  console.log("Dealer's sum: " + dealerHand.sum());
  console.log("Winner: " + winner(userHand.sum(), dealerHand.sum()));
}
start();