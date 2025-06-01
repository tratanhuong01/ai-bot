import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("blogs", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()")); // UUID tự động
    table
      .uuid("id_category")
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE")
      .notNullable();
    table.string("title").notNullable();
    table.text("description").nullable();
    table.string("thumbnail").nullable();
    table.text("content").nullable();
    table.string("slug").notNullable().unique();
    table.jsonb("tags").notNullable().unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now()).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("blogs");
}
