'use strict';
const express = require('express');
const router = express.Router();
const AuhtController = require('../controllers/auth');

// GET /v1/jwt_auth/new_session
router.get('/new_session', AuhtController.generateNewToken);

// GET /v1/jwt_auth/verify_session
router.get('/verify_session', AuhtController.verifyToken);

module.exports = router;