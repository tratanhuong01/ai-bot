import { Router } from "express";
import { userController } from "../controllers/user.controller";
import authenticateToken from "../middlewares/authentication.middleware";
import upload from "../middlewares/upload.middleware";

const userRouter = Router();
const resources = upload("resources/static/images/users/avatar/");

userRouter.post("/search", userController.getUsers);
userRouter.post(
  "/",
  authenticateToken,
  resources.fields([{ name: "avatar" }]),
  userController.createUser
);
userRouter.put(
  "/",
  authenticateToken,
  resources.fields([{ name: "avatar" }]),
  userController.updateUser
);
userRouter.delete("/", authenticateToken, userController.deleteUser);
userRouter.get("/", userController.getUserById);
userRouter.post("/login", userController.loginUser);
userRouter.get("/token", authenticateToken, userController.checkToken);

export default userRouter;
