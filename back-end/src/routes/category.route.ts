import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import authenticateToken from "../middlewares/authentication.middleware";

const categoryRouter = Router();

categoryRouter.post("/search", categoryController.getCategories);
categoryRouter.post("/", authenticateToken, categoryController.createCategory);
categoryRouter.put("/", authenticateToken, categoryController.updateCategory);
categoryRouter.delete(
  "/",
  authenticateToken,
  categoryController.deleteCategory
);
categoryRouter.get("/", authenticateToken, categoryController.getCategoryById);

export default categoryRouter;
