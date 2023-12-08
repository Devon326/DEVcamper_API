
const express = require('express');
const router = express.Router();


const {createPosts, getPosts} = require('../controllers/posts');

router.route('/:id');
router.route('/').post(createPosts).get(getPosts);

module.exports = router;