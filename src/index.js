import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`${process.env.APP_NAME} running on ${APP_PORT}`);
})
