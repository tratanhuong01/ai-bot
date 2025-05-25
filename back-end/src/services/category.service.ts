import { FilterCommon } from "../dto/common.dto";
import { Blog } from "../interfaces/blog.interface";
import { Category } from "../interfaces/category.interface";
import { CategoryRepository } from "../repositories/category.repository";
import { timestampCurrent } from "../utils";

export class CategoryService {
  async getCategories(filters: FilterCommon) {
    try {
      const query = CategoryRepository.query().select();
      if (filters.search) {
        query.whereILike("name", `%${filters.search}%`);
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

      const total = await query;
      if (filters.pagable) {
        query.offset(filters.pagable.offset);
        query.limit(filters.pagable.limit);
      }
      if (filters.sort) {
        query.orderBy(filters.sort.field, filters.sort.isASC ? "asc" : "desc");
      } else {
        query.orderBy("created_at", "desc");
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

  async createCategory(category: Category) {
    try {
      const check = await CategoryRepository.query()
        .select("id")
        .where("name", category.name);
      if (check.length)
        return {
          code: "duplicate",
          status: 400,
        };
      await CategoryRepository.query().insert(category);
      return {
        data: true,
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        error,
        category,
        status: 400,
        code: "error",
      };
    }
  }

  async updateCategory(category: Category) {
    try {
      if (!category.id) {
        const check = await CategoryRepository.query()
          .select("id")
          .where("name", category.name);
        if (check.length)
          return {
            code: "duplicate",
            status: 400,
          };
      }
      await CategoryRepository.query()
        .update({ ...category, updated_at: timestampCurrent() })
        .where("id", category.id);
      return {
        data: true,
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

  async deleteCategory(ids: string[]) {
    try {
      await CategoryRepository.query().whereIn("id", ids).delete();
      return {
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        error,
        code: "error",
        status: 400,
      };
    }
  }

  async getById(id: string) {
    try {
      const data = await CategoryRepository.query().select().where("id", id);
      return {
        data: data?.[0],
        status: 200,
        code: "success",
      };
    } catch (error) {
      return {
        error,
        code: "error",
        status: 400,
      };
    }
  }
}

export const categoryService = new CategoryService();
