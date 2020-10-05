'use strict';
const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboard');

// GET /v1/dashboard/all_users
router.get('/all_users', DashboardController.getAllUsers);

// GET /v1/dashboard/engagement_rate
router.get('/engagement_rate', DashboardController.getEngagementRate);

// GET /v1/dashboard/drop_off_rate
router.get('/drop_off_rate', DashboardController.getDropoffRate);

// GET /v1/dashboard/completion_rate
router.get('/completion_rate', DashboardController.getCompletionRate);

module.exports = router;