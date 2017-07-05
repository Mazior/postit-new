const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/* Sign up router - create new user. */
router.route('/api/user/signup').post(userController.signup);
router.route('/api/user/signin').post(userController.signin);

module.exports = router;
