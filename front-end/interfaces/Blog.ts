export interface Blog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  slug: string;
}

export interface BlogCreatePayload {
  blog: Omit<Blog, "id" | "created_at" | "updated_at">;
}

export interface BlogUpdatePayload {
  blog: Omit<Blog, "created_at" | "updated_at">;
  thumbnailOld?: string;
}
