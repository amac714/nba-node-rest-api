// DB config file

require('dotenv').config();
const mysql = require('mysql');

// creating a pool of connections
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// utility methods

function executeQuery(sql, inserts, callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    } else {
      if (connection) {
        connection.query(sql, inserts, function(error, results, fields) {
          connection.release();
          if (error) {
            return callback(error, null);
          }
          return callback(null, results);
        });
      }
    }
  });
}

function query(sql, inserts, callback) {
  executeQuery(sql, inserts, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}


// export utility
module.exports = {
  query: query,
};
