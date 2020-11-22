const fizzbuzzLogic = require('../../src/logic/fizzbuzz');
const expect = require('chai').expect;
const CONSTS = require('../../src/consts');

describe('calculateFizzbuzz', function() {

    it('should return the correct fizzbuzz result', function() {
        expect(fizzbuzzLogic.calculateFizzbuzz(1)).to.eq(1);
        expect(fizzbuzzLogic.calculateFizzbuzz(2)).to.eq(2);
        expect(fizzbuzzLogic.calculateFizzbuzz(3)).to.eq(CONSTS.FIZZ);
        expect(fizzbuzzLogic.calculateFizzbuzz(4)).to.eq(4);
        expect(fizzbuzzLogic.calculateFizzbuzz(5)).to.eq(CONSTS.BUZZ);
        expect(fizzbuzzLogic.calculateFizzbuzz(6)).to.eq(CONSTS.FIZZ);
    });

});
