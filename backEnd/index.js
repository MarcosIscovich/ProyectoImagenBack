const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db');

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});


app.listen(3000, () => {
    console.log('Servidor Funcionando');
});