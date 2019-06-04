// Teams routes

const express = require('express');
const router = express.Router();
const pool = require('../dbcon.js');

router.put('/:id', (req, res) => {
  const testQuery =
    'UPDATE players SET player_fname=?, player_lname=?, age=?, height=?, team_id=? WHERE id=?';

    const inserts = [
      req.body.player_fname,
      req.body.player_lname,
      req.body.age,
      req.body.height,
      req.body.team_name,
      req.params.id
    ];

 pool.getConnection(function(err, connection) {
  if (err) throw err;

  connection.query(testQuery, inserts, function(error, results, fields) {
    connection.release();
    if (error) {
      console.log(error);
      return res.status(400).send(err);
    } else {
      return res.status(200).send({ data: results });
    }
  });
});
});

module.exports = router;