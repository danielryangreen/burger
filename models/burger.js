const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  insertOne(burgerName, cb) {
    orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, false, (res) => cb(res));
  },
  updateOne(burgerId, cb) {
    orm.updateOne('burgers', 'devoured', true, 'id', burgerId, (res) => cb(res));
  },
};

module.exports = burger;
