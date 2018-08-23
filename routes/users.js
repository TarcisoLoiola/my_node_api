var express = require('express');
var router = express.Router();
var db = require('../models');
const passport = require("passport");

/* GET users listing. */
router.get('/users', (req, res, next) => {
  db.users.findAll({})
    .then(data => {
      res.json(data);
    })
});

router.get('/user/:id', (req, res, next) => {
  const id = req.params.id;
  db.users
    .findOne({
      where: {
        id
      }
    }
    )
    .then(data => {
      res.json(data);
    })
});

router.get('/user-email/:email', (req, res, next) => {
  console.log(req.params.email)
  const email = req.params.email;
  db.users
    .findOne({
      where: {
        email
      }
    }
    )
    .then(data => {
      res.json(data);
    })
});
  
module.exports = router;