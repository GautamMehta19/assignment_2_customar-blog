const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId
const cardSchema = new mongoose.Schema({

    cardNumber: {
        type : Number
    },
    cardType: String,
    customerName: String,
    status:{
        type:String,
        default:"ACTIVE"
    },
    vision: String,
    customerID:{
        type: ObjectId,
        ref:"customer"
    }
})

module.exports = mongoose.model('card',cardSchema )