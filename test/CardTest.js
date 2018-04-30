var should = require('chai').should();
var expect = require('chai').expect;
var Card = require('../src/Card');

describe('Card', () => {
  describe('toString', ()=>{
  it("if Card is 1,4 it should return Ace of Clubs", () => {
    var underTest = new Card(1, 1);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("Ace of Clubs");
  });

  it("if Card is 2,2 it should return 2 of Diamonds", () => {
    var underTest = new Card(2, 4);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("2 of Diamonds");
  });

  it("if Card is 11,1 it should return Jack of Clubs", () => {
    var underTest = new Card(11, 1);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("Jack of Clubs");
  });

  it("if Card is 12,2 it should return Queen of Spades", () => {
    var underTest = new Card(12, 2);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("Queen of Spades");
  });

  it("if Card is 13,3 it should return King of Hearts", () => {
    var underTest = new Card(13, 3);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("King of Hearts");
  });

  it("if Card is 6,4 it should return 6 of Diamonds", () => {
    var underTest = new Card(6, 4);
    let actualValue = underTest.toString();
    expect(actualValue).to.equal("6 of Diamonds");
  });


});





describe('getValue', () => {
    it("if player has two Aces value should be 11", () => {
      var underTest = new Card(1, 1);
      let actualValue = underTest.getValue();
      expect(actualValue).to.equal(11);
    });
  });
});