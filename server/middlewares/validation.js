const { body } = require('express-validator/check')

const validateRegistrationBody = () => {
    return [ 
        body('name')
        .exists()
        .withMessage('name field is required')
        .isLength({min:3})
        .withMessage('name must be greater than 3 letters'),
        body('email').exists()
        .withMessage('email field is required')
        .isEmail()
        .withMessage('Email is invalid'),
        body('password')
        .exists()
        .withMessage('password field is required')
        .isLength({min : 8,max: 12})
        .withMessage('password must be in between 8 to 12 characters long')
       ] 
} 

const validateLoginBody = () => {
    return [ 
        body('email').exists()
        .withMessage('email field is required')
        .isEmail()
        .withMessage('Email is invalid'),
        body('password')
        .exists()
        .withMessage('password field is required')
        .isLength({min : 8,max: 12})
        .withMessage('password must be in between 8 to 12 characters long')
       ] 
} 

module.exports = {
    validateRegistrationBody : validateRegistrationBody,
    validateLoginBody : validateLoginBody
}