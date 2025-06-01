"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const httpRequestService = async (
  url: string,
  options?: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: any;
  },
  is_admin?: boolean
) => {
  const cookiesStore = await cookies();
  const sessionCookie = cookiesStore.get("admin-session");
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${url}`,
      {
        ...options,
        headers: {
          ...(options?.headers ?? {
            "Content-Type": "application/json",
          }),
          ...(is_admin
            ? {
                Authorization: `Bearer ${sessionCookie?.value}`.replaceAll(
                  `"`,
                  ""
                ),
              }
            : {}),
        },
      }
    ).then((res) => res.json());
    if (result.status !== 200) {
      if (result.code === "access_denied") {
        redirect("/admin/login");
      }

      throw new Error(JSON.stringify(result));
    }
    return result;
  } catch (error: any) {
    throw error;
  }
};
export default httpRequestService;
