import { Pool } from 'pg';
let pool: Pool;
type dbConfig = {
  maxConnections: number;
  host: string;
  user: string;
  password: string;
  database: string;
};

export const createPool = (config: dbConfig) => {
  if (!pool) {
    pool = new Pool({
      max: config.maxConnections,
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
    });
  }
};

export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('executed query', { text, duration, rows: res.rowCount });
  return res;
};

export const getClient = () => {
  return pool.connect();
};
