import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()")); // UUID tự động
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("fullname").notNullable();
    table.string("phone").notNullable();
    table.boolean("is_admin").defaultTo(false);
    table.string("avatar").nullable();
    table.string("title").nullable();
    table.boolean("is_active").defaultTo(true);
    table.jsonb("address").nullable();
    table.timestamp("last_sign_in_at").defaultTo(knex.fn.now());
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now()).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
