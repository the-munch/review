const express = require('express');
const db = require('../database/index.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Review = require('../database/reviews.js');
let app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text({type: 'json'}));

app.get('/reviews', (req, res) => {
    Review.find(function(err, Review) {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(Review);
    })
});

app.listen(port, () => console.log(`Server is listening on ${port}...`));
module.exports = app;