import { FilterCommon } from "@/dto/common.dto";
import httpRequestService from "./http-request";

class UserService {
  login(payload: { email: string; password: string }) {
    return httpRequestService(`users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  search(filter: FilterCommon) {
    return httpRequestService(
      `users/search`,
      {
        method: "POST",
        body: JSON.stringify(filter),
      },
      true
    );
  }

  create(formData: FormData) {
    return httpRequestService(
      `users`,
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
      `users`,
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
      `users`,
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
      `users?id=${id}`,
      { method: "GET", body: null },
      true
    );
  }

  checkToken() {
    return httpRequestService(
      `users/token`,
      { method: "GET", body: null },
      true
    );
  }
}

export const userService = new UserService();

export const ADMIN_SESSION = "admin-session";
