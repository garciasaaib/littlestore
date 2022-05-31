require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const routerApi = require('./src/routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./src/middlewares/error.handler')
const { sequelize } = require('./src/database/models/index')

const app = express();
const { PORT, NODE_ENV } = process.env



/** NODE_ENV === 'development'
 * everything you want
*/
/** NODE_ENV === 'production'
 * Cors: specify who can acces to your api
 * Https: use a HTTPS server
 * check build method to production
 * Remove logs: cuz delay of them, and so informative.
 * check security middlewares
 * Testing: create and pass all the tests before send to production
 */
if (NODE_ENV === 'development') {
  app.use(cors());
  app.use(morgan('dev'));
}
else if (NODE_ENV === 'production') {
  const whitelist = ['http://localhost:8080', 'http://localhost:3000']
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) callback(null, true)
      else callback(new Error('Cors Error'))
    }
  }
  app.use(cors({ options: corsOptions }));
}

app.use(express.json());
app.use(helmet());

routerApi(app)

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("estoy vivo en el puerto " + PORT)
  sequelize.authenticate({ force: false }).then(() => {
    console.log(`DB connected`)
  })
})

