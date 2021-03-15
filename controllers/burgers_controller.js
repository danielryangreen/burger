const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

// get all the burgers from the database and render with Handlebars
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log('hbsObject', hbsObject);
    res.render('index', hbsObject);
  });
});

// post a new burger to the database
router.post('/api/burgers', (req, res) => {
  burger.insertOne(req.body.burgerName, (result) => {
    // send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// update the devoured flag for a burger
router.put('/api/burgers/:id', (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    // if no rows were changed, return 404
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
