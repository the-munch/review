// const db = require('./index.js');
const mongoose = require('mongoose');

let reviewSchema = mongoose.Schema({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    elite: Boolean
  });
  
  let Review = mongoose.model('Review', reviewSchema);
  
  
  module.exports = Review;