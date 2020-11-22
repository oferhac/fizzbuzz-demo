const CONSTS = require('../consts');

module.exports.calculateFizzbuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
        return `${CONSTS.FIZZ} ${CONSTS.BUZZ}`;
    } else if (number % 3 === 0) {
        return CONSTS.FIZZ;
    } else if (number % 5 === 0) {
        return CONSTS.BUZZ;
    } else {
        return number;
    }
};
