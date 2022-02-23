const mongoose=require('mongoose');
const { Schema } = mongoose;

  const userSchema = new Schema({
      
    fname:{
        type:String,
        required:true,

    },
    lname:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        default:Date.now
    },
    gender:{
        type:String,
    },
    cnumber:{
        type:Number,
        required:true,
    }
  });

  module.exports=mongoose.model('Notes',userSchema)