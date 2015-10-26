// Import chai.
import chai from 'chai';
import path from 'path';

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Math class.
import MyMath from '../myMath';

describe('MyMath', () => {
  describe('toInt', () => {
    it('returns a valid int', () => {
      MyMath.toInt("10").should.equal(10);
    });

  });

  describe('sqrt', () => {
    it('returns the correct square root', () => {
      MyMath.sqrt(9).should.equal(3);
    });

  });
});
