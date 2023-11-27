import { Pool } from 'pg';

export type dbConfig = {
  maxConnections: number, host: string, user: string, password: string, database: string
}

export const createPool = (config: dbConfig) => {
  return new Pool({
    max: config.maxConnections,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  })
};