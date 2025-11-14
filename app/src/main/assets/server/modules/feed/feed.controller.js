const { readStore, writeStore } = require('./feed.store');

function listFeed(req, res) {
  const feed = readStore();
  res.json(feed);
}

function createPost(req, res) {
  const { author, content } = req.body;
  const id  = Date.now() + '_' + Math.random().toString(36).slice(2);
  const post = { id, author, content, likes: 0, comments: [] };

  const feed = readStore();
  feed.push(post);
  writeStore(feed);
  res.json(post);
}

function likePost(req, res) {
  const id   = req.params.id;
  const feed = readStore();
  const post = feed.find(p => String(p.id) === String(id));
  if (!post) return res.status(404).json({ error: 'Post not found' });

  post.likes++;
  writeStore(feed);
  res.json(post);
}

function addComment(req, res) {
  const id   = req.params.id;
  const { author, text } = req.body;
  const feed = readStore();
  const post = feed.find(p => String(p.id) === String(id));
  if (!post) return res.status(404).json({ error: 'Post not found' });

  post.comments.push({ author, text });
  writeStore(feed);
  res.json(post);
}

module.exports = { listFeed, createPost, likePost, addComment };
