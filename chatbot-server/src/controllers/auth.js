'use strict';
const jwtAuth = require('../helpers/jwtAuth');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/user');
const { dehydrate } = require('../helpers/factory');

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

        // Generate a new token 
        let auth = new jwtAuth('finchatbot',userdetail.userid, userdetail.ip);
        let payload = dehydrate(['userid','ip','avatarid','timezone','createdDate'],userdetail);
        let token = auth.generateToken(payload);

        // Send the user & token details to the React App
        res.status(201).json({
            'token': token,
            'guest' : payload 
        });
    }

    async verifyToken(req,res,next){

    }

}

module.exports = new Auth();