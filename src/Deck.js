'use strict';

var Card = require('../src/Card');

class Deck {
  constructor () {
    this.cardNumber = 13;
    this.suitNumber = 4;
  }

  deal () {
    const randomNumberInterval = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

    const randomNumber = randomNumberInterval(1, this.cardNumber);
    const randomSuit = randomNumberInterval(1, this.suitNumber);

    return new Card(randomNumber, randomSuit);
  }
}
module.exports = Deck;