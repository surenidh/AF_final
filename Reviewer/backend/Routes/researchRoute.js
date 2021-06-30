const express = require("express");
const router = express.Router();
const Research = require("../models/researchModel");

router.route("/viewResearch").get((req,res) => {
	Research.find().
		then(foundResearch => res.json(foundResearch))
});
module.exports = router;
