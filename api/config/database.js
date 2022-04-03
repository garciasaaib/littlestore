require('dotenv/config')
const { DB_PORT, DB_HOST, DB_NAME, DB_PASS, DB_USER } = process.env

module.exports = {
  development: {
    username: DB_USER || "postgres",
    password: DB_PASS || "admin",
    database: DB_NAME || "hotel",
    dialect: "postgres",
    host: DB_HOST || "127.0.0.1",
    port: DB_PORT || 5432,

    // // Configurar Seeds
    // seederStorage: "sequelize",
    // seederStorageTableName: "seeds",

    // // Configuracion de Migrations
    // migrationStorage: "sequelize",
    // migrationStorageTableName: "migrations",

    // logs
    logging: false
  }

}
