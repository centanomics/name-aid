const router = require('express').Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const authCtrl = require('../controllers/auth');

// @route     GET api/auth
// @desc      Get logged in User
// @access    Private
router.get('/', auth, authCtrl.getUser);

// @route     POST api/auth/login
// @desc      Auth user and get token - login
// @access    Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  authCtrl.loginUser
);

// @route     POST api/auth/users
// @desc      Register a user
// @access    Public
router.post(
  '/users',
  [
    check('name', 'Please include a name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  authCtrl.registerUser
);

// @route     POST api/auth/forgot
// @desc      Send the user an email if they forget a password
// @access    Public
router.post('/forgot', authCtrl.forgotPassword);

// @route     POST api/auth/reset
// @desc      Resets a users password
// @access    Public
// router.post('/reset', authCtrl.resetPassword);
router.post('/reset', authCtrl.resetPassword);

module.exports = router;
