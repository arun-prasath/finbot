'use strict';
const express = require('express');
const router = express.Router();
const AccountsController = require('../controllers/accounts');

// GET /v1/accounts/check_balance
router.post('/check_balance', AccountsController.getAccountBalance);

module.exports = router;