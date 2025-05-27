export interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  id_blog: string;
  created_at: string;
  updated_at: string;
}

export type CommentCreatePayload = Omit<
  Comment,
  "id" | "created_at" | "updated_at"
>;
