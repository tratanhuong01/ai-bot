export interface Blog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  tags: string[] | null;
}

export type BlogCreatePayLoad = {
  blog: {
    title: string;
    name: string;
    slug: string;
    description: string;
    content: string;
    thumbnail: string;
  };
  tags: string[] | null;
};

export type BlogUpdatePayLoad = {
  blog: {
    id: string;
    title: string;
    name: string;
    description: string;
    content: string;
    thumbnail: string;
    slug: string;
  };
  tags: string[] | null;
  thumbnailOld: string;
};
