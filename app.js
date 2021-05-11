/*
    Server Connection: require express
    DB Conection: require mongoose
    Parsing the request.body to populate it with request data for use: require body-parser
    secrets: require dotenv/config
*/
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();



// defining port @ 3000 or heroku's port
const port = process.env.PORT || 3000;


// Import Routes from api_routes.js
const apiRoute = require('./routes/api-CRUD-routes');

// Middlewares
app.use(express.json()); //parse incoming request with json payload
app.use('/api', apiRoute); //route any /api urls to the apiRoute



// Home Page Route
// home msg
const welcomeMsg = 'Welcome to my CRUD REST API application.\n Official documentation exists at: https://github.com/mukhtarB/CRUD-REST-API---NodeJs_Express_and_Mongodb'
app.get('/', (req, res) => {
    res.send(welcomeMsg)
});



//Connecting to the cloud db with mongoose
mongoose.connect(process.env.CLOUD_DB_ACCESS,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=> {
    console.log("Connected to DB");
});


//listening to port @:3000
app.listen(port, () => {console.log(`Server connected at port ${port}`)});