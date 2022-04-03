require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const { API_PORT, NODE_ENV } = process.env

/** NODE_ENV === 'development'
 * everything you want
*/
if (NODE_ENV === 'development') {
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json());

  routerApi(app)

  // app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
}

/** NODE_ENV === 'production'
 * Cors: specify who can acces to your api
 * Https: use a HTTPS server
 * check build method to production
 * Remove logs: cuz delay of them, and so informative.
 * check security middlewares
 * Testing: create and pass all the tests before send to production
 */

else if (NODE_ENV === 'production') {
  const whitelist = ['http://localhost:8080', 'http://localhost:3000']
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) callback(null, true)
      callback(new Error('Cors Error'))
    }
  }
  app.use(cors({options: corsOptions}));
  app.use(helmet());
  // app.use(morgan('dev'));
  app.use(express.json());

  routerApi(app)

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
}



app.listen(API_PORT, () => console.log("estoy vivo en el puerto " + API_PORT))





