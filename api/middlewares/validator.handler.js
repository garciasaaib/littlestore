const boom = require("@hapi/boom")

// closure that returns the next middleware with validations
function validatorHandler(schema, property) {
  return (req, res, next) => {
    /**
     * req[property] gets the data that is sent depending the kind of request
     * it can be body, params or query
     *
     * {abortEarly: false}  let you check the hole error before send it
     */
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) next(boom.badRequest(error))
    next()
  }
}

module.exports = validatorHandler
