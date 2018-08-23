var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/transactions', (req, res, next) => {
  db.users.findAll({})
  .then( data => {
    res.json(data);
  })
});

module.exports = router;
