const fizzbuzzLogic = require('../../src/logic/fizzbuzz');
const expect = require('chai').expect;
const CONSTS = require('../../src/consts');

describe('calculateFizzbuzzForSpecificValue', function() {

    it('should return the correct fizzbuzz result for specific number', function() {
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(1)).to.eq(1);
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(2)).to.eq(2);
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(3)).to.eq(CONSTS.FIZZ);
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(4)).to.eq(4);
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(5)).to.eq(CONSTS.BUZZ);
        expect(fizzbuzzLogic.calculateFizzbuzzForSpecificValue(6)).to.eq(CONSTS.FIZZ);
    });

    it('should raise an exception if got invalid fizzbuzz number', function() {
        expect(() => fizzbuzzLogic.calculateFizzbuzzForSpecificValue(-1)).to.throw();
    });
});

describe('calculateFizzbuzz', function() {
    it('should return the correct fizzbuzz result', function() {
        expect(fizzbuzzLogic.calculateFizzbuzz(1)).to.eq('1');
        expect(fizzbuzzLogic.calculateFizzbuzz(2)).to.eq('1 2');
        expect(fizzbuzzLogic.calculateFizzbuzz(3)).to.eq(`1 2 ${CONSTS.FIZZ}`);
        expect(fizzbuzzLogic.calculateFizzbuzz(4)).to.eq(`1 2 ${CONSTS.FIZZ} 4`);
        expect(fizzbuzzLogic.calculateFizzbuzz(5)).to.eq(`1 2 ${CONSTS.FIZZ} 4 ${CONSTS.BUZZ}`);
        expect(fizzbuzzLogic.calculateFizzbuzz(6)).to.eq(`1 2 ${CONSTS.FIZZ} 4 ${CONSTS.BUZZ} ${CONSTS.FIZZ}`);
    });
});
