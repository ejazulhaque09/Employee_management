const express = require('express');
const createUser = require('../controller/createUser');
const getAllUsers = require('../controller/getAllUsers');
const deleteUser = require('../controller/deleteUser');
const router = express.Router();

router.post('/create',createUser)
router.get('/get',getAllUsers)
router.delete('/deleteById/:userId', deleteUser);

module.exports = router;