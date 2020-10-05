'use strict';
const jwtAuth = require('../helpers/jwtAuth');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/user');

class Auth{

    constructor(){}

    /**
     * New user is created if no jwt token exists 
     * Or if the old jwt token expires. 
     */
    async generateNewToken(req,res,next){
        let details = new Object();
        // Create a new user
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if(ip.substr(0,7) == "::ffff:"){
            details.ip = ip.substr(7);
        }
        details.useragent = req.get('User-Agent');
        details.timezone = req.query.timezone;
        details.userid = uuidv4();

        let user = new UserModel(details);
        let userdetail = await user.save();
        console.log(userdetail);
        // Generate a new token 

        // Send the user & token details to the React App
        res.status(201).json({'token':'rtyu'});
    }

    async verifyToken(req,res,next){

    }

}

module.exports = new Auth();