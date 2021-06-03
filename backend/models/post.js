const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: false
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  postDate: {
    type: Date,
    required: true
  },
  latitude: {
    type: String,
    require: false
  },
  longitude: {
    type: String,
    require: false
  }
});

module.exports = mongoose.model('Post', postSchema)
