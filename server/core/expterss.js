const path = require('path');
const express = require('express');
const createError = require('http-errors');
const routes = require('../routes');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json({ type: '*/*' }));

app.use(routes);

app.use('/public', express.static(path.resolve(__dirname, '../public')));

app.use((req, res, next) => {
  res.format({
    'application/json': () => next(createError(404, 'Not Found')),
    'text/html': () => {
      res.sendFile(path.resolve(__dirname, '../public/404.html'));
    },
    default: () => next(createError(404, 'Not Found')),
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 400).json({ error: { message: err.message } });
});

module.exports = app;