import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();

const sharedConfig = {
  client: "pg",
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

const development: Knex.Config = {
  ...sharedConfig,
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Required for Supabase or Heroku SSL
    },
  },
};

const production: Knex.Config = {
  ...sharedConfig,
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
};

const config: { [key: string]: Knex.Config } = {
  development,
  production,
};

export default config;
