import { Router } from "express";
import { commentController } from "../controllers/comment.controller";
import authenticateToken from "../middlewares/authentication.middleware";

const commentRouter = Router();

commentRouter.post("/search", commentController.getComments);
commentRouter.post("/", commentController.createComment);
commentRouter.delete("/", authenticateToken, commentController.deleteComment);

export default commentRouter;
