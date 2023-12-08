const { CreateUser, GetUsers, getUserById, deleteUser } = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.route('/:id').get(getUserById).delete(deleteUser);
router.route('/').post(CreateUser).get(GetUsers);

module.exports = router;