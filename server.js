const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const collectionRouter = require('./routes/collections');
const termsRouter = require('./routes/terms');
const sharedRouter = require('./routes/shared');
const authRouter = require('./routes/auth');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/collections', collectionRouter);
app.use('/api/terms', termsRouter);
app.use('/api/shared', sharedRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`sever listening on port ${PORT}`));

module.exports = app;
