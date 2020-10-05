'use strict';
const jwtAuth = require('../helpers/jwtAuth');

class Auth{

    constructor(){}

    /**
     * New user is created if no jwt token exists 
     * Or if the old jwt token expires. 
     */
    async generateNewToken(req,res,next){

        // Create a new user 

        // Generate a new token 

        // Send the user & token details to the React App
        res.status(201).json({'token':'rtyu'});
    }

    async verifyToken(req,res,next){

    }

}

module.exports = new Auth();