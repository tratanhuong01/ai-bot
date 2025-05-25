import dotenv from "dotenv";
import Knex from "knex";
import { Model } from "objection";

dotenv.config();

const knex = Knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

Model.knex(knex);

export default Model;
