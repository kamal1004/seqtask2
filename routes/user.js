const express = require('express');

const usersController = require('../controller/user_data')

const router = express.Router();

router.post('/',usersController.save);
router.get('/',usersController.list);
router.patch('/:id',usersController.update);
router.delete('/:id',usersController.destroy);

module.exports = router;
