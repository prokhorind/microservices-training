const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', userController.test);
router.post('',userController.save);
router.get('/:id', userController.get);


module.exports = router;
