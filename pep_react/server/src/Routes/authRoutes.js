const express = require('express');
const {body}  = require('express-validator');

const authController = require('../controller/authController');

const router = express.Router();

const loginValidator = [ // body function here is the body passed in req
    body('username').notEmpty().withMessage('User name is req').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is req').isLength({min :6}).withMessage('Length should be min 6'),
]
// router.post('/login',authController.login);
router.post('/login',loginValidator,authController.login); // now we have passed loginValidator as a middlewar
router.post('/register',authController.register);

router.post('/logout',authController.logout);
router.post('/is-use-logged-in',authController.isUserLoggedIn);

router.post('/google-auth',authController.googleAuth);
module.exports= router;
