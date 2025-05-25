export interface Blog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
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
  thumbnailOld: string;
};
