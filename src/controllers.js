const handleResponse = require('./shared/handleResponse').handleResponse;
const calculateFizzbuzz = require('./logic/fizzbuzz').calculateFizzbuzz;

module.exports.getFizzbuzz = (body, res) => {
  if (!body || !body.count || typeof body.count !== "number" || body.count < 1) {
      return handleResponse(res, null, { errorMsg: "invalid input", status: 400 });
  } else {
      const fizzBuzz = calculateFizzbuzz(body.count);
      return handleResponse(res, fizzBuzz);
  }
};
