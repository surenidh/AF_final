const mongoose = require('mongoose');

const profileSchema = {
    name: String,
    address: String,
}


const Profile = mongoose.model("profile",profileSchema);
module.exports = Profile;