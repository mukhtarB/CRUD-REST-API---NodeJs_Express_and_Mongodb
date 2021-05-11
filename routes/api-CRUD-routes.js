const express = require('express');
const router = express.Router();
const apiModel = require('../models/api-CRUD-Model');


// ROUTE - /api
router.get('/', (req, res) => {
    res.send('We are on api page.')
});


// CREATE: Posting to db through 
// ROUTE - /api/post-to-db
router.post('/post-to-db', async (req, res)=> {
    // creating post
    const postData = new apiModel({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    });

    // attempting save post to db
    try{
        const postedData = await postData.save();

        // if successful, payload => ({msg, data})
        res.status(200).json({message: "SUCCESSFULLY posted data to db!", data: postedData});
    } catch (err) {
        // else payload => ({msg, err})
        res.status(500).json({message: "Saving data to db FAILED, see err message.", Error: "Error " + err});
    }
});


// READ (all): Fetching all data from db
// ROUTE - /api/get-from-db
router.get('/get-from-db', async (req, res) => {
    try{
        const db_data = await apiModel.find();

        //On success
        // if db is empty (is db arr < 1) ... set msg for an empty db
        msg = "Gotten ALL DB data"
        if (!db_data.length > 0) msg = "DB empty, You have no entries"

        // return payload => ({msg, data})
        res.status(200).json({message: msg, data: db_data});
    } catch (err) {
        // else payload => ({msg, err})
        res.status(500).json({message: "Request Failed", Error: "Error " + err});
    }
});


// READ (single): Fetch single mongo-document from db
// ROUTE - /api/get-from-db/:id
router.get('/get-from-db/:id', async (req, res) => {
    try{
        const single_db_data = await apiModel.findById(req.params.id);


        //On success
        // if single_db_data is empty (null), set msg = Entry does not exist
        msg = "Gotten Single DB Entry"
        if (!single_db_data) msg = `Entry with id: ${req.params.id} does not exist.`

        // payload => ({msg, data})
        res.status(200).json({message: msg, data: single_db_data});
    } catch (err) {
        // else payload => ({msg, err})
        res.status(500).json({message: "Request Failed", Error: "Error " + err});
    }
});


// UPDATE: Updating a data entry
// ROUTE - /api/update-db-entry/:id
router.put('/update-db-entry/:id', async (req, res) => {
    try{
        
        // resource => https://youtu.be/sEkRmVfc8XE
        const update_an_entry = await apiModel.findByIdAndUpdate(
            {_id: req.params.id}, req.body)
            .then( () => {
                    apiModel.findOne({_id: req.params.id}).then (updated_entry => {
                     // if successful => ({msg, data})
                    res.status(200).json({message: "Entry Updated", data: updated_entry});
                });
            });

       
    } catch (err) {
        // else payload => ({msg, err})
        res.status(500).json({message: "Request Failed", Error: "Error " + err});
    }
});


// DELETE: Deleting a single data entry
// ROUTE - /api/del-single-db-entry/:id
router.delete('/del-single-db-entry/:id', async (req, res) => {
    try{
        const del_single_db_data = await apiModel.findById(req.params.id);

        const deleted_entry = await del_single_db_data.remove()

        msg = "Entry deleted =>"

        // if successful => ({msg, data})
        res.status(200).json({message: msg, data: del_single_db_data});
    } catch (err) {
        // else payload => ({msg, err})
        res.status(500).json({message: "Request Failed. Possibility of deleted entry, check error msg", Error: "Error " + err});
    }
});





//exporting router
module.exports = router;