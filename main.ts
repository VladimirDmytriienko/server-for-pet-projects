import express from 'express';
import routes from './routes';
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './db/db'



dotenv.config();

const srv = express()
const PORT = process.env.PORT || 3003

srv.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

srv.use(express.json())
srv.use(cookieParser())
srv.use(morgan(":method :url :status"))

srv.use('/', routes);

pool.query('SELECT NOW()', (err, res) => {
  err && console.error('Error connecting to the database:', err)  
})

srv.listen(PORT, () => console.log(`Server running on port ${PORT}`))