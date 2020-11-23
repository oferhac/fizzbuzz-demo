const CONSTS = require('../consts');

module.exports.calculateFizzbuzz = (number) => {
    let res = '';
    for (let i = 1; i <= number; i++) {
        res += `${exports.calculateFizzbuzzForSpecificValue(i)} `;
    }
    return res.substring(0, res.length - 1);
};


module.exports.calculateFizzbuzzForSpecificValue = (number) => {
    if (number < 1) {
        throw new Error('got an invalid fizzbuzz number');
    }
    if (number % 5 === 0 && number % 3 === 0) {
        return `${CONSTS.FIZZ}${CONSTS.BUZZ}`;
    } else if (number % 3 === 0) {
        return CONSTS.FIZZ;
    } else if (number % 5 === 0) {
        return CONSTS.BUZZ;
    } else {
        return number;
    }
};
