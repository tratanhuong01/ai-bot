import { FilterCommon } from "@/dto/common.dto";
import httpRequestService from "./http-request";

class BlogService {
  search(filter: FilterCommon) {
    return httpRequestService(`blogs/search`, {
      method: "POST",
      body: JSON.stringify(filter),
    });
  }

  create(formData: FormData) {
    return httpRequestService(
      `blogs`,
      {
        method: "POST",
        body: formData,
        headers: {},
      },
      true
    );
  }

  update(formData: FormData) {
    return httpRequestService(
      `blogs`,
      {
        method: "PUT",
        body: formData,
        headers: {},
      },
      true
    );
  }

  delete(ids: string[]) {
    return httpRequestService(
      `blogs`,
      {
        method: "DELETE",
        body: JSON.stringify(ids),
        headers: { "Content-Type": "application/json" },
      },
      true
    );
  }

  getById(column: "slug" | "id", blogId: string) {
    return httpRequestService(`blogs?${column}=${blogId}`, {
      method: "GET",
    });
  }

  getNewBestById(blogId: string) {
    return httpRequestService(`blogs/newbest?slug=${blogId}`, {
      method: "GET",
    });
  }
}

export const blogService = new BlogService();
