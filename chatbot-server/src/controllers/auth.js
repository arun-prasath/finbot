'use strict';

class Auth{

    constructor(){}

    /**
     * New user is created if no jwt token exists 
     * Or if the old jwt token expires. 
     */
    async generateNewToken(req,res,next){
        res.status(201).json({'token':'rtyu'});
    }

    async verifyToken(req,res,next){

    }

}

module.exports = new Auth();