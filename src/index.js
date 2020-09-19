const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const createControllers = require('./controllers');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async() => {
  await createControllers(app);
})();

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`${process.env.APP_NAME || 'App'} running on ${APP_PORT}`);
})
