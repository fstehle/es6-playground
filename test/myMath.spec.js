// Import chai.
let chai = require('chai'),
    path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Math class.
let MyMath = require(path.join(__dirname, '..', 'myMath'));

describe('MyMath', () => {
    describe('toInt', () => {
        it('returns a valid int', () => {
            MyMath.toInt("10").should.equal(10);
        });

    });
});