const mongoose = require('mongoose')

const birdSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  date: Date,
  time: String,
  image: String,
  latitude: Number,
  longitude: Number,
  story: String,
  description: String,
  color: String
})

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird