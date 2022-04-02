require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();
const { API_PORT } = process.env
app.use(express.json());
app.use(morgan('dev'));

routerApi(app)
app.use(logErrors);
app.use(errorHandler);






app.listen(API_PORT, () => {
  console.log("estoy vivo en el puerto " + API_PORT)
})
