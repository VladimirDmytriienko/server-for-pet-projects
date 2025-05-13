const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

pool.on('connect', () => console.log('Successfully connected to the database'))
pool.on('error', (err) => console.log('Unexpected error on idle client', err))

pool.query('SELECT NOW()', (err, res) => {
  err ? console.log('Error connecting to the database:', err) : console.log('Database connection test successful')
})

module.exports = pool;