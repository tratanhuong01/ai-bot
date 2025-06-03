import dotenv from "dotenv";
import Knex from "knex";
import { Model } from "objection";

dotenv.config();

const knex = Knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // This is necessary for Heroku Postgres
    },
  },
});

Model.knex(knex);

export default Model;
