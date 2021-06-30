const express = require("express");
const router = express.Router();
const Workshop = require("../models/workshopModel");

router.route("/viewWorkshops").get((req,res) => {
	Workshop.find().
		then(foundWorkshop => res.json(foundWorkshop))
});
module.exports = router;
