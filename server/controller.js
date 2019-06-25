const axios = require('axios')
const wikijs = require('wikijs').default
const info = require('infobox-parser')
const Bird  = require('../db/models.js')

const wiki = wikijs()

module.exports = {
  getBirds: (req, res) => {
    return Bird.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  },
  saveBird: (req, res) => {
    return Bird.create({
      name: req.body.name,
      date: req.body.date,
      image: req.body.image,
      location: req.body.location,
      story: req.body.story
    })
    .then(data => {
      console.log(data)
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
  },
  getBirdData: (req, res) => {
    console.log(req.body.data.query)
    wiki.page(req.body.data.query)
      .then(data => {
        data.mainImage()
        .then(image => {
          res.send(image)
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}