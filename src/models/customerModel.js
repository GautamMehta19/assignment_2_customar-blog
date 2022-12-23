const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    firstName: {
       type:String,
       required:true
    },      
    lastName:{
        type:String,
        required:true
     },      
    mobileNumber:{
        type:Number,
        unique:true,
        required:true
    } ,
    DOB: {
        type:Date,
        required:true
    },
    emailID:{
       type:String,
       unique:true,
       required:true
    },
    address: String,
    status: {
        type :String,
        toUpperCase : true
    }

}, {timestamps:true})

module.exports = mongoose.model("customer",customerSchema )