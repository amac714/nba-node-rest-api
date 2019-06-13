require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const players = require('./routes/players.js');
const teams = require('./routes/teams.js');
const positions = require('./routes/positions.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Using routes
app.use('/players', players);
app.use('/teams', teams);
app.use('/positions', positions);

// Endpoint doesn't exist
app.use((req, res, next) => {
  const err = new Error("Endpoint Not found");
  err.status = 404;
  next(err);
});

module.exports = app;