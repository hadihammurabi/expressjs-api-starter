import path from 'path';
import fs from 'fs';

const registerRoutes = async (routes) => {
  let controllers = fs.readdirSync(__dirname);
  controllers = controllers.filter((file) => file !== path.basename(__filename) && path.extname(file) === '.js');
  
  controllers = await Promise.all(controllers.map(async (c) => {
    return (await import(`./${c}`)).default;
  }));

  controllers.forEach(c => {
    c.createController(routes);
  });

};

export default {
  registerRoutes,
};