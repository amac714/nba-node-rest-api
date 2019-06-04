
// Setting up server
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./dbcon.js');

// Routes
const players = require('./routes/players.js');
const teams = require('./routes/teams.js');
const positions = require('./routes/positions.js');
const conference = require('./routes/conference.js');
const divisions = require('./routes/divisions');

const app = express();

const port = process.env.PORT || 4040;


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
app.use('/conference', conference);
app.use('/divisions', divisions);



process.on('SIGINT', function() {
  console.log('\nShutting down with SIGINT (Ctrl-C)');
  // end connection 
  process.exit();
});


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});