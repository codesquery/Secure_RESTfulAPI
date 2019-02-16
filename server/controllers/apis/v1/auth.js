const express = require('express');
const authService = require('../../../services/v1/auth/auth');
const validation = require('../../../middlewares/validation');
let router = express.Router();

router.post('/register', validation.validateRegistrationBody(), authService.register);

router.post('/login', validation.validateLoginBody(), authService.login);

module.exports = router;