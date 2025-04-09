const express = require('express');
const cors = require('cors');
const shoppingRoutes = require('../api/shopping');

module.exports.ExpressApp = (app) => {
  app.use(express.json());
  app.use(cors());

  app.use('/shopping', shoppingRoutes);
};