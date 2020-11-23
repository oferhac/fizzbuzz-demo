# FizzBuzz demo

FizzBuzz-demo is an express application for getting fizzbuzz value per input number 

## Installation

for local development:

    1. clone the project    
    2. npm install
    3. npm run
    for running tests:
    npm test
    
for local development:

    1. clone the project    
    2. npm install
    3. npm run
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

## License
[MIT](https://choosealicense.com/licenses/mit/)
