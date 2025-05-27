import { FilterCommon } from "@/dto/common.dto";
import httpRequestService from "./http-request";
import { CommentCreatePayload } from "@/interfaces/comment.interface";

class CommentService {
  search(filter: FilterCommon) {
    return httpRequestService(`comments/search`, {
      method: "POST",
      body: JSON.stringify(filter),
    });
  }

  create(data: CommentCreatePayload) {
    return httpRequestService(`comments`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  }

  delete(ids: string[]) {
    return httpRequestService(
      `comments`,
      {
        method: "DELETE",
        body: JSON.stringify(ids),
        headers: { "Content-Type": "application/json" },
      },
      true
    );
  }
}

export const commentService = new CommentService();
