const mongoose = require('mongoose');
const URI = "mongodb+srv://sureni:sureni321@cluster0.pcxsb.mongodb.net/AFProject?retryWrites=true&w=majority";

const connectDB = async() =>{
    await mongoose.connect(URI, 
        {useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected');
};

module.exports = connectDB;