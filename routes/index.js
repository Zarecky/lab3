var express = require('express')
var router = express.Router()

let obj = null

router.post('/', (req, res, next) => {
  if (obj) {
    res.status(400).send()
  } else {
    if (!(Object.keys(req.body).length === 0 && req.body.constructor === Object)) {
      obj = req.body
    }
    res.send()
  }
})

router.put('/', (req, res, next) => {
  if (!obj) {
    res.status(400).send()
  } else {
    if (!(Object.keys(req.body).length === 0 && req.body.constructor === Object)) {
      obj = req.body
    }
    res.send()
  }
})

router.patch('/', (req, res, next) => {
  if (!obj) {
    res.status(400).send()
  } else {
    Object.keys(req.body).forEach(key => {
      obj[key] = req.body[key]
    })
    res.send()
  }
})

router.get('/', (req, res, next) => {
  res.json(obj)
})

module.exports = router;
