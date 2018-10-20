const express = require('express')
const router = express.Router()
const db = require('../models')
// const passport = require("passport")

/* GET agenda listing. */
router.get('/schedule/:startDate/:endDate', (req, res, next) => {
  const startDate = req.params.startDate
  const endDate = req.params.endDate

  const where = {
    scheduledDate: {
      $between: [startDate, endDate]
    }
  }
  db.schedules.findAll({
    where
  })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.get('/schedule/:scheduledDate', (req, res, next) => {
  const scheduledDate = req.params.scheduledDate
  db.schedules.findAll({
    where: {
      scheduledDate
    }
  })
  .then(data => res.json(data))
  .catch(error => res.json(error))
})

/* GET agenda listing. */
router.get('/schedule/:id', (req, res, next) => {
  const id = req.params.id
  db.schedules
    .findOne({
      where: {
        id
      }
    })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

/* POST new Agenda listing. */
router.post('/schedule/agenda/new', (req, res, next) => {
  const scheduledDate = req.body.scheduledDate
  const scheduledTime = req.body.scheduledTime
  const userID = req.body.userID
  db.schedules
    .create({
      scheduledDate,
      scheduledTime,
      userID
    })
    .then( data => res.json( data ))
    .catch( error => res.json( error ))
})

router.get('/schedule/remove/:id', (req, res, next) => {
  console.log(req.params.id)
  const id = req.params.id
  db.schedules
    .destroy({
      where: {
        id
      }
    })
    .then( data => res.json( data ))
    .catch( error => res.json( error ))
})

module.exports = router