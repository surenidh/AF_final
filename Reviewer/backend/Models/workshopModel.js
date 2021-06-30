const mongoose = require("mongoose");

const workshopSchema = {
	title: String,
	description: String

}

const Workshop = mongoose.model("Workshop", workshopSchema);
module.exports = Workshop;
