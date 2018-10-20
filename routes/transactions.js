const express = require('express');
const router = express.Router();
const db = require('../models');

/* GET transactions listing. */
router.get('/transactions', (req, res, next) => {
  db.transactions
    .findAll({})
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

router.get('/transaction/:id', (req, res, next) => {
  const id = req.params.id
  db.transactions
    .findOne({
      where: {
        id
      }
    })
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

router.get('/shared-with-me/:email', (req, res, next) => {
  const shared_with = req.params.email
  db.transactions
    .findOne({
      where: {
        shared_with
      }
    })
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

module.exports = router;
