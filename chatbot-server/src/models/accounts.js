'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    userId : {
        type : String,
        unique : true
    },
    accountNumber : {
        type : String,
        unique : true
    },
    balance : {
        type : Number
    },
    createdDate : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('accounts',accountsSchema);