'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        unique : true
    },
    avatar : {
        type : String
    },
    userno : {
        type : Number
    },
    jwt : {
        type : String,
        unique : true
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