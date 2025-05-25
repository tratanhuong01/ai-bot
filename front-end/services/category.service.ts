import { FilterCommon } from "@/dto/common.dto";
import httpRequestService from "./http-request";
import { Category } from "@/interfaces/category.interface";

class CategoryService {
  search(filter: FilterCommon) {
    return httpRequestService(`categories/search`, {
      method: "POST",
      body: JSON.stringify(filter),
    });
  }

  create(payload: Category) {
    return httpRequestService(
      `categories`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
      true
    );
  }

  update(payload: Category) {
    return httpRequestService(
      `categories`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      },
      true
    );
  }

  delete(ids: string[]) {
    return httpRequestService(
      `categories`,
      {
        method: "DELETE",
        body: JSON.stringify(ids),
        headers: { "Content-Type": "application/json" },
      },
      true
    );
  }

  getById(id: string) {
    return httpRequestService(
      `categories?id=${id}`,
      {
        method: "GET",
        body: null,
      },
      true
    );
  }
}

export const categoryService = new CategoryService();
