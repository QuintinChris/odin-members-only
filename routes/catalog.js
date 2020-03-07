const express = require('express');
var router = express.Router();

// Require controller modules
const user_controller = require('../controllers/...');

// USER ROUTES

router.get('/', user_controller.index);