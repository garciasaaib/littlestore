const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next) {
  next(error)
}

function errorHandler(error, req, res,  ) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

function boomErrorHandler(error, req, res, next) {
  if (!error.isBoom) next(error)

  const { output } = error
  res.status(output.statusCode).send(output.payload)
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
}
