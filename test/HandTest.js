var should = require('chai').should();
var expect = require('chai').expect;
var Hand = require('../src/Hand');
var Card = require('../src/Card');

describe('Hand', () => {
  describe('constructor', ()=>{
    it("should expect an error if hand is empty", () => {
      expect(function(){new Hand()}).to.throw("You can't have empty Hand, you need at least two cards"); 
    });

    it("should expect an error if hand has only one card, need two cards", () => {
      expect(function(){new Hand(new Card(1, 1))}).to.throw("You need at least two cards"); 
    });

    it("should not throw an exception", () => {
      expect(function(){new Hand(new Card(1, 1), new Card(1, 1))}).to.not.throws; 
    });
  });

  describe('getCard', ()=> {
    it('add new card', ()=>{
      var c1= new Card(1,1)
      var c2= new Card(1,2)
      var c3= new Card(1,3)
      underTest = new Hand(c1, c2);
      underTest.getCard(c3);
      expect(underTest.getCards()).to.eql([c1,c2,c3])
    })
  })

   describe('printHand', ()=> {
     it("Should return a string", () => {
       var c1= new Card(2,1)
       var c2= new Card(2,3)
       underTest = new Hand(c1, c2);
       expect(underTest.printHand()).to.equal("2 of Clubs, 2 of Hearts");
     })
   });

   describe('sum', ()=> {
     it("2 + 2 should return 4", () => {
       var c1= new Card(2,1)
       var c2= new Card(2,3)
       underTest = new Hand(c1, c2);
       expect(underTest.sum()).to.equal(4);
     });
     it("4 + 3 should return 7", () => {
       var c1= new Card(4,1)
       var c2= new Card(3,3)
       underTest = new Hand(c1, c2);
       expect(underTest.sum()).to.equal(7);
     });
     it("2 Aces should return 12", () => {
       var c1= new Card(1,1)
       var c2= new Card(1,3)
       underTest = new Hand(c1, c2);
       expect(underTest.sum()).to.equal(12);
     });
     it("Two 8s and an Ace should return ", () => {
       var c1= new Card(1,1)
       var c2= new Card(8,2)
       var c3= new Card(8,3)
       underTest = new Hand(c1, c2);
       underTest.getCard(c3);
       expect(underTest.sum()).to.equal(17);
     });
     it("One Ace and an 8 should return 19", () => {
       var c1= new Card(1,1)
       var c2= new Card(8,2)
       underTest = new Hand(c1, c2);
       expect(underTest.sum()).to.equal(19);
     });
   });
});

