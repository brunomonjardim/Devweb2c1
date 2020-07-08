const express = require('express');
const hospitais = express.Router();
const cors = require('cors');


hospitais.use(cors());

hospitais.get('/', (req, res) => {
    res.send('Você acessou a rota Hospitais!');
});

module.exports = hospitais;