const path = require('path');
const fs = require('fs');

const createControllers = async (app) => {
  let controllers = fs.readdirSync(__dirname);
  controllers = controllers.filter((file) => file !== path.basename(__filename) && path.extname(file) === '.js');
  
  controllers.map(async (c) => {
    return app.use(require(`./${c}`));
  });
};

module.exports = createControllers;
