const express = require('express');
var router = express.Router();

// Require controller modules
const user_controller = require('../controllers/usersController');
// USER ROUTES

router.get('/', user_controller.index);


// GET & POST for SIGNUP (join-club)
router.get('/signup', '/views/signup.pug'); // ???????
router.post();

// GET & POST for LOGIN
router.get();
router.post();

// GET & POST for admin LOGIN
router.get();
router.post();

// GET & POST for create message
router.get();
router.post();

// GET & POST for delete message

// GET & POST for update message

// GET & POST for user home page

// GET & POST for 