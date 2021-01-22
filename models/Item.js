const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    quantity: {
        type : Number,
        required : true
    },
    imageSrc: {
        type : String,
        required : true
    },
    decs: {
        type : String,
        required : true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);