// player_positions routes

const express = require('express');
const router = express.Router();
const connection = require('../dbcon.js');

router.get('/', (req, res) => {
  const testQuery = 'SELECT positions.id, positions.position_name FROM positions ORDER BY positions.id';

  connection.query(testQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

module.exports = router;
