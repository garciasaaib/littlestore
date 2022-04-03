const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5334,
    user: 'postgres',
    password: 'admin',
  })
  await client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })
  return client
}




module.exports = getConnection
