import Model from "../knex";
import { CategoryRepository } from "./category.repository";

export class BlogRepository extends Model {
  static get tableName() {
    return "blogs";
  }

  static get idColumn() {
    return "id";
  }

  static relationMappings = {
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: CategoryRepository,
      join: {
        from: "blogs.id_category",
        to: "categories.id",
      },
    },
  };
}
