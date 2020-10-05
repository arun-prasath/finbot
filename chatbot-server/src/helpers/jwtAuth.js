'use strict';
const jwt  = require('jsonwebtoken');
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

class jwtAuth {

    setSignOptions(i,s,a){
        this.signOptions = {
            issuer:  i,
            subject:  s,
            audience:  a,
            expiresIn:  "2h",
            algorithm:  "RS256"
        }
    }

    setVerifyOptions(i,s,a){
        this.verifyOptions = {
            issuer:  i,
            subject:  s,
            audience:  a,
            expiresIn:  "2h",
            algorithm:  ["RS256"]
        }
    }

    generateToken(payload){
        return jwt.sign(payload, PRIVATE_KEY, this.signOptions);
    }

    verifyToken(token,payload){
        return jwt.verify(token, PUBLIC_KEY, this.verifyOptions);
    }

    decode(token){
        return jwt.decode(token, {complete: true});

    }
}

module.exports = new jwtAuth();