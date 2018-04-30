'use strict';
  class Card {
    getSuitName(suit) {
        var suitNames = ['Clubs','Spades','Hearts','Diamonds' ];
        return suitNames[suit-1];
    }

    constructor(number, suit) {
    this.getNumber = function() {
        return number;
    };
    this.getSuit = function() {
        return suit;
    };
    this.getValue = function() {
        if (number > 10) {
            return 10;
        } else if (number === 1) {
            return 11;
        } else {
            return number
        }
    }
    this.toString = function(){
        var numName = this.getCardName(number);
        var suitName= this.getSuitName(suit);            
        return numName + " of " + suitName;
    }
  }

  getCardName(number) {
          var numName;

          switch (number) {
            case 11:
              numName = "Jack";
              break;
            case 12:
              numName = "Queen";
              break;
            case 13:
              numName = "King";
              break;
            case 1:
                numName = "Ace";
                break;
            default:
              numName = number;
            }
            return numName;
    }
  }
module.exports = Card;