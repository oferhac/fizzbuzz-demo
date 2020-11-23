# FizzBuzz demo

FizzBuzz-demo is an express application for getting fizzbuzz value per input number 

## Installation

for local development:

    1. clone the project    
    2. npm install
    3. npm start
    for running tests:
    npm test
    
for building docker image:

    1. clone the project    
    2. docker build -t TARGET .

## Usage
    http POST request to /fizzbuzz with body { count: <number> }
    will return this count fizz buzz value.
    any other body that does not contain count or any other method to this url
    will get 405 (NOT ALLOWED METHOD) status code.
    any other api will return 404 (NOT FOUND)

## request example:

```
curl -X POST \
     http://localhost:3000/fizzbuzz \
     -H 'cache-control: no-cache' \
     -H 'content-type: application/json' \
     -H 'postman-token: 5ac3e585-9f10-3431-2872-266e8cbaf6bc' \
     -d '{ "count": 15 }'
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
