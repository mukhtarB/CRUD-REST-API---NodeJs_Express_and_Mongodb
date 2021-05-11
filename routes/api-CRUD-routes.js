const express = require('express');
const router = express.Router();
const apiPostModel = require('../models/api-CRUD-Model');



router.get('/', (req, res) => {
    res.send('We are on api page.')
});

router.get('/get-all-from-db', (req, res) => {
    res.send('We are on the api/post route');
});

router.post('/post-to-db', async (req, res)=> {
    // creating post
    const postData = new apiPostModel({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    });

    // attempting save post to db
    try{
        const postedData = await postData.save();

        // if successful return payload (msg, data)
        res.status(200).json({message: "SUCCESSFULLY posted data to db!", data: postedData});
    } catch (err) {
        res.status(500).json({message: "Saving data to db FAILED, please check err message.", data: "Error " + err});
    }
});


module.exports = router;