// Teams routes

const express = require('express');
const router = express.Router();
const db = require('../dbcon.js');
const Teams = require('../queries/Teams');

// get list of all Teams in db
router.get('/', (req, res) =>{
  db.query(Teams.getAllTeams(), (err, data) => {
    if(err) {
      console.error(err);
    } else {
      res.status(200).json({ data });
    }
  });
});

// Add a team to the db
// not really useful in this API because NBA only has 30 teams and 
// you cant just add a random team, but I'm gonna leave this here because I 
// didnt seed the db with data. In the future, I can add a middleware to check auth.
router.post('/add', (req, res) => {
  const inserts = [req.body.team_name, req.body.div_id];
  db.query(Teams.addTeam(), inserts, (err, data) =>{
    if(err) {
      console.error(err);
    } else {
      res.status(200).send('Team added successfully');
    }
  });
});

// display 1 team
router.get('/:id', (req, res, next) => {
  const inserts = [req.params.id];
  db.query(Teams.getOneTeam(), inserts, (err, data) => {
    if(err) {
      console.error(err);
    } else {
      res.status(200).json({ data });
      next();
    }
  });
});

// update a team
router.put('/:id', (req, res) => {
  const inserts = [req.body.team_name, req.body.div_id, req.params.id];
  db.query(Teams.updateTeam(), inserts, (err, data) => {
    if(err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).json({ msg: `${inserts[0]} has been updated`});
    }
  });
});

// delete a team
router.delete('/:id', (req, res) => {
  const inserts = [req.params.id];
  db.query(Teams.deleteTeam(), inserts, (err, data) => {
    if(err) {
      res.status(404);
      console.error(err);
    } else {
      res.status(200).send('Team deleted');
    }
  });
});
module.exports = router;