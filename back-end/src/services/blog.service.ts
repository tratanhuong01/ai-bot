import fs from "fs/promises";
import { FilterCommon } from "../dto/common.dto";
import {
  Blog,
  BlogCreatePayLoad,
  BlogUpdatePayLoad,
} from "../interfaces/blog.interface";
import { BlogRepository } from "../repositories/blog.repository";

export class BlogService {
  async getBlogs(filters: FilterCommon) {
    try {
      const query = BlogRepository.query().select(
        "id",
        "title",
        "description",
        "thumbnail",
        "created_at",
        "updated_at",
        "slug",
        "tags"
      );
      if (filters.search) {
        query.whereILike("title", `%${filters.search}%`);
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
        data: [...data].map((item) => item.toJSON() as Blog),
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

  async createBlog(payload: BlogCreatePayLoad) {
    try {
      await BlogRepository.query().insert({
        ...payload.blog,
        tags: payload.tags ? JSON.stringify(payload.tags) : null,
      });
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

  async updateBlog(payload: BlogUpdatePayLoad) {
    try {
      if (payload.blog.thumbnail !== payload.thumbnailOld) {
        await fs.unlink(payload.thumbnailOld);
      }
      await BlogRepository.query()
        .update({
          ...payload.blog,
          tags: payload.tags ? JSON.stringify(payload.tags) : null,
        })
        .where("id", payload.blog.id);
      return {
        data: true,
        status: 200,
        code: "success",
      };
    } catch (error: any) {
      return {
        status: 400,
        code: "error",
        message: payload,
      };
    }
  }

  async deleteBlog(ids: string[]) {
    try {
      const data = await BlogRepository.query()
        .whereIn("id", ids)
        .select("thumbnail");
      let images: string[] = [];
      data
        .map((item) => item.toJSON() as any)
        .forEach((item) => {
          images = [item.thumbnail, ...images];
        });
      await Promise.all(images.map((item) => fs.unlink(item)));
      await BlogRepository.query().whereIn("id", ids).delete();
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

  async getById(column: "id" | "slug", value: string) {
    try {
      const result = await BlogRepository.query().select().where(column, value);
      return {
        data: result?.[0],
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        status: 400,
        code: "error",
        message: error,
      };
    }
  }
  async getNewBestById(column: "id" | "slug", value: string) {
    try {
      const result = await BlogRepository.query()
        .withGraphFetched("category")
        .select(
          "id",
          "title",
          "description",
          "thumbnail",
          "created_at",
          "updated_at",
          "slug",
          "tags"
        )
        .whereNot(column, value)
        .orderBy("created_at", "DESC")
        .offset(0)
        .limit(4);
      return {
        data: result,
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        status: 400,
        code: "error",
        message: error,
      };
    }
  }
}

export const blogService = new BlogService();
