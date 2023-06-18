const express = require('express');
const routes = require('../routes');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json({ limit: '10mb', type: ['application/json', 'application/x-www-form-urlencoded'] }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(routes);

app.use((err, req, res, next) => {
  res.status(err.status || 400).json({ error: { message: err.message } });
});

module.exports = app;