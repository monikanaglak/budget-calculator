const mongoose = require('mongoose');
const Schema = mongoose.Schema

const billsSchema = new Schema({
    client:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    counter:{
        type:Number,
        required:true
    }
}, {timestamps:true})

//timestamps save the date when it was updatted

//aplide schyma of model
module.exports = mongoose.model('Bill', billsSchema)
