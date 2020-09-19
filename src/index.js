const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const routes =  require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`${process.env.APP_NAME || 'App'} running on ${APP_PORT}`);
})
