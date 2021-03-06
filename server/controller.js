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
      console.log('error occurring retrieved saved sightings', err)
      res.send(500)
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
      res.send(data)
    })
    .catch(err => {
      console.log('error occurred saving sighting, ', err)
      res.send(500)
    })
  },
  editBird: (req, res) => {
    return Bird.findOneAndUpdate({
      id: req.body.data
    }, 
    {
      date: req.body.date,
      location: req.body.location,
      story: req.body.story
    })
    .then(data => {
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
        data.images()
        .then(images => {
          var temp = images.slice()
          for(let i = 0; i < temp.length; i++) {
            if(temp[i].substr(temp[i].length-3, 3) === 'svg' ||
                temp[i].substr(temp[i].length-3, 3) === 'ogv' ||
                temp[i].substr(temp[i].length-3, 3) === 'ogg' ||
                temp[i].substr(temp[i].length-3, 3) === 'png' ||
                temp[i].substr(temp[i].length-3, 3) === 'PNG' ||
                temp[i].substr(temp[i].length-3, 3) === 'ebm') {
              temp.splice(i, 1)
              i--
            }
          }
          res.send(temp)
        })
        .catch(err => {
          console.log('error occurred retrieving images from Wikipedia: ', err)
          res.send(500)
        })
      })
      .catch(err => {
        console.log('error occurred in getBirdData()')
        res.sendStatus(500)
      })
  },
  deleteBird: (req, res) => {
    return Bird.deleteOne({
      id: req.query.id
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.send(500)
    })
  },
  getApiKey: (req, res) => {
    let { GOOGLE_KEY } = require('../google.js')
    res.send(JSON.stringify(GOOGLE_KEY))
  }
}