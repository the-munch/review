const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text({type: 'json'}));



let port = 8080;
app.listen(port, console.log(`Server is listening on ${port}...`));