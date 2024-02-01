const express = require('express');
const app = express();
const port = 4900;
const connectToMongoDB = require('./db');

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
