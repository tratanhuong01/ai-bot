import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("comments", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()")); // UUID tự động
    table
      .uuid("id_blog")
      .references("id")
      .inTable("blogs")
      .onDelete("CASCADE")
      .notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("content").notNullable();
    table.uuid("parent").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now()).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("comments");
}
