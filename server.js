const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello krasniukevych</h1>');
});

app.get('/data', (req, res) => {
    res.send('<h1>Data route</h1>');
});

app.listen(3000);
