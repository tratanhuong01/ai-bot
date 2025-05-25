import { Router } from "express";
import { blogController } from "../controllers/blog.controller";
import upload from "../middlewares/upload.middleware";
import authenticateToken from "../middlewares/authentication.middleware";

const blogRouter = Router();
const resources = upload("resources/static/images/thumbnails/blogs/");

blogRouter.post("/search", blogController.getBlogs);
blogRouter.post(
  "/",
  authenticateToken,
  resources.fields([{ name: "thumbnail", maxCount: 1 }]),
  blogController.createBlog
);
blogRouter.put(
  "/",
  authenticateToken,
  resources.fields([{ name: "thumbnail", maxCount: 1 }]),
  blogController.updateBlog
);
blogRouter.delete("/", authenticateToken, blogController.deleteBlog);
blogRouter.get("/", blogController.getById);
blogRouter.get("/newbest", blogController.getNewBestById);

export default blogRouter;
