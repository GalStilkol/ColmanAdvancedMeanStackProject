const mongoose = require('mongoose');

const scrapSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [],
    required: true
  },
  instructions: {
    type: [],
    required: true
  },
    servings: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Scrap', scrapSchema)
