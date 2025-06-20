const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();
router.post('/login',authController.login);
router.post('/logout',authController.logout);
router.post('/is-use-logged-in',authController.isUserLoggedIn);

module.exports= router;
