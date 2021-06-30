const express = require('express');
const Profile = require('../Models/profileModel');
const router =express.Router();

router.route("/profile").post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const newReviewer = new Profile({
        name,
        address,
    
    });

    newReviewer.save();
});


router.route("/viewprofile").get((req, res) => {
    Profile.find();
});


module.exports = router;