const express = require('express');
const app = express();

const feedRoutes = require('./modules/feed/feed.routes');
app.use('/api', feedRoutes);

app.listen(3000, () => {
  console.log('API+WS sur http://localhost:3000');
});
