import Model from "../knex";

export class UserRepository extends Model {
  static get tableName() {
    return "users";
  }
}
