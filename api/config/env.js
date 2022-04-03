require('dotenv').config()

const config = {
  environment: {

  },

  db1: {
    dbUser:process.env.DB_USER || "postgres",
    dbPass:process.env.DB_PASS || "admin",
    dbPort:process.env.DB_PORT || 5432,
    dbName:process.env.DB_NAME || "littleStore",
    dbHost:process.env.DB_HOST || "localhost",
  }

}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001
}
