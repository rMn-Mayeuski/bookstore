const express = require('express');
const app = express();

const fs = require('fs');
const cors = require('cors');
const jsonParser = express.json();

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.listen(function(request,response){}, 3000)