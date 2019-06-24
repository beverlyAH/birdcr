const axios = require('axios')
const wikijs = require('wikijs').default
const info = require('infobox-parser')
const { Bird } = require('../db/models.js')

const wiki = wikijs()

module.exports = {
  getBirds: (req, res) => {

  },
  saveBird: (req, res) => {

  },
  getBirdData: (req, res) => {
    wiki.page(req.body.query)
      .then(data => {
        data.mainImage().then(result => console.log(result))
        res.send(data.mainImage)
      })
      .catch(err => {
        res.send(err)
      })
  }
}