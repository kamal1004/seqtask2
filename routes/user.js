const express = require('express');

const cors = require('Cors');

const usersController = require('../controller/user_data')

const router = express.Router();



router.post('/',usersController.save);
router.get('/',usersController.list);
router.put('/:id',usersController.update);
router.delete('/:id',usersController.destroy);

module.exports = router;
