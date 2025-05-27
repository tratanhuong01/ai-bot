export interface Comment {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export type CommentCreatePayLoad = {
  name: string;
  content: string;
  email: string;
  id_blog: string;
  parent: string;
};
