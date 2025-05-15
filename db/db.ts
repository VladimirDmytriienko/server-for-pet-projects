import { Pool, PoolConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_USER || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PASS) {
  throw new Error('Missing database environment variables');
}

const poolConfig: PoolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || '5431'),
};

const pool = new Pool(poolConfig);

pool.on('connect', () => {
  console.log('New client connected to the database');
});

pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool; 