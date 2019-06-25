const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const birdSchema = mongoose.Schema({
  name: String,
  date: Date,
  image: String,
  location: String,
  story: String
})

birdSchema.plugin(AutoIncrement, {inc_field: 'id'})

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird