import express from "express";
import { blogService } from "../services/blog.service";

export class BlogController {
  async getBlogs(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await blogService.getBlogs(payload);
    res.status(result.status).json(result);
  }

  async createBlog(req: express.Request, res: express.Response) {
    const payload = req.body;
    const files = req.files as any;
    const result = await blogService.createBlog({
      blog: {
        ...JSON.parse(payload.blog),
        thumbnail: `${files?.["thumbnail"]?.[0]?.path}`
          .replace(/\\+/g, "/")
          .trim(),
      },
      tags: JSON.parse(payload.tags),
    });
    res.status(result.status).json(result);
  }

  async updateBlog(req: express.Request, res: express.Response) {
    const payload = req.body;
    const files = req.files as any;
    const blog = JSON.parse(payload.blog);
    const result = await blogService.updateBlog({
      blog: {
        ...blog,
        thumbnail: files["thumbnail"]?.[0]
          ? `${files?.["thumbnail"]?.[0]?.path}`.replace(/\\+/g, "/").trim()
          : blog.thumbnail,
      },
      thumbnailOld: blog?.thumbnail,
      tags: JSON.parse(payload.tags),
    });
    res.status(result.status).json(result);
  }

  async deleteBlog(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await blogService.deleteBlog(payload);
    res.status(result.status).json(result);
  }

  async getById(req: express.Request, res: express.Response) {
    const id = req.query.id as string;
    const slug = req.query.slug as string;
    const result = await blogService.getById(id ? "id" : "slug", id ?? slug);
    res.status(result.status).json(result);
  }

  async getNewBestById(req: express.Request, res: express.Response) {
    const id = req.query.id as string;
    const slug = req.query.slug as string;
    const result = await blogService.getNewBestById(
      id ? "id" : "slug",
      id ?? slug
    );
    res.status(result.status).json(result);
  }
}

export const blogController = new BlogController();
