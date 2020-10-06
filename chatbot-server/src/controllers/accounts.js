'use strict';
const jwtAuth = require('../helpers/jwtAuth');

class AccountsController{

    constructor(){}

    async getAccountBalance(req, res, next){
        res.status(200).json({'foo' : 'bar'});
    }
}

module.exports = new AccountsController();