export {};
import { Pool } from "pg";

const connectionString = process.env.PG_CONNECTIONSTRING;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const query = async (
  text: string,
  params?: (string | number | boolean | string[])[]
) => {
  return pool.query(text, params);
};

export default query;
