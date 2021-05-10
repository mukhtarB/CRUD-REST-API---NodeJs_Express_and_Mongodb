/*
    Server Connection: Requiring express & running the app on port 3000 
*/
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running on post function');
// });



//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home page')
});

app.get('/post', (req, res) => {
    res.send('We are on post page')
});

//listening to port @:3000
app.listen(port, () => {console.log(`Server connected at port ${port}`)});