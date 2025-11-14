const express = require('express');
const router = express.Router();

const { listFeed, createPost, likePost, addComment } = require('./feed.controller');

router.get('/feed', (req, res) => listFeed(req, res));
router.post('/feed', express.json(), (req, res) => createPost(req, res));
router.post('/feed/:id/like', (req, res) => likePost(req, res));
router.post('/feed/:id/comments', express.json(), (req, res) => addComment(req, res));

module.exports = router;
