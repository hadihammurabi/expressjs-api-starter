import express from 'express';
import controllers from '../controllers';

const routes = express.Router();

(async () => {
  controllers.registerRoutes(routes);
})();

export default routes;
