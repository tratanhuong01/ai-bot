import express from "express";
import { commentService } from "../services/comment.service";

export class CommentController {
  async getComments(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await commentService.getComments(payload);
    res.status(result.status).json(result);
  }

  async createComment(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await commentService.createComment(payload);
    res.status(result.status).json(result);
  }

  async deleteComment(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await commentService.deleteComment(payload);
    res.status(result.status).json(result);
  }
}

export const commentController = new CommentController();
