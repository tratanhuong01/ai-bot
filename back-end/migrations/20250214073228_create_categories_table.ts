import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("categories", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()")); // UUID tự động
    table.string("name").notNullable();
    table.string("slug").notNullable().unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now()).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("cars");
}
