
function logErrors(error, req, res, next) {
  console.log('logError')
  // console.error(error)
  next(error)
}

function errorHandler(error, req, res, ) {
  console.log('errorHandler')
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

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}
