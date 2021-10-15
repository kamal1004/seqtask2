const express = require('express');

const usersController = require('../controller/user_data')

const router = express.Router();

router.post('/',usersController.save);

module.exports = router;
