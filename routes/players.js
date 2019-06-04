// Players Routes

const express = require('express');
const router = express.Router();
const db = require('../dbcon.js');
const Players = require('../queries/Players');

// gets all players & their team affiliation
router.get('/', (req, res) => {
  db.query(Players.getAllPlayers(), (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).json({ data });
    }
  });
});

// add a player
router.post('/add', (req, res) => {
  if (req.body.team_name === 'NULL') {
    req.body.team_name === null;
  }

  const inserts = [
    req.body.player_fname,
    req.body.player_lname,
    req.body.age,
    req.body.height,
    req.body.team_name,
  ];

  db.query(player.getAddPlayerSQL(), inserts, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).send('Player successfully added.');
    }
  });
});

// delete a player
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM players WHERE id=?';
  const inserts = [req.params.id];
  db.query(Players.deletePlayer(), inserts, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).send('Player deleted successfully.');
    }
  });
});

// get 1 player by id to update
router.get('/:id', (req, res) => {
  const inserts = [req.params.id];
  db.query(Players.getOnePlayer(), inserts, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).json({ data });
    }
  });
});

// update a player by id
router.put('/:id', (req, res) => {
  if (req.body.team_name === 'NULL') {
    req.body.team_name === null;
  }

  const inserts = [
    req.body.player_fname,
    req.body.player_lname,
    req.body.age,
    req.body.height,
    req.body.team_name,
    req.params.id
  ];

  db.query(
    Players.updatePlayer(),
    inserts,
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(400).send(err);
      } else {
        res.status(200).send('Player update success.');
      }
    }
  );
});

// search for a player by first and last name
router.post('/search', (req, res) => {
  const inserts = [req.body.player_fname, req.body.player_lname];
  db.query(Players.searchForPlayer(), inserts, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).json({data: data[0]});
    }
  });
});

module.exports = router;
