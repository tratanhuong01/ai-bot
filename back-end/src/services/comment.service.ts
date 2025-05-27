import { FilterCommon } from "../dto/common.dto";
import { Comment, CommentCreatePayLoad } from "../interfaces/comment.interface";
import { CommentRepository } from "../repositories/comment.repository";

export class CommentService {
  async getComments(filters: FilterCommon) {
    try {
      const query = CommentRepository.query().select(
        "id",
        "name",
        "email",
        "content",
        "parent",
        "created_at",
        "updated_at"
      );
      if (filters.search) {
        query.whereILike("name", `%${filters.search}%`);
        query.orWhereILike("email", `%${filters.search}%`);
      }
      if (Object.keys(filters.filters ?? {}).length > 0) {
        Object.keys(filters.filters).forEach((item) => {
          query.andWhere(
            item,
            filters.filters[item].operator,
            filters.filters[item].value
          );
        });
      }
      if (filters.exclude && filters?.exclude.length > 0) {
        query.whereNotIn("id", filters.exclude);
      }
      const total = await query;
      if (filters.pagable) {
        query.offset(filters.pagable.offset);
        query.limit(filters.pagable.limit);
      }
      if (filters.sort) {
        query.orderBy(filters.sort.field, filters.sort.isASC ? "asc" : "desc");
      }
      const data = await query;

      return {
        total: total.length,
        data: [...data].map((item) => item.toJSON() as Comment),
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        error,
        status: 400,
        code: "error",
      };
    }
  }

  async createComment(payload: CommentCreatePayLoad) {
    try {
      await CommentRepository.query().insert(payload);
      return {
        data: true,
        status: 200,
        code: "success",
      };
    } catch (error: any) {
      return {
        status: 400,
        code: "error",
        message: error,
      };
    }
  }

  async deleteComment(ids: string[]) {
    try {
      await CommentRepository.query().whereIn("id", ids).delete();
      return {
        data: true,
        status: 200,
        code: "success",
      };
    } catch (error: any) {
      return {
        status: 400,
        code: "error",
        message: error,
      };
    }
  }
}

export const commentService = new CommentService();
