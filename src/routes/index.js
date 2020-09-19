const express = require('express');
const controllers = require('../controllers');

const routes = express.Router();

(async () => {
  controllers.registerRoutes(routes);
})();

module.exports = routes;
