'use strict';

class Hand {
    constructor(card1, card2){
        if (arguments.length === 0) throw "You can't have empty Hand, you need at least two cards";
        if (arguments.length === 1) throw "You need at least two cards";
        this.cardsArr = [card1, card2];
        this.getCards =()=> {
            return this.cardsArr;
        }
    }

    getCard (card){
        this.cardsArr.push(card);
    }

    printHand () {
       return  this.cardsArr.map(a => a.toString()).join(', ');
    }

    sum () {
        var acesArr = this.cardsArr.filter(card => {
            return card.getNumber() === 1;
        });

        var notAces = this.cardsArr.filter(card => {
            return card.getNumber() !== 1;
        });

        var sumNotAces = notAces.reduce(
            (a,b) => {
                var currentValue = b.getValue();
                return a + currentValue;
            }
            , 0);

        return acesArr.reduce((accumulator, current)=>{
            return accumulator + (accumulator>10?1:11);
        }, sumNotAces)
    }
}

module.exports = Hand;