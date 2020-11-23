const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const NOT_ALLOWED_STATUS_CODE = 405;
const NOT_FOUND_STATUS_CODE = 404;
const bodyParser = require('body-parser');
const controllers = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/fizzbuzz', (req, res) => {
    controllers.getFizzbuzz(req.body, res);
});

app.use('/fizzbuzz', (req, res) => {
    res.sendStatus(NOT_ALLOWED_STATUS_CODE);
});

app.use('/*', (req, res) => {
    res.sendStatus(NOT_FOUND_STATUS_CODE);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
