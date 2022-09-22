'use strict';

const express = require('express');
const drinksRouter = require('./routes/drinks');
const PORT = process.env.PORT || 3002;

//later error handlers, middleware, etc.

const app = express();
app.use(express.json());
app.use(drinksRouter);

function start(){
  app.listen(PORT, () => console.log('Listening on port', PORT));
}

module.exports = { app, start };
