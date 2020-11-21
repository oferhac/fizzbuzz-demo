const express = require('express')
const app = express()
const port = 3000;
const NOT_ALLOWED_STATUS_CODE = 405;
const NOT_FOUND_STATUS_CODE = 404;

app.post('/fizzbuzz', (req, res) => {
    res.send('Hello World!')
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
