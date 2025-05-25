import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();

const sql = postgres({
  host: process.env.DATABASE_HOST ?? "",
  port: process.env.DATABASE_HOST ? Number(process.env.DATABASE_HOST) : 5432,
  username: process.env.DATABASE_HOST ?? "",
  password: process.env.DATABASE_HOST ?? "",
  database: process.env.DATABASE_HOST ?? "",
});

export default sql;
