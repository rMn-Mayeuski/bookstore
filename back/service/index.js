const express = require('express');
const app = express();
const mongoose = require('mongoose');

const fs = require('fs');
const cors = require('cors');
const jsonParser = express.json();

const bookRouter = require('./routes/bookRouter');

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/book', bookRouter);

app.use(function(request, response, next){
    response.status(404).send('that page is not find');
});

mongoose.connect('mongodb://0.0.0.0:27017/bookstore', { useUnifiedTopology: true}, function(error){
    if(error) return console.log(error);
    app.listen(3001);
});