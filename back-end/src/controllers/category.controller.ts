import express from "express";
import { categoryService } from "../services/category.service";

export class CategoryController {
  async getCategories(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await categoryService.getCategories(payload);
    res.status(result.status).json(result);
  }

  async createCategory(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await categoryService.createCategory(payload);
    res.status(result.status).json(result);
  }

  async updateCategory(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await categoryService.updateCategory(payload);
    res.status(result.status).json(result);
  }

  async deleteCategory(req: express.Request, res: express.Response) {
    const ids = req.body;
    const result = await categoryService.deleteCategory(ids);
    res.status(result.status).json(result);
  }

  async getCategoryById(req: express.Request, res: express.Response) {
    const id = req.query.id as string;
    const result = await categoryService.getById(id);
    res.status(result.status).json(result);
  }
}

export const categoryController = new CategoryController();
