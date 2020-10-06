'use strict';

const { response } = require('express');
const jwtAuth = require('../helpers/jwtAuth');
const AccountModel = require('../models/accounts');

class AccountsController {

    constructor() {}

    async getAccountBalance(req, res, next) {
        const token = req.body.sender_id;
        let responseText;

        try {
            let auth = new jwtAuth();
            let guestDetails = auth.decode(token);
            let audience = 'http://localhost:' + process.env.APP_SERVER_PORT;
            auth.setOptions('finchatbot', guestDetails.payload.userid, audience);
            let result = auth.verifyToken(token);
            let userid = result.userid;

            let account = await AccountModel.findOne({userid});
            let balance = account.balance;

            responseText = 'You have $' + balance + ' in your account';
        } catch (err) {
            console.log(err.message);
            responseText = 'Authentication failed. Refresh your browser';
        }

        res.status(200).json({
            events: [{
                event: "action"
            }],
            responses: [{
                text: responseText
            }]
        });
    }
}

module.exports = new AccountsController();