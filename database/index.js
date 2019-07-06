const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database is connected!')});

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
  let save = ((err, review) => {
    if(err) { console.error(err);}
  })

  module.exports.Review = Review;