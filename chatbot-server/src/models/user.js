'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    registrationNumber : {
        type : Number,
        unique : true
    },
    userid : {
        type : String,
        unique : true
    },
    jwt : {
        type : String,
        unique : true
    },
    useragent : {
        type : String
    },
    timezone : {
        type : String
    },
    ip : {
        type : String
    },
    createdDate : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('users',userSchema);