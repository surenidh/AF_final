const mongoose = require("mongoose");

const researchSchema = {
	title: String,
	description: String

}

const Research = mongoose.model("Research", researchSchema);
module.exports = Research;
