import Model from "../knex";
import { BlogRepository } from "./blog.repository";

export class CommentRepository extends Model {
  static get tableName() {
    return "comments";
  }

  static get idColumn() {
    return "id";
  }

  static relationMappings = {
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: BlogRepository,
      join: {
        from: "comments.id_blog",
        to: "blogs.id",
      },
    },
  };
}
