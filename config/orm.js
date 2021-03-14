const connection = require('./connection.js');

const orm = {
  selectAll(table, cb) {
    const queryString = 'SELECT * FROM ??';
    console.log(queryString);
    connection.query(
      queryString,
      [table],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  insertOne(table, col1, col2, val1, val2, cb) {
    const queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
    console.log(queryString);
    connection.query(
      queryString,
      [table, col1, col2, val1, val2],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  updateOne(table, col1, val1, col2, val2, cb) {
    const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    console.log(queryString);
    connection.query(
      queryString,
      [table, col1, val1, col2, val2],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
};

module.exports = orm;
