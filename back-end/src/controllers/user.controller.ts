import express from "express";
import { userService } from "../services/user.service";

export class UserController {
  async getUsers(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await userService.getUsers(payload);
    res.status(result.status).json(result);
  }

  async createUser(req: express.Request, res: express.Response) {
    const payload = req.body;
    const files = req.files as any;
    const user = JSON.parse(payload.user);
    const result = await userService.createUser({
      ...user,
      avatar:
        `${files?.["avatar"]?.[0]?.path ?? ""}`.replace(/\\+/g, "/").trim() ||
        payload.avatar,
    });
    res.status(result.status).json(result);
  }

  async updateUser(req: express.Request, res: express.Response) {
    const payload = req.body;
    const files = req.files as any;
    const user = JSON.parse(payload.user);
    const result = await userService.updateUser({
      user: {
        ...user,
        avatar:
          `${files?.["avatar"]?.[0]?.path ?? ""}`.replace(/\\+/g, "/").trim() ||
          payload.avatar,
      },
      thumbnailOld: user.avatar,
    });
    res.status(result.status).json(result);
  }

  async deleteUser(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await userService.deleteUser(payload);
    res.status(result.status).json(result);
  }

  async loginUser(req: express.Request, res: express.Response) {
    const payload = req.body;
    const result = await userService.loginUser(payload);
    res.status(result.status).json(result);
  }

  async getUserById(req: express.Request, res: express.Response) {
    const id = req.query.id;
    const result = await userService.getUserById(id as string);
    res.status(result.status).json(result);
  }

  async checkToken(_: express.Request, res: express.Response) {
    res.status(200).json({ status: 200, code: "success" });
  }
}

export const userController = new UserController();
