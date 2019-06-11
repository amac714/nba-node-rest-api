// player_positions routes

const express = require('express');
const router = express.Router();
const db = require('../dbcon.js');
const Positions = require('../queries/Positions');


// display players with their positions
router.get('/', (req, res) => {
  db.query(Positions.getPlayerPositions(), (err, data) => {
    if(err) {
      res.status(404);
      console.error(err);
    } else {
      res.json({ data });
    }
  });
});

// add a relationship between a player and their position
router.post('/add', (req, res) => {
  const inserts = [req.body.player, req.body.position];
  db.query(Positions.addPlayerPosition(), inserts, (err, data) => {
    if(err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).send('Player-Position relationship added');
    }
  });
});

// delete a relationship between player and position
router.delete('/:player_id/:position_id', (req, res) => {
  const inserts = [req.params.player_id, req.params.position_id];
  db.query(Positions.deletePlayerPosition(), inserts, (err, data) => {
    if(err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).send('Relationship deleted');
    }
  });
});

// display all types of positions
router.get('/all', (req, res) => {
  db.query(Positions.displayPositions(), (err, data) => {
    if (err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).json({ data });
    }
  });
});

// create a new position
router.post('/create', (req, res) => {
  const inserts = [req.body.position];
  db.query(Positions.createPosition(), inserts, (err, data) => {
    if (err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).send('Position created');
    }
  });
});

// delete position
router.post('/delete/:id', (req, res) => {
  const inserts = [req.params.id];
  db.query(Positions.deletePosition(), inserts, (err, data) => {
     if (err) {
       res.status(404);
       console.error(err);
     } else {
       res.status(200).send('Position deleted');
     }   
  });
});

module.exports = router;
