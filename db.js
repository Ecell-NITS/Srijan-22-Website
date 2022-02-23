// getting-started.js
const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/srijan?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI="mongodb+srv://aditya:Aditya1234@cluster0.tkkgv.mongodb.net/mynote?retryWrites=true&w=majority"
 
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
      console.log("Welcome to mongodb");
    })
}

module.exports=connectToMongo;