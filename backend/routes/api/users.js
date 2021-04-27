const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name.')
        .isAlpha()
        .withMessage('First Name must only contain letters.')
        .isLength({ min: 2, max: 50 })
        .withMessage('First Name must be between 2 to 50 characters long.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Last Name.')
        .isAlpha()
        .withMessage('Last Name must only contain letters.')
        .isLength({ min: 2, max: 50 })
        .withMessage('Last Name must be between 2 to 50 characters long.'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email')
        .isEmail()
        .withMessage('Please provide a valid email.')
        .isLength({ min: 8, max: 50 })
        .withMessage('Email must be between 8 to 50 characters long.')
        .custom((value) => {
            return User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('The provided email is already in use.');
                    }
                });
        }),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Username')
        .isLength({ min: 8, max: 30 })
        .withMessage('Username must be between 8 to 30 characters long.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ min: 8, max: 50 })
        .withMessage('Password must be between 8 to 50 characters long.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and a special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password.')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password.');
            }
            return true;
        }), 
    handleValidationErrors,
];

// Sign up ---> POST /api/users/
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({ user });
}));

module.exports = router;