import Model from "../knex";

export class CategoryRepository extends Model {
  static get tableName() {
    return "categories";
  }

  static get idColumn() {
    return "id";
  }
}
