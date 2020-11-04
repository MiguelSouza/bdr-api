const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./config/database');

//Rotas
const cursoRoute = require('./routes/escolaRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api', cursoRoute);

module.exports = app;