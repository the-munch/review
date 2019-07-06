const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Review = require('../database/index.js');
let app = express();
const port = 3000;

// app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.text({type: 'json'}));

// app.use('/review', (req, res, next) => {
//     res.status(200).json({
//         message: 'Handling GET requests to /reviews!'
//     });
// });

// app.post('/reviews', (req, res) => {
//     // let userReview = JSON.parse(req.body);
//     res.status(200).json({
//         message: 'Handling POST requests to /reviews!'
//     });
// })

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET reviews are created'
    });
});

app.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST reviews are created'
    });
});

app.put('/review', (req, res) => res.send('Got a PUT request at /review'));
app.delete('/review', (req, res) => res.send('Got a DELETE request'));

app.listen(port, () => console.log(`Server is listening on ${port}...`));