/*
    Importing requirements
        Server Connection: require express
        DB Conection: require mongoose
        secrets: require dotenv/config

    Middleware
    Connecting to the db
    Listening to Port
    
    

*/
const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// Init express
const app = express();

// defining port @ 3000 or heroku's port
const port = process.env.PORT || 3000;

// Import Routes from api_routes.js
const apiRoute = require('./routes/api-CRUD-routes');


// Middlewares
app.use(express.json()); //parse incoming request with json payload
app.use(express.urlencoded({ extended: true })); //parse incoming request with json payload
app.use('/api', apiRoute); //route any /api urls to the apiRoute



// Home Page Route - home msg
const welcomeMsg = `Welcome to my CRUD REST API application.
Official documentation exists at => https://github.com/mukhtarB/CRUD-REST-API---NodeJs_Express_and_Mongodb`
app.get('/', (req, res) => {
    res.send(welcomeMsg)
});



//Connecting to the cloud db with mongoose
mongoose.connect(process.env.CLOUD_DB_ACCESS,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    },
    ()=> {
    console.log("Connected to DB");
});


//listening to port @:3000
app.listen(port, () => {console.log(`Server connected at port ${port}`)});