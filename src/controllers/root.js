const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: `Welcome to ${process.env.APP_NAME}. Open \`src/controllers/index.js\` to edit this code.`,
  });
});

module.exports = router;
