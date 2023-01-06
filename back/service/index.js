const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = 'mongodb+srv://ABChishevich:p7VzV7jCTw0fqlAv@cluster0.qiit4v7.mongodb.net/bookstore?retryWrites=true&w=majority';


const fs = require('fs');
const cors = require('cors');

const bookRouter = require('./modules/book/routes/bookRouter');

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json())


app.use('/book', bookRouter);

app.use(function(request, response, next){
    response.status(404).send('that page is not find');
});

mongoose.set('strictQuery', false);

const connectDB = async () =>  {
try {
        await mongoose.connect(uri, { useUnifiedTopology: true}, function(error){
        if(error){return console.log(error);}
        app.listen(3001)
    } );
    console.log(`Mongo db connected`);
} catch (error) {
    console.log(error);
    process.exit(1);
}
}

connectDB();



const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
