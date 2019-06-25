var mongoose = require('mongoose');
var mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1/birdcr';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.log('error connecting to database.')
  } else {
    console.log('connected to database!')
  }
})

module.exports = db;