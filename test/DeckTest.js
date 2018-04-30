var should = require('chai').should();
var expect = require('chai').expect;
var Deck = require('../src/Deck');
var Card = require('../src/Card');

describe('deck', () => {
  it("if its dealt it should retur with a card object", () => {
    var newDeck = new Deck();
    expect(newDeck.deal() instanceof Card).to.equal(true);
  });
});