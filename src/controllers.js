const handleResponse = require('./shared/handleResponse').handleResponse;
const calculateFizzbuzz = require('./logic/fizzbuzz').calculateFizzbuzz;

module.exports.getFizzbuzz = (body, res) => {
  if (!body || !body.count || typeof body.count !== "number") {
      return handleResponse(res, null, { error: "invalid input", status: 400 });
  } else {
      const fizzBuzz = calculateFizzbuzz(body.count);
      return handleResponse(res, fizzBuzz);
  }
};
