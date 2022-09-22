'use strict';

const express = require('express');
const { DrinksModel } = require('../models');
const router = express.Router();

router.post('/drinks', async (req, res, send) => {
  console.log('req body', req.body);

  const newDrinks = await DrinksModel.create(req.body);
  res.status(200).send(newDrinks);

});

module.exports = router;





