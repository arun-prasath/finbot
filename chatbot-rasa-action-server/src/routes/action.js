'use strict';
const express = require('express');
const router = express.Router();
const ActionController = require('../controllers/action');

router.post('/', ActionController.action);

module.exports = router;
