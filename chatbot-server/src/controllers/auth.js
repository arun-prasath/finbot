'use strict';
const jwtAuth = require('../helpers/jwtAuth');

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

        // Generate a new token 

        // Send the user & token details to the React App
        res.status(201).json({'token':'rtyu'});
    }

    async verifyToken(req,res,next){

    }

}

module.exports = new Auth();