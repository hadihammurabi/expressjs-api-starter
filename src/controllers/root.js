const index = (req, res) => {
  res.json({
    message: `Welcome to ${process.env.APP_NAME}. Open \`src/controllers/index.js\` to edit this code.`,
  });
};

const createController = (routes) => {
  routes.get('/', index);
};

module.exports = {
  createController,
};
