const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./DB/connection');

app.use(cors());
app.use(express.json());

connectDB();

const Port = process.env.Port || 3001;

//connect to mongoose
/*mongoose.connect("mongodb+srv://sureni:sureni321@cluster0.pcxsb.mongodb.net/AFProject?retryWrites=true&w=majority", {useUnifiedTopology: true,
useNewUrlParser: true
});

mongoose.connection.once('open',function(){
    console.log("already connected");
});
*/
/************************************* 
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

mongoose.connection.once('open',function(){
    console.log("already connected");
})*******************/
//require route

app.use("/", require("./Routes/profileRoute"));
const viewprofileRouter = require('../backend/Routes/profileRoute');
app.use("/viewprofile",viewprofileRouter);

app.listen(Port, function(){
        console.log("server is running on server 3001");
});
