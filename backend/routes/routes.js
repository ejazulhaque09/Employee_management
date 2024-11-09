const express = require('express');
const createUser = require('../controller/createUser');
const getAllUsers = require('../controller/getAllUsers');
const router = express.Router();

router.post('/create',createUser)
router.get('/get',getAllUsers)

module.exports = router;